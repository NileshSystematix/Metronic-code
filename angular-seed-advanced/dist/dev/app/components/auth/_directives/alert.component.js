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
var index_1 = require("../_services/index");
var AlertComponent = (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    core_1.Component({
        selector: 'app-alert',
        templateUrl: './alert.component.html'
    }),
    __metadata("design:paramtypes", [index_1.AlertService])
], AlertComponent);
exports.AlertComponent = AlertComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvX2RpcmVjdGl2ZXMvYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWdEO0FBQ2hELDRDQUFnRDtBQU9oRCxJQUFhLGNBQWM7SUFHMUIsd0JBQW9CLGFBQTJCO1FBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQy9DLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDaEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7S0FDckMsQ0FBQztxQ0FLa0Msb0JBQVk7R0FIbkMsY0FBYyxDQVcxQjtBQVhZLHdDQUFjIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2F1dGgvX2RpcmVjdGl2ZXMvYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBbGVydFNlcnZpY2V9IGZyb20gXCIuLi9fc2VydmljZXMvaW5kZXhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWFsZXJ0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdG1lc3NhZ2U6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5fYWxlcnRTZXJ2aWNlLmdldE1lc3NhZ2UoKS5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XHJcblx0XHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXX0=
