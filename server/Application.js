import express from 'express';
import sophie from '../framework/sophie';
import { defaults, find } from 'lodash';
import debug from 'debug';
import routes from '../configs/routes';
import staticConfig from '../configs/static';
import initialState from '../configs/initialState';
import ApplicationComponent from '../components/application/Application';
import env from '../configs/env';

defaults(process.env, env);
debug.enable(process.env.DEBUG);

var logInfo = debug('framework:info:Application'),
    logError = debug('framework:error:Application'),
    staticRoot = process.env.STATIC_ROOT,
    rootDir = __dirname.split('/').slice(0, -1).join('/'),
    ERROR_404_PAGE = 'Error404';

class Application {
    constructor() {
        this.initServer();
    }

    initServer() {
        var server = express();

        server.get(staticRoot + '/*', this.staticRequestHandler.bind(this));
        server.get('/*', this.requestHandler.bind(this));

        server.listen(process.env.PORT);
        logInfo('Server listen port', process.env.PORT);
    }

    requestHandler(request, response) {
        logInfo('Request path', request.path);

        try {
            var route = this.getRoute(request.path) || ERROR_404_PAGE,
                // store = createStore(
                //     combineReducers(reducers),
                //     Object.assign({}, initialState, { route })
                // ),
                store = Object.assign({}, initialState, { route }),
                html = this.getHtml(store);

            logInfo('route', route);

            if (route === ERROR_404_PAGE) {
                response.status(404);
            }

        } catch (error) {
            logError(error);
            response.status(500);
            html = `<h1>Error 500</h1>
                <p>${process.env.NODE_ENV === 'development' ? error + '' : 'Internal server error'}</p>`;
        } finally {
            response.send(html);
        }
    }

    getHtml(store = {}) {
        return `<!DOCTYPE html><html>
            <head>
                <title>${this.getTitle()}</title>
                ${this.getCss()}
            </head>
            <body>
                <div id='application'>${sophie.renderToString([
                    {
                        // component: Provider,
                        // props: {
                        //     store
                        // },
                        // children: {
                            // component: ApplicationComponent
                        // }
                        component: ApplicationComponent
                    }
                ])}</div>
                ${this.getScripts(store)}
            </body>
        </html>`;
    }

    getTitle() {
        return 'Sophie';
    }

    // getCss() {
    //     return ['/components/application/application.less'].map(path => {
    //         return `<link rel="stylesheet/less" type="text/css" href="${staticRoot}${path}"/>`;
    //     });
    // }

    getCss() {
        return '';
    }

    // getScripts(store) {
    //     var scripts = [
    //         '/node_modules/less/dist/less.js',
    //         '/dist/Application.js'
    //     ].map(path => `<script src="${staticRoot}${path}"></script>`);
    //
    //     scripts.unshift(`<script>window.__STATE__ = ${JSON.stringify(store.getState())};</script>`);
    //
    //     return scripts.join('');
    // }

    getScripts() {
        return '';
    }

    getRoute(path) {
        return routes[path];
    }

    staticRequestHandler(request, response) {
        var path = request.path.replace(staticRoot, '');

        if (find(staticConfig.enabledPatterns, pattern => pattern.test(path))) {
            logInfo('Request static path', path);
            response.sendFile(rootDir + path);
        } else {
            logInfo('Access to static file not allowed at configs (see config/static.js)', path);
            response.sendStatus(403);
        }
    }
}

export default Application;
