// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit=Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 500;

// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
    baseURL: '/base/',
    defaultJSExtensions: true,
    map: {
        '@angular/core/testing': 'node_modules/@angular/core/testing.js',
        '@angular/core': 'node_modules/@angular/core/index.js',
        '@angular/compiler/testing': 'node_modules/@angular/compiler/testing.js',
        '@angular/compiler': 'node_modules/@angular/compiler/index.js',
        '@angular/common/testing': 'node_modules/@angular/common/testing.js',
        '@angular/common': 'node_modules/@angular/common/index.js',
        '@angular/common/src/facade/lang': 'node_modules/@angular/common/src/facade/lang.js',
        '@angular/platform-browser-dynamic/testing': 'node_modules/@angular/platform-browser-dynamic/testing.js',
        '@angular/platform-browser/testing': 'node_modules/@angular/platform-browser/testing.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/index.js',
        '@angular': 'node_modules/@angular',
        'browser_adapter': 'node_modules/@angular/platform-browser/src/browser/browser_adapter',
        'rxjs': 'node_modules/rxjs'
    }
});

System.import('browser_adapter').then(function(browser_adapter) {
    browser_adapter.BrowserDomAdapter.makeCurrent();
}).then(function() {
        return Promise.all(
            Object.keys(window.__karma__.files) // All files served by Karma.
                .filter(onlySpecFiles)
                .map(file2moduleName)
                .map(function(path) {
                    return System.import(path).then(function(module) {
                        if (module.hasOwnProperty('main')) {
                            module.main();
                        } else {
                            throw new Error('Module ' + path + ' does not implement main() method.');
                        }
                    });
                }));
    })
    .then(function() {
        __karma__.start();
    }, function(error) {
        console.error(error.stack || error);
        __karma__.start();
    });


function onlySpecFiles(path) {
    return /[\.|_]spec\.js$/.test(path);
}

// Normalize paths to module names.
function file2moduleName(filePath) {
    return filePath.replace(/\\/g, '/')
        .replace(/^\/base\//, '')
        .replace(/\.js/, '');
}