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
var layout_module_1 = require("../../../../layouts/layout.module");
var default_component_1 = require("../../default.component");
var not_found_component_1 = require("./not-found.component");
var routes = [
    {
        "path": "",
        "component": default_component_1.DefaultComponent,
        "children": [
            {
                "path": "",
                "component": not_found_component_1.NotFoundComponent
            }
        ]
    }
];
var NotFoundModule = (function () {
    function NotFoundModule() {
    }
    return NotFoundModule;
}());
NotFoundModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, router_1.RouterModule.forChild(routes), layout_module_1.LayoutModule
        ], exports: [
            router_1.RouterModule
        ], declarations: [
            not_found_component_1.NotFoundComponent
        ]
    })
], NotFoundModule);
exports.NotFoundModule = NotFoundModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL3BhZ2VzL2RlZmF1bHQvbm90LWZvdW5kL25vdC1mb3VuZC9ub3QtZm91bmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXVDO0FBQ3ZDLDBDQUE2QztBQUM3QywwQ0FBcUQ7QUFDckQsbUVBQStEO0FBQy9ELDZEQUF5RDtBQUN6RCw2REFBd0Q7QUFFeEQsSUFBTSxNQUFNLEdBQVc7SUFDdEI7UUFDQyxNQUFNLEVBQUUsRUFBRTtRQUNWLFdBQVcsRUFBRSxvQ0FBZ0I7UUFDN0IsVUFBVSxFQUFFO1lBQ1g7Z0JBQ0MsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsV0FBVyxFQUFFLHVDQUFpQjthQUM5QjtTQUNEO0tBQ0Q7Q0FDRCxDQUFDO0FBV0YsSUFBYSxjQUFjO0lBQTNCO0lBQ0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxjQUFjO0lBVDFCLGVBQVEsQ0FBQztRQUNULE9BQU8sRUFBRTtZQUNSLHFCQUFZLEVBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsNEJBQVk7U0FDekQsRUFBRSxPQUFPLEVBQUU7WUFDWCxxQkFBWTtTQUNaLEVBQUUsWUFBWSxFQUFFO1lBQ2hCLHVDQUFpQjtTQUNqQjtLQUNELENBQUM7R0FDVyxjQUFjLENBQzFCO0FBRFksd0NBQWMiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdGhlbWUvcGFnZXMvZGVmYXVsdC9ub3QtZm91bmQvbm90LWZvdW5kL25vdC1mb3VuZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TGF5b3V0TW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9sYXlvdXRzL2xheW91dC5tb2R1bGUnO1xyXG5pbXBvcnQge0RlZmF1bHRDb21wb25lbnR9IGZyb20gJy4uLy4uL2RlZmF1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IHtOb3RGb3VuZENvbXBvbmVudH0gZnJvbSBcIi4vbm90LWZvdW5kLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0XCJwYXRoXCI6IFwiXCIsXHJcblx0XHRcImNvbXBvbmVudFwiOiBEZWZhdWx0Q29tcG9uZW50LFxyXG5cdFx0XCJjaGlsZHJlblwiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInBhdGhcIjogXCJcIixcclxuXHRcdFx0XHRcImNvbXBvbmVudFwiOiBOb3RGb3VuZENvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLCBMYXlvdXRNb2R1bGVcclxuXHRdLCBleHBvcnRzOiBbXHJcblx0XHRSb3V0ZXJNb2R1bGVcclxuXHRdLCBkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE5vdEZvdW5kQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90Rm91bmRNb2R1bGUge1xyXG59Il19
