import {Component} from 'angular2/core';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {DashboardComponent} from './app.dashboard';

@Component({
  selector: 'hero-app',
  templateUrl:'app/app.component.html',
directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
]
})

@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
   // useAsDefault: true
},
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])

export class AppComponent {
  title = 'Angular2 Demo';
}
