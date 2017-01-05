// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar

import { NgModule, ModuleWithProviders } from "@angular/core";

import { SlimLoadingBarComponent } from './src/slim-loading-bar.component';
import { SlimLoadingBarService } from './src/slim-loading-bar.service';

export * from './src/slim-loading-bar.component';
export * from './src/slim-loading-bar.service';

@NgModule({
    declarations: [SlimLoadingBarComponent],
    exports: [SlimLoadingBarComponent],
    providers: [SlimLoadingBarService]
})
export class SlimLoadingBarModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SlimLoadingBarModule,
            providers: [SlimLoadingBarService]
        };
    }
}
