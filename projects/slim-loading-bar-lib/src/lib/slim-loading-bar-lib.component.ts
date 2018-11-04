


import { Component, Input, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef } from '@angular/core';

import { SlimLoadingBarLibService, SlimLoadingBarEvent, SlimLoadingBarEventType } from './slim-loading-bar-lib.service';
import { isPresent } from './slim-loading-bar.utils';

/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
@Component({
    selector: 'ng2-slim-loading-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
<div class="slim-loading-bar">
    <div class="slim-loading-bar-progress" [style.width]="progress + '%'" [style.backgroundColor]="color" [style.color]="color"
        [style.height]="height" [style.opacity]="show ? '1' : '0'" [style.transition]="isTransition"></div>
</div>`,
styles:[`
    /* Styling for the Slim Loading Progress Bar container */
    .slim-loading-bar {
        position: fixed;
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99999;
    }

    /* Styling for the Slim Loading Progress Bar itself */
    .slim-loading-bar-progress {
        margin: 0;
        padding: 0;
        z-index: 99998;
        background-color: rgba(46, 204, 113,1.0);
        color: rgba(46, 204, 113,1.0);
        box-shadow: 0 0 10px 0; /* Inherits the font color */
        height: 2px;
        opacity: 0;
    }
`]
})
export class SlimLoadingBarLibComponent implements OnInit, AfterViewInit {

    isTransition: string = 'none';

    private _progress: string = '0';
    @Input() set progress(progress: string) {
        this.isTransition = progress >= this._progress ?  'all 0.5s ease-in-out' : 'none';
        this._progress = progress;
    }

    get progress() {
        return this._progress;
    }

    @Input() color: string = 'firebrick';
    @Input() height: string = '2px';
    @Input() show: boolean = true;

    constructor(public service: SlimLoadingBarLibService, private _elmRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.service.events.subscribe((event: SlimLoadingBarEvent) => {
            if (event.type === SlimLoadingBarEventType.PROGRESS && isPresent(event.value)) {
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

    ngAfterViewInit(): void {
        this.service.events.subscribe((event: SlimLoadingBarEvent) => {
           this._elmRef.nativeElement.visible = event.type === SlimLoadingBarEventType.VISIBLE ? event.value : true;
           this._changeDetectorRef.detectChanges();
       });
    }   
}