"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var theme_component_1 = require("./theme.component");
var router_1 = require("@angular/router");
var auth_guard_1 = require("../auth/_guards/auth.guard");
var routes = [
    {
        "path": "",
        "component": theme_component_1.ThemeComponent,
        "canActivate": [auth_guard_1.AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/aside-left-display-disabled\/index\/index.module#IndexModule"
            },
            {
                "path": "inner",
                "loadChildren": ".\/pages\/default\/inner\/inner.module#InnerModule"
            },
            {
                "path": "profile",
                "loadChildren": ".\/pages\/default\/profile\/profile.module#ProfileModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];
var ThemeRoutingModule = (function () {
    function ThemeRoutingModule() {
    }
    return ThemeRoutingModule;
}());
ThemeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ThemeRoutingModule);
exports.ThemeRoutingModule = ThemeRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL3RoZW1lLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXVDO0FBQ3ZDLHFEQUFtRDtBQUNuRCwwQ0FBcUQ7QUFDckQseURBQXFEO0FBRXJELElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksTUFBTSxFQUFFLEVBQUU7UUFDVixXQUFXLEVBQUUsZ0NBQWM7UUFDM0IsYUFBYSxFQUFFLENBQUMsc0JBQVMsQ0FBQztRQUMxQixVQUFVLEVBQUU7WUFDUjtnQkFDSSxNQUFNLEVBQUUsT0FBTztnQkFDZixjQUFjLEVBQUUsd0VBQXdFO2FBQzNGO1lBQ0Q7Z0JBQ0ksTUFBTSxFQUFFLE9BQU87Z0JBQ2YsY0FBYyxFQUFFLG9EQUFvRDthQUN2RTtZQUNEO2dCQUNJLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixjQUFjLEVBQUUsMERBQTBEO2FBQzdFO1lBQ0Q7Z0JBQ0ksTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsY0FBYyxFQUFFLDBFQUEwRTthQUM3RjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFlBQVksRUFBRSxPQUFPO2dCQUNyQixXQUFXLEVBQUUsTUFBTTthQUN0QjtTQUNKO0tBQ0o7SUFDRDtRQUNJLE1BQU0sRUFBRSxJQUFJO1FBQ1osWUFBWSxFQUFFLEtBQUs7UUFDbkIsV0FBVyxFQUFFLE1BQU07S0FDdEI7Q0FDSixDQUFDO0FBTUYsSUFBYSxrQkFBa0I7SUFBL0I7SUFBaUMsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQixrQkFBa0I7SUFKOUIsZUFBUSxDQUFDO1FBQ1QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUN2QixDQUFDO0dBQ1csa0JBQWtCLENBQUc7QUFBckIsZ0RBQWtCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3RoZW1lL3RoZW1lLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS5jb21wb25lbnQnO1xuaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuLi9hdXRoL19ndWFyZHMvYXV0aC5ndWFyZFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBcInBhdGhcIjogXCJcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogVGhlbWVDb21wb25lbnQsXG4gICAgICAgIFwiY2FuQWN0aXZhdGVcIjogW0F1dGhHdWFyZF0sXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcImluZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJsb2FkQ2hpbGRyZW5cIjogXCIuXFwvcGFnZXNcXC9hc2lkZS1sZWZ0LWRpc3BsYXktZGlzYWJsZWRcXC9pbmRleFxcL2luZGV4Lm1vZHVsZSNJbmRleE1vZHVsZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcImlubmVyXCIsXG4gICAgICAgICAgICAgICAgXCJsb2FkQ2hpbGRyZW5cIjogXCIuXFwvcGFnZXNcXC9kZWZhdWx0XFwvaW5uZXJcXC9pbm5lci5tb2R1bGUjSW5uZXJNb2R1bGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgXCJsb2FkQ2hpbGRyZW5cIjogXCIuXFwvcGFnZXNcXC9kZWZhdWx0XFwvcHJvZmlsZVxcL3Byb2ZpbGUubW9kdWxlI1Byb2ZpbGVNb2R1bGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCI0MDRcIixcbiAgICAgICAgICAgICAgICBcImxvYWRDaGlsZHJlblwiOiBcIi5cXC9wYWdlc1xcL2RlZmF1bHRcXC9ub3QtZm91bmRcXC9ub3QtZm91bmRcXC9ub3QtZm91bmQubW9kdWxlI05vdEZvdW5kTW9kdWxlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJyZWRpcmVjdFRvXCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInBhdGhNYXRjaFwiOiBcImZ1bGxcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicGF0aFwiOiBcIioqXCIsXG4gICAgICAgIFwicmVkaXJlY3RUb1wiOiBcIjQwNFwiLFxuICAgICAgICBcInBhdGhNYXRjaFwiOiBcImZ1bGxcIlxuICAgIH1cbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcblx0ZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1lUm91dGluZ01vZHVsZSB7fSJdfQ==
