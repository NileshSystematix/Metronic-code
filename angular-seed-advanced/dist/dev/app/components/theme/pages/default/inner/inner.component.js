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
var script_loader_service_1 = require("../../../../_services/script-loader.service");
var InnerComponent = (function () {
    function InnerComponent(_script) {
        this._script = _script;
    }
    InnerComponent.prototype.ngOnInit = function () {
    };
    InnerComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/app/js/dashboard.js');
    };
    return InnerComponent;
}());
InnerComponent = __decorate([
    core_1.Component({
        selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
        templateUrl: "./inner.component.html",
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [script_loader_service_1.ScriptLoaderService])
], InnerComponent);
exports.InnerComponent = InnerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL3BhZ2VzL2RlZmF1bHQvaW5uZXIvaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9GO0FBRXBGLHFGQUFrRjtBQVFsRixJQUFhLGNBQWM7SUFHM0Isd0JBQW9CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBRWhELENBQUM7SUFDRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUNELHdDQUFlLEdBQWY7UUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFDL0QsNEJBQTRCLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBRUQscUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNYLFFBQVEsRUFBRSw2Q0FBNkM7UUFDdkQsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtLQUNwQyxDQUFDO3FDQUkyQiwyQ0FBbUI7R0FIbkMsY0FBYyxDQWUxQjtBQWZZLHdDQUFjIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3RoZW1lL3BhZ2VzL2RlZmF1bHQvaW5uZXIvaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBTY3JpcHRMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vX3NlcnZpY2VzL3NjcmlwdC1sb2FkZXIuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogXCIubS1ncmlkX19pdGVtLm0tZ3JpZF9faXRlbS0tZmx1aWQubS13cmFwcGVyXCIsXG50ZW1wbGF0ZVVybDogXCIuL2lubmVyLmNvbXBvbmVudC5odG1sXCIsXG5lbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBJbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblxuY29uc3RydWN0b3IocHJpdmF0ZSBfc2NyaXB0OiBTY3JpcHRMb2FkZXJTZXJ2aWNlKSAge1xuXG59XG5uZ09uSW5pdCgpICB7XG5cbn1cbm5nQWZ0ZXJWaWV3SW5pdCgpICB7XG50aGlzLl9zY3JpcHQubG9hZCgnLm0tZ3JpZF9faXRlbS5tLWdyaWRfX2l0ZW0tLWZsdWlkLm0td3JhcHBlcicsXG4nYXNzZXRzL2FwcC9qcy9kYXNoYm9hcmQuanMnKTtcblxufVxuXG59Il19
