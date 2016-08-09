// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar

'use strict';

import {SlimLoadingBarComponent} from './src/slim-loading-bar.component';
import {SlimLoadingBarService} from './src/slim-loading-bar.service';

export * from './src/slim-loading-bar.component';
export * from './src/slim-loading-bar.service';

export default {
  providers: [SlimLoadingBarService],
  directives: [SlimLoadingBarComponent]
}
