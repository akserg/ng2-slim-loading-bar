import { OnInit } from '@angular/core';
import { SlimLoadingBarService } from './slim-loading-bar.service';
/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
export declare class SlimLoadingBarComponent implements OnInit {
    service: SlimLoadingBarService;
    progress: string;
    color: string;
    height: string;
    show: boolean;
    constructor(service: SlimLoadingBarService);
    ngOnInit(): any;
}
