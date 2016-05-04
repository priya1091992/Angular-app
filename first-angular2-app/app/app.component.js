System.register(['angular2/core', './heroes.component', 'angular2/router', './app.dashboard'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, heroes_component_1, router_1, app_dashboard_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_dashboard_1_1) {
                app_dashboard_1 = app_dashboard_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Angular2 Demo';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: app_dashboard_1.DashboardComponent
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map