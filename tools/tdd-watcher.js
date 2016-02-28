var fs = require('fs'),
    spawn = require('child_process').spawn,
    ignoreRegex = /^(\.|Makefile|package.json|node_modules|tools)/,
    debug = require('debug')('watcher:info'),
    isExecuting = false,
    needRestart = false;

function executeTests() {
    isExecuting = true;
    debug('tests begin');

    spawn('make', ['test'], {stdio: 'inherit'})
        .on('close', () => {
            isExecuting = false;

            if (needRestart) {
                needRestart = false;
                executeTests();
            }
        });
}

debug('begin watch');

fs.watch('./', {
    persistent: true,
    recursive: true
}, function(event, filename) {
    if (!ignoreRegex.test(filename)) {
        debug(`${filename} changed`);

        if (!isExecuting) {
            executeTests();
        } else {
            needRestart = true;
        }
    }
});

debug('make tests after start');

executeTests();
