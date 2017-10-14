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
var router_1 = require("@angular/router");
var authentication_service_1 = require("../_services/authentication.service");
var helpers_1 = require("../../helpers");
var LogoutComponent = (function () {
    function LogoutComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        helpers_1.Helpers.setLoading(true);
        this._authService.logout();
        this._router.navigate(['/login']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    core_1.Component({
        selector: 'app-logout',
        templateUrl: './logout.component.html',
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], LogoutComponent);
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBbUU7QUFDbkUsMENBQXVDO0FBQ3ZDLDhFQUEwRTtBQUMxRSx5Q0FBc0M7QUFRdEMsSUFBYSxlQUFlO0lBRTNCLHlCQUFvQixPQUFlLEVBQ2YsWUFBbUM7UUFEbkMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtJQUN2RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNDLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRixzQkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtLQUNyQyxDQUFDO3FDQUk0QixlQUFNO1FBQ0QsOENBQXFCO0dBSDNDLGVBQWUsQ0FZM0I7QUFaWSwwQ0FBZSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hdXRoL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIZWxwZXJzfSBmcm9tIFwiLi4vLi4vaGVscGVyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAtbG9nb3V0JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vbG9nb3V0LmNvbXBvbmVudC5odG1sJyxcclxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG5cdCAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0SGVscGVycy5zZXRMb2FkaW5nKHRydWUpO1xyXG5cdFx0Ly8gcmVzZXQgbG9naW4gc3RhdHVzXHJcblx0XHR0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKTtcclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuXHR9XHJcbn0iXX0=
