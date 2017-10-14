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
var profile_component_1 = require("./profile.component");
var layout_module_1 = require("../../../layouts/layout.module");
var default_component_1 = require("../default.component");
var routes = [
    {
        "path": "",
        "component": default_component_1.DefaultComponent,
        "children": [
            {
                "path": "",
                "component": profile_component_1.ProfileComponent
            }
        ]
    }
];
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({ imports: [
            common_1.CommonModule, router_1.RouterModule.forChild(routes), layout_module_1.LayoutModule
        ], exports: [
            router_1.RouterModule
        ], declarations: [
            profile_component_1.ProfileComponent
        ] })
], ProfileModule);
exports.ProfileModule = ProfileModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL3BhZ2VzL2RlZmF1bHQvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsMENBQXVEO0FBQ3ZELHlEQUF1RDtBQUN2RCxnRUFBOEQ7QUFDOUQsMERBQXdEO0FBRXhELElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksTUFBTSxFQUFFLEVBQUU7UUFDVixXQUFXLEVBQUUsb0NBQWdCO1FBQzdCLFVBQVUsRUFBRTtZQUNSO2dCQUNJLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFdBQVcsRUFBRSxvQ0FBZ0I7YUFDaEM7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQVFGLElBQWEsYUFBYTtJQUExQjtJQUlBLENBQUM7SUFBRCxvQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksYUFBYTtJQVB6QixlQUFRLENBQUMsRUFBQyxPQUFPLEVBQUU7WUFDcEIscUJBQVksRUFBQyxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyw0QkFBWTtTQUN0RCxFQUFDLE9BQU8sRUFBRTtZQUNYLHFCQUFZO1NBQ1gsRUFBQyxZQUFZLEVBQUU7WUFDaEIsb0NBQWdCO1NBQ2YsRUFBQyxDQUFDO0dBQ1UsYUFBYSxDQUl6QjtBQUpZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3RoZW1lL3BhZ2VzL2RlZmF1bHQvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0cy9sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuLi9kZWZhdWx0LmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgXCJwYXRoXCI6IFwiXCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IERlZmF1bHRDb21wb25lbnQsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiY29tcG9uZW50XCI6IFByb2ZpbGVDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5ATmdNb2R1bGUoe2ltcG9ydHM6IFtcbkNvbW1vbk1vZHVsZSxSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxMYXlvdXRNb2R1bGVcbl0sZXhwb3J0czogW1xuUm91dGVyTW9kdWxlXG5dLGRlY2xhcmF0aW9uczogW1xuUHJvZmlsZUNvbXBvbmVudFxuXX0pXG5leHBvcnQgY2xhc3MgUHJvZmlsZU1vZHVsZSAge1xuXG5cblxufSJdfQ==
