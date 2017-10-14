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
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var index_1 = require("../i18n/index");
var index_2 = require("./components/index");
var SHARED_MODULES = [
    common_1.CommonModule,
    http_1.HttpModule,
    forms_1.FormsModule,
    router_1.RouterModule,
    index_1.MultilingualModule
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: SHARED_MODULES.slice(),
        declarations: index_2.SHARED_COMPONENTS.slice(),
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA,
        ],
        exports: SHARED_MODULES.concat(index_2.SHARED_COMPONENTS)
    })
], SharedModule);
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQW1GO0FBQ25GLDBDQUErQztBQUMvQyxzQ0FBMkM7QUFDM0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUcvQyx1Q0FBbUQ7QUFDbkQsNENBQXVEO0FBRXZELElBQU0sY0FBYyxHQUFVO0lBQzVCLHFCQUFZO0lBQ1osaUJBQVU7SUFDVixtQkFBVztJQUNYLHFCQUFZO0lBQ1osMEJBQWtCO0NBQ25CLENBQUM7QUF5QkYsSUFBYSxZQUFZO0lBQXpCO0lBQTJCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixZQUFZO0lBaEJ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQ0YsY0FBYyxRQUNsQjtRQUNELFlBQVksRUFDUCx5QkFBaUIsUUFDckI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7WUFDaEIsNkJBQXNCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUNGLGNBQWMsUUFDZCx5QkFBaUIsQ0FDckI7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUFHO0FBQWYsb0NBQVkiLCJmaWxlIjoiYXBwL21vZHVsZXMvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gbW9kdWxlc1xuaW1wb3J0IHsgTXVsdGlsaW5ndWFsTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9pbmRleCc7XG5pbXBvcnQgeyBTSEFSRURfQ09NUE9ORU5UUyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbmNvbnN0IFNIQVJFRF9NT0RVTEVTOiBhbnlbXSA9IFtcbiAgQ29tbW9uTW9kdWxlLFxuICBIdHRwTW9kdWxlLFxuICBGb3Jtc01vZHVsZSxcbiAgUm91dGVyTW9kdWxlLFxuICBNdWx0aWxpbmd1YWxNb2R1bGVcbl07XG5cbi8qKlxuICogU2hhcmVkTW9kdWxlXG4gKiBPbmx5IGZvciBzaGFyZWQgY29tcG9uZW50cywgZGlyZWN0aXZlcyBhbmQgcGlwZXNcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBoZXJlXG4gKiBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvY29va2Jvb2svbmdtb2R1bGUtZmFxLmh0bWwjISN3aGF0LWtpbmRzLW9mLW1vZHVsZXMtc2hvdWxkLWktaGF2ZS1hbmQtaG93LXNob3VsZC1pLXVzZS10aGVtLVxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICAuLi5TSEFSRURfTU9EVUxFU1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5TSEFSRURfQ09NUE9ORU5UU1xuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQSxcbiAgICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uU0hBUkVEX01PRFVMRVMsXG4gICAgLi4uU0hBUkVEX0NPTVBPTkVOVFMsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XG4iXX0=
