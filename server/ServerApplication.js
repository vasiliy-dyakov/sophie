import express from 'express';
import { Context, renderToString } from 'jsunit';
import { defaults, find } from 'lodash';
import debug from 'debug';
import routes from '../configs/routes';
import Todos from '../stores/Todos';
import staticConfig from '../configs/static';
import initialState from '../configs/initialState';
import Application from '../components/application/Application';
import env from '../configs/env';

defaults(process.env, env);
debug.enable(process.env.DEBUG);

var logInfo = debug('framework:info:ServerApplication'),
    logError = debug('framework:error:ServerApplication'),
    staticRoot = process.env.STATIC_ROOT,
    rootDir = __dirname.split('/').slice(0, -1).join('/'),
    ERROR_404_PAGE = 'Error404';

class ServerApplication {
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
                context = new Context({
                    stores: [Todos],
                    state: Object.assign({}, initialState, { route })
                }),
                html = this.getHtml(context);

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

    getHtml(context = {}) {
        return `<!DOCTYPE html><html>
            <head>
                <title>${this.getTitle()}</title>
                ${this.getCss()}
            </head>
            <body>
                <div id='application'>${renderToString([
                    {
                        component: Application
                    }
                ], context)}</div>
                ${this.getScripts(context)}
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

    // getScripts(context) {
    //     var scripts = [
    //         '/node_modules/less/dist/less.js',
    //         '/dist/ClientApplication.js'
    //     ].map(path => `<script src="${staticRoot}${path}"></script>`);
    //
    //     scripts.unshift(`<script>window.__STATE__ = ${JSON.stringify(context.getState())};</script>`);
    //
    //     return scripts.join('');
    // }

    getScripts(context) {
        let scripts = [];

        scripts.unshift(`<script>window.__STATE__ = ${JSON.stringify(context.state)};</script>`);

        return scripts.join('');
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

new ServerApplication();

export default ServerApplication;
