import { OnInit, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { SlimLoadingBarService } from './slim-loading-bar.service';
/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
export declare class SlimLoadingBarComponent implements OnInit, AfterViewInit {
    service: SlimLoadingBarService;
    private _elmRef;
    private _changeDetectorRef;
    isTransition: string;
    private _progress;
    progress: string;
    color: string;
    height: string;
    show: boolean;
    constructor(service: SlimLoadingBarService, _elmRef: ElementRef, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
