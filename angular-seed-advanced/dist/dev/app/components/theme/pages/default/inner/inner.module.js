"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var inner_component_1 = require("./inner.component");
var layout_module_1 = require("../../../layouts/layout.module");
var default_component_1 = require("../default.component");
var routes = [
    {
        "path": "",
        "component": default_component_1.DefaultComponent,
        "children": [
            {
                "path": "",
                "component": inner_component_1.InnerComponent
            }
        ]
    }
];
var InnerModule = (function () {
    function InnerModule() {
    }
    return InnerModule;
}());
InnerModule = __decorate([
    core_1.NgModule({ imports: [
            common_1.CommonModule, router_1.RouterModule.forChild(routes), layout_module_1.LayoutModule
        ], exports: [
            router_1.RouterModule
        ], declarations: [
            inner_component_1.InnerComponent
        ] })
], InnerModule);
exports.InnerModule = InnerModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL3BhZ2VzL2RlZmF1bHQvaW5uZXIvaW5uZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBdUQ7QUFDdkQscURBQW1EO0FBQ25ELGdFQUE4RDtBQUM5RCwwREFBd0Q7QUFFeEQsSUFBTSxNQUFNLEdBQVc7SUFDbkI7UUFDSSxNQUFNLEVBQUUsRUFBRTtRQUNWLFdBQVcsRUFBRSxvQ0FBZ0I7UUFDN0IsVUFBVSxFQUFFO1lBQ1I7Z0JBQ0ksTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsV0FBVyxFQUFFLGdDQUFjO2FBQzlCO1NBQ0o7S0FDSjtDQUNKLENBQUM7QUFRRixJQUFhLFdBQVc7SUFBeEI7SUFJQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLFdBQVc7SUFQdkIsZUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFO1lBQ3BCLHFCQUFZLEVBQUMscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsNEJBQVk7U0FDdEQsRUFBQyxPQUFPLEVBQUU7WUFDWCxxQkFBWTtTQUNYLEVBQUMsWUFBWSxFQUFFO1lBQ2hCLGdDQUFjO1NBQ2IsRUFBQyxDQUFDO0dBQ1UsV0FBVyxDQUl2QjtBQUpZLGtDQUFXIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3RoZW1lL3BhZ2VzL2RlZmF1bHQvaW5uZXIvaW5uZXIubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dHMvbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBEZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi4vZGVmYXVsdC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIFwicGF0aFwiOiBcIlwiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBEZWZhdWx0Q29tcG9uZW50LFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImNvbXBvbmVudFwiOiBJbm5lckNvbXBvbmVudFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcbkBOZ01vZHVsZSh7aW1wb3J0czogW1xuQ29tbW9uTW9kdWxlLFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLExheW91dE1vZHVsZVxuXSxleHBvcnRzOiBbXG5Sb3V0ZXJNb2R1bGVcbl0sZGVjbGFyYXRpb25zOiBbXG5Jbm5lckNvbXBvbmVudFxuXX0pXG5leHBvcnQgY2xhc3MgSW5uZXJNb2R1bGUgIHtcblxuXG5cbn0iXX0=
