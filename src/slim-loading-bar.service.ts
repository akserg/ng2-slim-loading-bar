// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar

import {Injectable} from '@angular/core';

import {isPresent} from './slim-loading-bar.utils';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export enum SlimLoadingBarEventType {
    PROGRESS,
    HEIGHT,
    COLOR,
    VISIBLE,
    TRANSITION_TIMING_FUNCTION
}

export type TransitionTimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | string;

export class SlimLoadingBarEvent {
    constructor(public type:SlimLoadingBarEventType, public value:any) {}
}

/**
 * SlimLoadingBar service helps manage Slim Loading bar on the top of screen or parent component
 */
@Injectable()
export class SlimLoadingBarService {

    private _progress: number = 0;
    private _height: string = '2px';
    private _color: string = 'firebrick';
    private _visible: boolean = true;
    private _transitionTimingFunction: TransitionTimingFunction = 'linear';

    private _intervalCounterId: any = 0;
    public interval: number = 500; // in milliseconds

    private growMagnitude: number = 0;
    public growSpeed: number = 1 / 10;

    private eventSource: Subject<SlimLoadingBarEvent> = new Subject<SlimLoadingBarEvent>();
    public events: Observable<SlimLoadingBarEvent> = this.eventSource.asObservable();

    constructor() {}

    set progress(value:number) {
        if (isPresent(value)) {
            if (value > 0) {
                this.visible = true;
            }
            this._progress = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.PROGRESS, this._progress));
        }
    }

    get progress():number {
        return this._progress;
    }


    set height(value:string) {
        if (isPresent(value)) {
            this._height = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.HEIGHT, this._height));
        }
    }

    get height():string {
        return this._height;
    }

    set color(value:string) {
        if (isPresent(value)) {
            this._color = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.COLOR, this._color));
        }
    }

    get color():string {
        return this._color;
    }

    set visible(value: boolean) {
        if (isPresent(value)) {
            this._visible = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.VISIBLE, this._visible));
        }
    }

    get visible():boolean {
        return this._visible;
    }

    set transitionTimingFunction(value: TransitionTimingFunction) {
        if (isPresent(value)) {
            this._transitionTimingFunction = value;
            this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.TRANSITION_TIMING_FUNCTION, this._transitionTimingFunction));
        }
    }

    get transitionTimingFunction(): TransitionTimingFunction {
        return this._transitionTimingFunction;
    }

    private emitEvent(event: SlimLoadingBarEvent) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    }


    start() {
        // Stop current timer
        this.stop();
        // Make it visible for sure
        this.visible = true;
        // Run the timer with milliseconds interval
        this._intervalCounterId = setInterval(this.growProgress.bind(this), this.interval);
    }

    stop() {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    }

    reset() {
        this.stop();
        this.progress = 0;
    }

    complete(onCompleted: Function = null) {
        this.progress = 100;
        this.growMagnitude = 0;
        this.stop();
        setTimeout(() => {
            // Hide it away
            this.visible = false;
            setTimeout(() => {
                // Drop to 0
                this.progress = 0;
                if (onCompleted) {
                    onCompleted();
                }
            }, 250);
        }, 250);
    }

    protected growProgress() {
        this.growMagnitude += 1;
        // for all n >= 1
        // progress = sum ((n / (n + 1))^k ) / n , k=1 to m) * 100%
        // let m = Infinity
        // progress = 100%
        // Math ....
        this.progress += this.getIncrement(this.growMagnitude) * 100;
    }

    protected getIncrement(growMagnitude: number) {
        const growRateInverse = 1 / this.growSpeed;
        // (n / (n + 1))^k ) / n, where k controls how big is the increment ans ensures the infinite sum produces 1 as result
        return ((growRateInverse / (growRateInverse + 1)) ** growMagnitude) / growRateInverse;
    }
}

