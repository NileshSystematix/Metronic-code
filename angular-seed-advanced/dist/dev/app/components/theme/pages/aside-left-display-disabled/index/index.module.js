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
var index_component_1 = require("./index.component");
var layout_module_1 = require("../../../layouts/layout.module");
var aside_left_display_disabled_component_1 = require("../aside-left-display-disabled.component");
var routes = [
    {
        "path": "",
        "component": aside_left_display_disabled_component_1.AsideLeftDisplayDisabledComponent,
        "children": [
            {
                "path": "",
                "component": index_component_1.IndexComponent
            }
        ]
    }
];
var IndexModule = (function () {
    function IndexModule() {
    }
    return IndexModule;
}());
IndexModule = __decorate([
    core_1.NgModule({ imports: [
            common_1.CommonModule, router_1.RouterModule.forChild(routes), layout_module_1.LayoutModule
        ], exports: [
            router_1.RouterModule
        ], declarations: [
            index_component_1.IndexComponent
        ] })
], IndexModule);
exports.IndexModule = IndexModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL3BhZ2VzL2FzaWRlLWxlZnQtZGlzcGxheS1kaXNhYmxlZC9pbmRleC9pbmRleC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDBDQUF1RDtBQUN2RCxxREFBbUQ7QUFDbkQsZ0VBQThEO0FBQzlELGtHQUE2RjtBQUU3RixJQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLE1BQU0sRUFBRSxFQUFFO1FBQ1YsV0FBVyxFQUFFLHlFQUFpQztRQUM5QyxVQUFVLEVBQUU7WUFDUjtnQkFDSSxNQUFNLEVBQUUsRUFBRTtnQkFDVixXQUFXLEVBQUUsZ0NBQWM7YUFDOUI7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQVFGLElBQWEsV0FBVztJQUF4QjtJQUlBLENBQUM7SUFBRCxrQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksV0FBVztJQVB2QixlQUFRLENBQUMsRUFBQyxPQUFPLEVBQUU7WUFDcEIscUJBQVksRUFBQyxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyw0QkFBWTtTQUN0RCxFQUFDLE9BQU8sRUFBRTtZQUNYLHFCQUFZO1NBQ1gsRUFBQyxZQUFZLEVBQUU7WUFDaEIsZ0NBQWM7U0FDYixFQUFDLENBQUM7R0FDVSxXQUFXLENBSXZCO0FBSlksa0NBQVciLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdGhlbWUvcGFnZXMvYXNpZGUtbGVmdC1kaXNwbGF5LWRpc2FibGVkL2luZGV4L2luZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5kZXhDb21wb25lbnQgfSBmcm9tICcuL2luZGV4LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXRzL2xheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgQXNpZGVMZWZ0RGlzcGxheURpc2FibGVkQ29tcG9uZW50IH0gZnJvbSAnLi4vYXNpZGUtbGVmdC1kaXNwbGF5LWRpc2FibGVkLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgXCJwYXRoXCI6IFwiXCIsXG4gICAgICAgIFwiY29tcG9uZW50XCI6IEFzaWRlTGVmdERpc3BsYXlEaXNhYmxlZENvbXBvbmVudCxcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJjb21wb25lbnRcIjogSW5kZXhDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5ATmdNb2R1bGUoe2ltcG9ydHM6IFtcbkNvbW1vbk1vZHVsZSxSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxMYXlvdXRNb2R1bGVcbl0sZXhwb3J0czogW1xuUm91dGVyTW9kdWxlXG5dLGRlY2xhcmF0aW9uczogW1xuSW5kZXhDb21wb25lbnRcbl19KVxuZXhwb3J0IGNsYXNzIEluZGV4TW9kdWxlICB7XG5cblxuXG59Il19
