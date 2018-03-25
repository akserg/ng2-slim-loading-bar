// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar
import { Component, Input } from '@angular/core';
import { SlimLoadingBarService, SlimLoadingBarEventType } from './slim-loading-bar.service';
import { isPresent } from './slim-loading-bar.utils';
/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
export var SlimLoadingBarComponent = (function () {
    function SlimLoadingBarComponent(service) {
        this.service = service;
        this.progress = '0';
        this.color = 'firebrick';
        this.height = '2px';
        this.show = true;
    }
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
        });
    };
    SlimLoadingBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-slim-loading-bar',
                    template: "\n<div class=\"slim-loading-bar\">\n    <div class=\"slim-loading-bar-progress\" [style.width]=\"progress + '%'\" [style.backgroundColor]=\"color\" [style.color]=\"color\"\n        [style.height]=\"height\" [style.opacity]=\"show ? '1' : '0'\"></div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    SlimLoadingBarComponent.ctorParameters = function () { return [
        { type: SlimLoadingBarService, },
    ]; };
    SlimLoadingBarComponent.propDecorators = {
        'progress': [{ type: Input },],
        'color': [{ type: Input },],
        'height': [{ type: Input },],
        'show': [{ type: Input },],
    };
    return SlimLoadingBarComponent;
}());
