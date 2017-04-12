// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar

import { Component, Input, OnInit } from '@angular/core';

import { SlimLoadingBarService, SlimLoadingBarEvent, SlimLoadingBarEventType } from './slim-loading-bar.service';
import { isPresent } from './slim-loading-bar.utils';

/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
@Component({
    selector: 'ng2-slim-loading-bar',
    template: `
<div class="slim-loading-bar" [class.fully-visible]="disableContent && show">
    <div class="slim-loading-bar-progress" [style.width]="progress + '%'" [style.backgroundColor]="color" [style.color]="color"
        [style.height]="height" [style.opacity]="show ? '1' : '0'"></div>
</div>`
})
export class SlimLoadingBarComponent implements OnInit {

    @Input() progress: string = '0';
    @Input() color: string = 'firebrick';
    @Input() height: string = '2px';
    @Input() show: boolean = true;
    @Input() disableContent: boolean;

    constructor(public service: SlimLoadingBarService) { }

    ngOnInit(): any {
        this.service.events.subscribe((event: SlimLoadingBarEvent) => {
            if (event.type === SlimLoadingBarEventType.PROGRESS && isPresent(event.value)) {
                this.progress = event.value;
            } else if (event.type === SlimLoadingBarEventType.COLOR) {
                this.color = event.value;
            } else if (event.type === SlimLoadingBarEventType.HEIGHT) {
                this.height = event.value;
            } else if (event.type === SlimLoadingBarEventType.VISIBLE) {
                this.show = event.value;
            } else if (event.type === SlimLoadingBarEventType.DISABLECONTENT) {
                this.disableContent = event.value;
            }
        });
    }
}
