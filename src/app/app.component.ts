import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event as NavigationEvent , RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

// https://angular.io/guide/router-tutorial-toh
// https://www.tektutorialshub.com/angular/angular-router-events/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  isLoader: boolean = false;
  title = 'angular-router-sample';

  constructor(private _router: Router) { }

  ngOnInit() {
    this.routerEvents();
  }

  routerEvents() {
    this._router.events.subscribe((event: NavigationEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.isLoader = true;
          break;
        }
        case event instanceof NavigationEnd: {
          this.isLoader = false;
          break;
        }
      }
    });

  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
