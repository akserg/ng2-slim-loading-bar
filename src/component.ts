// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar

import {Component, Input, OnInit} from 'angular2/core';
import {isPresent} from 'angular2/src/facade/lang';
import {CORE_DIRECTIVES} from 'angular2/common';

import {SlimLoadingBarService, SlimLoadingBarEvent, SlimLoadingBarEventType} from './service';

/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
@Component({
    selector: 'ng2-slim-loading-bar',
    directives: [CORE_DIRECTIVES],
    template: `
<div class="slim-loading-bar">
    <div class="slim-loading-bar-progress" [style.width]="progress" [style.backgroundColor]="color" [style.color]="color"
        [style.height]="height" [style.opacity]="show ? '1' : '0'"></div>
</div>`
})
export class SlimLoadingBar implements OnInit {

    private progressEl:HTMLDivElement;

    private _progress: string = '0%';
    @Input() set progress(value: string) {
        if (isPresent(value)) {
            this._progress = value + '%';
        }
    }
    get progress(): string {
        return this._progress;
    }

    @Input() color: string = 'firebrick';
    @Input() height: string = '2px';
    @Input() show: boolean = true;

    constructor(private service:SlimLoadingBarService) {}

    ngOnInit(): any {
        this.service.observable.subscribe((event:SlimLoadingBarEvent) => {
            if (event.type === SlimLoadingBarEventType.PROGRESS) {
                this.progress = event.value;
            } else if (event.type === SlimLoadingBarEventType.COLOR) {
                this.color = event.value;
            } else if (event.type === SlimLoadingBarEventType.HEIGHT) {
                this.height = event.value;
            } else if (event.type === SlimLoadingBarEventType.VISIBLE) {
                this.show = event.value;
            }
        });
    }
}
