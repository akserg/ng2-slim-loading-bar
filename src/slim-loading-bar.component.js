// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { SlimLoadingBarService, SlimLoadingBarEventType } from './slim-loading-bar.service';
import { isPresent } from './slim-loading-bar.utils';
/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
var SlimLoadingBarComponent = (function () {
    function SlimLoadingBarComponent(service, _elmRef, _changeDetectorRef) {
        this.service = service;
        this._elmRef = _elmRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.isTransition = 'none';
        this._progress = '0';
        this.color = 'firebrick';
        this.height = '2px';
        this.show = true;
    }
    Object.defineProperty(SlimLoadingBarComponent.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (progress) {
            this.isTransition = progress >= this._progress ? 'all 0.5s ease-in-out' : 'none';
            this._progress = progress;
        },
        enumerable: true,
        configurable: true
    });
    SlimLoadingBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.events.subscribe(function (event) {
            if (event.type === SlimLoadingBarEventType.PROGRESS && isPresent(event.value)) {
                _this.progress = event.value;
            }
            else if (event.type === SlimLoadingBarEventType.COLOR) {
                _this.color = event.value;
            }
            else if (event.type === SlimLoadingBarEventType.HEIGHT) {
                _this.height = event.value;
            }
            else if (event.type === SlimLoadingBarEventType.VISIBLE) {
                _this.show = event.value;
            }
            _this._changeDetectorRef.markForCheck();
        });
    };
    SlimLoadingBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.service.events.subscribe(function (event) {
            _this._elmRef.nativeElement.visible = event.type === SlimLoadingBarEventType.VISIBLE ? event.value : true;
            _this._changeDetectorRef.detectChanges();
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimLoadingBarComponent.prototype, "progress", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SlimLoadingBarComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SlimLoadingBarComponent.prototype, "height", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SlimLoadingBarComponent.prototype, "show", void 0);
    SlimLoadingBarComponent = __decorate([
        Component({
            selector: 'ng2-slim-loading-bar',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "\n<div class=\"slim-loading-bar\">\n    <div class=\"slim-loading-bar-progress\" [style.width]=\"progress + '%'\" [style.backgroundColor]=\"color\" [style.color]=\"color\"\n        [style.height]=\"height\" [style.opacity]=\"show ? '1' : '0'\" [style.transition]=\"isTransition\"></div>\n</div>"
        }),
        __metadata("design:paramtypes", [SlimLoadingBarService, ElementRef, ChangeDetectorRef])
    ], SlimLoadingBarComponent);
    return SlimLoadingBarComponent;
}());
export { SlimLoadingBarComponent };
