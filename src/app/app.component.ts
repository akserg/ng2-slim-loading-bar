import { Component } from '@angular/core';
import { SlimLoadingBarLibService } from 'slim-loading-bar-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-slim-loading-bar';
  constructor(private slimLoadingBarService: SlimLoadingBarLibService) {

  }
  ngOnInit() {
    setTimeout(() => this.slimLoadingBarService.complete(), 1000);
    this.slimLoadingBarService.start();
  }
}
