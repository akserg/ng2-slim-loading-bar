# Angular 2 Slim Loading Bar [![npm version](https://img.shields.io/npm/v/ng2-slim-loading-bar.svg)](https://www.npmjs.com/package/ng2-slim-loading-bar) [![npm monthly downloads](https://img.shields.io/npm/dm/ng2-slim-loading-bar.svg?style=flat-square)](https://www.npmjs.com/package/ng2-slim-loading-bar)
Angular2 component shows slim loading bar at the top of the page of your application.

[![Build Status](https://travis-ci.org/akserg/ng2-slim-loading-bar.svg?branch=master)](https://travis-ci.org/akserg/ng2-slim-loading-bar) 
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 
[![Dependency Status](https://david-dm.org/akserg/ng2-slim-loading-bar.svg)](https://david-dm.org/akserg/ng2-slim-loading-bar)
[![devDependency Status](https://david-dm.org/akserg/ng2-slim-loading-bar/dev-status.svg)](https://david-dm.org/akserg/ng2-slim-loading-bar#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/akserg/ng2-slim-loading-bar/badge.svg)](https://snyk.io/test/github/akserg/ng2-slim-loading-bar)

Follow me [![twitter](https://img.shields.io/twitter/follow/akopkokhyants.svg?style=social&label=%20akopkokhyants)](https://twitter.com/akopkokhyants) to be notified about new releases.

_Some of these APIs and Components are not final and are subject to change!_

## Installation

```sh
npm install ng2-slim-loading-bar --save
```

## Demo
Simple examples using ng2-slim-loading-bar:
- with SystemJS in [ng2-systemjs-demo](https://github.com/akserg/ng2-systemjs-demo)
- with Webpack in [ng2-webpack-demo](https://github.com/akserg/ng2-webpack-demo)

Online demo available [here](http://akserg.github.io/ng2-webpack-demo)

## Usage

If you use SystemJS to load your files, you might have to update your config:

```js
System.config({
    map: {
        'ng2-slim-loading-bar': 'node_modules/ng2-slim-loading-bar/bundles/index.umd.js'
    }
});
```

#### 1. Update the markup
- Import the `style.css` into your web page
- Add `<ng2-slim-loading-bar></ng2-slim-loading-bar>` tag in template of your application component.

#### 2. Import the `SlimLoadingBarModule`
Import `SlimLoadingBarModule.forRoot()` in the NgModule of your application. 
The `forRoot` method is a convention for modules that provide a singleton service.

```ts
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from '@angular/core';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
    imports: [
        BrowserModule,
        SlimLoadingBarModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

If you have multiple NgModules and you use one as a shared NgModule (that you import in all of your other NgModules), 
don't forget that you can use it to export the `SlimLoadingBarModule` that you imported in order to avoid having to import it multiple times.

```ts
@NgModule({
    imports: [
        BrowserModule,
        SlimLoadingBarModule.forRoot()
    ],
    exports: [BrowserModule, SlimLoadingBarModule],
})
export class SharedModule {
}
```

#### 3. Use the `SlimLoadingBarService` for your application
- Import `SlimLoadingBarService` from `ng2-slim-loading-bar` in your application code:

```js
import {Component} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
    selector: 'app',
    template: `
        <div>Hello world</div>
        <button (click)="startLoading()">Start Loading</button>
        <button (click)="stopLoading()">Stop Loading</button>
        <button (click)="completeLoading()">Complete Loading</button>
        <ng2-slim-loading-bar></ng2-slim-loading-bar>
    `
})
export class AppComponent {
    
    constructor(private slimLoadingBarService: SlimLoadingBarService) { }
    
    startLoading() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }

    stopLoading() {
        this.slimLoadingBarService.stop();
    }

    completeLoading() {
        this.slimLoadingBarService.complete();
    }
}
```

#### 3. Customize the the `ng2-slim-loading-bar` for your application
You can use the following properties to customize the `ng2-slim-loading-bar` component in your template:
- `color` - The color of loading bar. Default is `firebrick`. Any CSS compatible value.
- `height` - The height of loading bar. Default value is `2px`.
- `show` - The flag helps hide and show the loading bar. Devault value is `true`.

Example: 
`<ng2-slim-loading-bar [color]="'blue'" [height]="'4px'"></ng2-slim-loading-bar>`

#### 4. Manage the loading bar
You can use the following properties to customize the SlimLoadingBar via instance of SlimLoadingBarService:
- `color` - The color of loading bar.
- `height` - The height of loading bar.
- `visible` - The flag helps hide and show the loading bar.

You can use the following methods to control the SlimLoadingBar via instance of SlimLoadingBarService:
- `start` - Start the loading progress. Use the callback function as an parameter to listed the complete event.
- `stop` - Stop the loading progress. This method pause the current position of loading progress.
- `reset`- Reset the position of loading progress to 0.
- `complete` - Set the progress to 100% and hide the progress bar.

# Credits 
Inspired by [ngProgress.js](https://github.com/VictorBjelkholm/ngProgress)

# License
 [MIT](/LICENSE)
