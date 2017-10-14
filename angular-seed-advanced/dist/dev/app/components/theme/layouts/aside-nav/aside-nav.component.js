"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AsideNavComponent = (function () {
    function AsideNavComponent() {
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
    };
    return AsideNavComponent;
}());
AsideNavComponent = __decorate([
    core_1.Component({
        selector: "app-aside-nav",
        templateUrl: "./aside-nav.component.html",
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [])
], AsideNavComponent);
exports.AsideNavComponent = AsideNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL2xheW91dHMvYXNpZGUtbmF2L2FzaWRlLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0Y7QUFTcEYsSUFBYSxpQkFBaUI7SUFHOUI7SUFFQSxDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCwyQ0FBZSxHQUFmO1FBRUEsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFRCx3QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDWCxRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3BDLENBQUM7O0dBQ1csaUJBQWlCLENBZTdCO0FBZlksOENBQWlCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3RoZW1lL2xheW91dHMvYXNpZGUtbmF2L2FzaWRlLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcblxuZGVjbGFyZSBsZXQgbUxheW91dDogYW55O1xuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogXCJhcHAtYXNpZGUtbmF2XCIsXG50ZW1wbGF0ZVVybDogXCIuL2FzaWRlLW5hdi5jb21wb25lbnQuaHRtbFwiLFxuZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQXNpZGVOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG5cbmNvbnN0cnVjdG9yKCkgIHtcblxufVxubmdPbkluaXQoKSAge1xuXG59XG5uZ0FmdGVyVmlld0luaXQoKSAge1xuXG5tTGF5b3V0LmluaXRBc2lkZSgpO1xuXG59XG5cbn0iXX0=
