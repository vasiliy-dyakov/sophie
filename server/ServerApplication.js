import express from 'express';
import { Store, renderToString } from 'jsunit';
import { defaults, find } from 'lodash';
import debug from 'debug';
import routes from '../configs/routes';
import Todos from '../reducers/Todos';
import staticConfig from '../configs/static';
import Application from '../components/application/Application';
import env from '../configs/env';
import * as pages from '../pages/pages';

defaults(process.env, env);
debug.enable(process.env.DEBUG);

var logInfo = debug('framework:info:ServerApplication'),
    logError = debug('framework:error:ServerApplication'),
    staticRoot = process.env.STATIC_ROOT,
    rootDir = __dirname.split('/').slice(0, -1).join('/'),
    ERROR_404 = 'Error404';

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
            var route = this.getRoute(request.path) || ERROR_404,
                { initActions = [] } = pages[route],
                store = new Store({
                    reducers: [Todos],
                    state: Object.assign({}, { route })
                });

            logInfo('route', route);

            if (route === ERROR_404) {
                response.status(404);
            }

            Promise.all(initActions.map(Action => new Action({ store })))
                .then(() => response.send(this.getHtml(store)))
                .catch(error => {
                    this.send500({ error, response });
                });

        } catch (error) {
            this.send500({ error, response });
        }
    }

    send500({ error, response }) {
        logError(error);
        response.status(500);
        response.send(`<h1>Error 500</h1>
            <p>${process.env.NODE_ENV === 'development' ? error + '' : 'Internal server error'}</p>`);
    }

    getHtml(store = {}) {
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
                ], store)}</div>
                ${this.getScripts(store)}
            </body>
        </html>`;
    }

    getTitle() {
        return 'Todos';
    }

    getCss() {
        return ['/components/application/application.less'].map(path => {
            return `<link rel="stylesheet/less" type="text/css" href="${staticRoot}${path}"/>`;
        });
    }

    getCss() {
        return '';
    }

    getScripts(store) {
        let scripts = [
            // '/node_modules/less/dist/less.js',
            '/dist/ClientApplication.js'
        ].map(path => `<script src="${staticRoot}${path}"></script>`);

        scripts.unshift(`<script>window.__STATE__ = ${JSON.stringify(store.dehydrate())};</script>`);

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
