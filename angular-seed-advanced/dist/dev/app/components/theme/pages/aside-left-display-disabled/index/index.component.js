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
var helpers_1 = require("../../../../helpers");
var script_loader_service_1 = require("../../../../_services/script-loader.service");
var IndexComponent = (function () {
    function IndexComponent(_script) {
        this._script = _script;
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/app/js/dashboard.js');
        helpers_1.Helpers.bodyClass('m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default');
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
        templateUrl: "./index.component.html",
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [script_loader_service_1.ScriptLoaderService])
], IndexComponent);
exports.IndexComponent = IndexComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL3BhZ2VzL2FzaWRlLWxlZnQtZGlzcGxheS1kaXNhYmxlZC9pbmRleC9pbmRleC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0Y7QUFDcEYsK0NBQThDO0FBQzlDLHFGQUFrRjtBQVFsRixJQUFhLGNBQWM7SUFHM0Isd0JBQW9CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBRWhELENBQUM7SUFDRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFDL0QsNEJBQTRCLENBQUMsQ0FBQztRQUU5QixpQkFBTyxDQUFDLFNBQVMsQ0FBQywrRkFBK0YsQ0FBQyxDQUFDO0lBRW5ILENBQUM7SUFFRCxxQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1gsUUFBUSxFQUFFLDZDQUE2QztRQUN2RCxXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO0tBQ3BDLENBQUM7cUNBSTJCLDJDQUFtQjtHQUhuQyxjQUFjLENBaUIxQjtBQWpCWSx3Q0FBYyIsImZpbGUiOiJhcHAvY29tcG9uZW50cy90aGVtZS9wYWdlcy9hc2lkZS1sZWZ0LWRpc3BsYXktZGlzYWJsZWQvaW5kZXgvaW5kZXguY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBTY3JpcHRMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vX3NlcnZpY2VzL3NjcmlwdC1sb2FkZXIuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogXCIubS1ncmlkX19pdGVtLm0tZ3JpZF9faXRlbS0tZmx1aWQubS13cmFwcGVyXCIsXG50ZW1wbGF0ZVVybDogXCIuL2luZGV4LmNvbXBvbmVudC5odG1sXCIsXG5lbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBJbmRleENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblxuY29uc3RydWN0b3IocHJpdmF0ZSBfc2NyaXB0OiBTY3JpcHRMb2FkZXJTZXJ2aWNlKSAge1xuXG59XG5uZ09uSW5pdCgpICB7XG5cbn1cbm5nQWZ0ZXJWaWV3SW5pdCgpICB7XG50aGlzLl9zY3JpcHQubG9hZCgnLm0tZ3JpZF9faXRlbS5tLWdyaWRfX2l0ZW0tLWZsdWlkLm0td3JhcHBlcicsXG4nYXNzZXRzL2FwcC9qcy9kYXNoYm9hcmQuanMnKTtcblxuSGVscGVycy5ib2R5Q2xhc3MoJ20tcGFnZS0td2lkZSBtLWhlYWRlci0tZml4ZWQgbS1oZWFkZXItLWZpeGVkLW1vYmlsZSBtLWZvb3Rlci0tcHVzaCBtLWFzaWRlLS1vZmZjYW52YXMtZGVmYXVsdCcpO1xuXG59XG5cbn0iXX0=
