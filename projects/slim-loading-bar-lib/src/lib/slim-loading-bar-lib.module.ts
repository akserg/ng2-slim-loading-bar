import { NgModule } from '@angular/core';
import { SlimLoadingBarLibComponent } from './slim-loading-bar-lib.component';
import { SlimLoadingBarLibService } from './slim-loading-bar-lib.service';

@NgModule({
  declarations: [SlimLoadingBarLibComponent],
  providers:[SlimLoadingBarLibService],
  imports: [
  ],
  exports: [SlimLoadingBarLibComponent]
})
export class SlimLoadingBarLibModule { }
