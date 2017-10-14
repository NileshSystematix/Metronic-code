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
var HeaderNavComponent = (function () {
    function HeaderNavComponent() {
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    return HeaderNavComponent;
}());
HeaderNavComponent = __decorate([
    core_1.Component({
        selector: "app-header-nav",
        templateUrl: "./header-nav.component.html",
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [])
], HeaderNavComponent);
exports.HeaderNavComponent = HeaderNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL2xheW91dHMvaGVhZGVyLW5hdi9oZWFkZXItbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFvRjtBQVNwRixJQUFhLGtCQUFrQjtJQUcvQjtJQUVBLENBQUM7SUFDRCxxQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUNELDRDQUFlLEdBQWY7UUFFQSxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUVELHlCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxrQkFBa0I7SUFMOUIsZ0JBQVMsQ0FBQztRQUNYLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtLQUNwQyxDQUFDOztHQUNXLGtCQUFrQixDQWU5QjtBQWZZLGdEQUFrQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy90aGVtZS9sYXlvdXRzL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzJztcblxuZGVjbGFyZSBsZXQgbUxheW91dDogYW55O1xuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogXCJhcHAtaGVhZGVyLW5hdlwiLFxudGVtcGxhdGVVcmw6IFwiLi9oZWFkZXItbmF2LmNvbXBvbmVudC5odG1sXCIsXG5lbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG5cbmNvbnN0cnVjdG9yKCkgIHtcblxufVxubmdPbkluaXQoKSAge1xuXG59XG5uZ0FmdGVyVmlld0luaXQoKSAge1xuXG5tTGF5b3V0LmluaXRIZWFkZXIoKTtcblxufVxuXG59Il19
