// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar

'use strict';

import {SlimLoadingBarComponent} from './src/component';
import {SlimLoadingBarService} from './src/service';

export * from './src/component';
export * from './src/service';

export default {
  providers: [SlimLoadingBarService],
  directives: [SlimLoadingBarComponent]
}
