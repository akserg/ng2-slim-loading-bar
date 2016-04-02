# ng2-toasty [![Build Status](https://travis-ci.org/akserg/ng2-toasty.svg?branch=master)](https://travis-ci.org/akserg/ng2-toasty) [![npm version](https://img.shields.io/npm/v/ng2-toasty.svg)](https://www.npmjs.com/package/ng2-toasty) [![npm monthly downloads](https://img.shields.io/npm/dm/ng2-toasty.svg?style=flat-square)](https://www.npmjs.com/package/ng2-toasty)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Angular2 Toasty component shows growl-style alerts and messages for your application.

Simple examples using ng2-toasty:
- with SystemJS in [ng2-systemjs-demo](https://github.com/akserg/ng2-systemjs-demo)
- with Webpack in [ng2-webpack-demo](https://github.com/akserg/ng2-webpack-demo)

Online demo available [here](http://akserg.github.io/ng2-webpack-demo)

## Installation
First you need to install the npm module:
```sh
npm install ng2-toasty --save
```

If you use SystemJS to load your files, you might have to update your config with this if you don't use `defaultJSExtensions: true`:
```js
System.config({
    packages: {
        "/ng2-toasty": {"defaultExtension": "js"}
    }
});
```

Finally, you can use *ng2-toasty* in your Angular 2 project:
- Import `ToastyService, ToastyConfig, Toasty, ToastOptions` from `ng2-toasty/ng2-toasty`
- Instantiate `ToastyService, ToastyConfig` in the bootstrap of your application;
- Add `Toasty` to the "directives" property of your application component;
- Add `<ng2-toasty></ng2-toasty>` tag in template of your application component.

```js
import {Component} from 'angular2/core';
import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';
import {bootstrap} from 'angular2/platform/browser';

bootstrap(AppComponent, [
    ToastyService, ToastyConfig // It is required to have 1 unique instance of your service
]);

@Component({
    selector: 'app',
    directives: [Toasty],
    template: `
        <div>Hello world</div>
        <button (click)="addToast()">Add Toast</button>
        <ng2-toasty></ng2-toasty>
    `
})
export class AppComponent {
    
    constructor(private toastyService:ToastyService) { }
    
    addToast() {
        // Just add default Toast with title only
        this.toastyService.default('Hi there');
        // Or create the instance of ToastOptions
        var toastOptions:ToastOptions = {
            title: "My title",
            msg: "The message",
            showClose: true,
            timeout: 5000,
            theme: 'default'
            onAdd: (toast:ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.info(toastOptions);
        this.toastyService.success(toastOptions);
        this.toastyService.wait(toastOptions);
        this.toastyService.error(toastOptions);
        this.toastyService.warning(toastOptions);
    }
}
```

## How dynamically update title and message of toast
Here is an example of how to dynamically update message and title of individual toast:

```js
import {Component} from 'angular2/core';
import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';
import {bootstrap} from 'angular2/platform/browser';
import {Subject, Observable, Subscription} from 'rxjs/Rx';

bootstrap(AppComponent, [
    ToastyService, ToastyConfig // It is required to have 1 unique instance of your service
]);

@Component({
    selector: 'app',
    directives: [Toasty],
    template: `
        <div>Hello world</div>
        <button (click)="addToast()">Add Toast</button>
        <ng2-toasty></ng2-toasty>
    `
})
export class AppComponent {
    
    getTitle(num: number): string {
        return 'Countdown: ' + num;
    }

    getMessage(num: number): string {
        return 'Seconds left: ' + num;
    }
    
    constructor(private toastyService:ToastyService) { }
    
    addToast() {
        let interval = 1000;
        let timeout = 5000;
        let seconds = timeout / 1000;
        let subscription: Subscription;
        
        let toastOptions: ToastOptions = {
            title: this.getTitle(seconds),
            msg: this.getMessage(seconds),
            showClose: true,
            timeout: timeout,
            onAdd: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
                // Run the timer with 1 second iterval
                let observable = Observable.interval(interval).take(seconds);
                // Start listen seconds beat
                subscription = observable.subscribe((count: number) => {
                    // Update title of toast
                    toast.title = this.getTitle(seconds - count - 1);
                    // Update message of toast
                    toast.msg = this.getMessage(seconds - count - 1);
                });

            },
            onRemove: function(toast: ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
                // Stop listenning
                subscription.unsubscribe();
            }
        };

        switch (this.options.type) {
            case 'default': this.toastyService.default(toastOptions); break;
            case 'info': this.toastyService.info(toastOptions); break;
            case 'success': this.toastyService.success(toastOptions); break;
            case 'wait': this.toastyService.wait(toastOptions); break;
            case 'error': this.toastyService.error(toastOptions); break;
            case 'warning': this.toastyService.warning(toastOptions); break;
        }
    }
}
```

# License
 [MIT](/LICENSE)

# Credits 
Inspired by [angular-toasty](https://github.com/teamfa/angular-toasty)
