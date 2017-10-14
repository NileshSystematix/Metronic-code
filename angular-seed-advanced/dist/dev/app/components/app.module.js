"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var theme_component_1 = require("./theme/theme.component");
var layout_module_1 = require("./theme/layouts/layout.module");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var script_loader_service_1 = require("./_services/script-loader.service");
var theme_routing_module_1 = require("./theme/theme-routing.module");
var auth_module_1 = require("./auth/auth.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            theme_component_1.ThemeComponent,
            app_component_1.AppComponent,
        ],
        imports: [
            layout_module_1.LayoutModule,
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            app_routing_module_1.AppRoutingModule,
            theme_routing_module_1.ThemeRoutingModule,
            auth_module_1.AuthModule,
        ],
        providers: [script_loader_service_1.ScriptLoaderService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4REFBMEQ7QUFDMUQsc0NBQXlDO0FBQ3pDLDJEQUF5RDtBQUN6RCwrREFBNkQ7QUFDN0QsbUVBQStFO0FBRS9FLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsMkVBQXdFO0FBQ3hFLHFFQUFrRTtBQUNsRSxrREFBZ0Q7QUFrQmhELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsU0FBUztJQWhCckIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ2hCLGdDQUFjO1lBQ1YsNEJBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNYLDRCQUFZO1lBQ1IsZ0NBQWE7WUFDYixvQ0FBdUI7WUFDdkIscUNBQWdCO1lBQ2hCLHlDQUFrQjtZQUNsQix3QkFBVTtTQUNYO1FBQ0QsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7UUFDaEMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL3RoZW1lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuL3RoZW1lL2xheW91dHMvbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNjcmlwdExvYWRlclNlcnZpY2UgfSBmcm9tIFwiLi9fc2VydmljZXMvc2NyaXB0LWxvYWRlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRoZW1lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3RoZW1lL3RoZW1lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tIFwiLi9hdXRoL2F1dGgubW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG5UaGVtZUNvbXBvbmVudCxcbiAgICBBcHBDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbkxheW91dE1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgVGhlbWVSb3V0aW5nTW9kdWxlLFxyXG4gICAgQXV0aE1vZHVsZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1NjcmlwdExvYWRlclNlcnZpY2VdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=
