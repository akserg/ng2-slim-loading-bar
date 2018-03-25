// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { SlimLoadingBarComponent } from './src/slim-loading-bar.component';
import { SlimLoadingBarService } from './src/slim-loading-bar.service';
export * from './src/slim-loading-bar.component';
export * from './src/slim-loading-bar.service';
var SlimLoadingBarModule = (function () {
    function SlimLoadingBarModule() {
    }
    SlimLoadingBarModule_1 = SlimLoadingBarModule;
    SlimLoadingBarModule.forRoot = function () {
        return {
            ngModule: SlimLoadingBarModule_1,
            providers: [SlimLoadingBarService]
        };
    };
    SlimLoadingBarModule = SlimLoadingBarModule_1 = __decorate([
        NgModule({
            declarations: [SlimLoadingBarComponent],
            exports: [SlimLoadingBarComponent],
            providers: [SlimLoadingBarService]
        })
    ], SlimLoadingBarModule);
    return SlimLoadingBarModule;
    var SlimLoadingBarModule_1;
}());
export { SlimLoadingBarModule };
