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
var script_loader_service_1 = require("../_services/script-loader.service");
var authentication_service_1 = require("./_services/authentication.service");
var alert_service_1 = require("./_services/alert.service");
var user_service_1 = require("./_services/user.service");
var alert_component_1 = require("./_directives/alert.component");
var login_custom_1 = require("./_helpers/login-custom");
var helpers_1 = require("../helpers");
var AuthComponent = (function () {
    function AuthComponent(_router, _script, _userService, _route, _authService, _alertService, cfr) {
        this._router = _router;
        this._script = _script;
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._alertService = _alertService;
        this.cfr = cfr;
        this.model = {};
        this.loading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.model.remember = true;
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(function () {
            helpers_1.Helpers.setLoading(false);
            login_custom_1.LoginCustom.init();
        });
    };
    AuthComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this._authService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            _this._router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.showAlert('alertSignin');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.signup = function () {
        var _this = this;
        this.loading = true;
        this._userService.create(this.model)
            .subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Thank you. To complete your registration please check your email.', true);
            _this.loading = false;
            login_custom_1.LoginCustom.displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertSignup');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.forgotPass = function () {
        var _this = this;
        this.loading = true;
        this._userService.forgotPassword(this.model.email)
            .subscribe(function (data) {
            _this.showAlert('alertSignin');
            _this._alertService.success('Cool! Password recovery instruction has been sent to your email.', true);
            _this.loading = false;
            login_custom_1.LoginCustom.displaySignInForm();
            _this.model = {};
        }, function (error) {
            _this.showAlert('alertForgotPass');
            _this._alertService.error(error);
            _this.loading = false;
        });
    };
    AuthComponent.prototype.showAlert = function (target) {
        this[target].clear();
        var factory = this.cfr.resolveComponentFactory(alert_component_1.AlertComponent);
        var ref = this[target].createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    };
    return AuthComponent;
}());
__decorate([
    core_1.ViewChild('alertSignin', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], AuthComponent.prototype, "alertSignin", void 0);
__decorate([
    core_1.ViewChild('alertSignup', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], AuthComponent.prototype, "alertSignup", void 0);
__decorate([
    core_1.ViewChild('alertForgotPass', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], AuthComponent.prototype, "alertForgotPass", void 0);
AuthComponent = __decorate([
    core_1.Component({
        selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
        templateUrl: './templates/login-1.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [router_1.Router,
        script_loader_service_1.ScriptLoaderService,
        user_service_1.UserService,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        alert_service_1.AlertService,
        core_1.ComponentFactoryResolver])
], AuthComponent);
exports.AuthComponent = AuthComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEg7QUFDMUgsMENBQXVEO0FBQ3ZELDRFQUF1RTtBQUN2RSw2RUFBeUU7QUFDekUsMkRBQXVEO0FBQ3ZELHlEQUFxRDtBQUNyRCxpRUFBNkQ7QUFDN0Qsd0RBQW9EO0FBQ3BELHNDQUFtQztBQVFuQyxJQUFhLGFBQWE7SUFTekIsdUJBQW9CLE9BQWUsRUFDZixPQUE0QixFQUM1QixZQUF5QixFQUN6QixNQUFzQixFQUN0QixZQUFtQyxFQUNuQyxhQUEyQixFQUMzQixHQUE2QjtRQU43QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBZGpELFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQWNoQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUUzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsdUNBQXVDLEVBQUUsNENBQTRDLENBQUM7YUFDOUcsSUFBSSxDQUFDO1lBQ0wsaUJBQU8sQ0FBQyxVQUFV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LENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDRixvQkFBQztBQUFELENBdkZBLEFBdUZDLElBQUE7QUFsRm9EO0lBQW5ELGdCQUFTLENBQUMsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7OEJBQWMsdUJBQWdCO2tEQUFDO0FBQzlCO0lBQW5ELGdCQUFTLENBQUMsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDLENBQUM7OEJBQWMsdUJBQWdCO2tEQUFDO0FBQzFCO0lBQXZELGdCQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxJQUFJLEVBQUUsdUJBQWdCLEVBQUMsQ0FBQzs4QkFBa0IsdUJBQWdCO3NEQUFDO0FBUDlFLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSx5Q0FBeUM7UUFDbkQsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtLQUNyQyxDQUFDO3FDQVc0QixlQUFNO1FBQ04sMkNBQW1CO1FBQ2QsMEJBQVc7UUFDakIsdUJBQWM7UUFDUiw4Q0FBcUI7UUFDcEIsNEJBQVk7UUFDdEIsK0JBQXdCO0dBZnJDLGFBQWEsQ0F1RnpCO0FBdkZZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1NjcmlwdExvYWRlclNlcnZpY2V9IGZyb20gXCIuLi9fc2VydmljZXMvc2NyaXB0LWxvYWRlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge0FsZXJ0U2VydmljZX0gZnJvbSBcIi4vX3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vX3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge0FsZXJ0Q29tcG9uZW50fSBmcm9tIFwiLi9fZGlyZWN0aXZlcy9hbGVydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtMb2dpbkN1c3RvbX0gZnJvbSBcIi4vX2hlbHBlcnMvbG9naW4tY3VzdG9tXCI7XHJcbmltcG9ydCB7SGVscGVyc30gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIi5tLWdyaWQubS1ncmlkLS1ob3IubS1ncmlkLS1yb290Lm0tcGFnZVwiLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZXMvbG9naW4tMS5jb21wb25lbnQuaHRtbCcsXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdG1vZGVsOiBhbnkgPSB7fTtcclxuXHRsb2FkaW5nID0gZmFsc2U7XHJcblx0cmV0dXJuVXJsOiBzdHJpbmc7XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ2FsZXJ0U2lnbmluJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBhbGVydFNpZ25pbjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAVmlld0NoaWxkKCdhbGVydFNpZ251cCcsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgYWxlcnRTaWdudXA6IFZpZXdDb250YWluZXJSZWY7XHJcblx0QFZpZXdDaGlsZCgnYWxlcnRGb3Jnb3RQYXNzJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBhbGVydEZvcmdvdFBhc3M6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG5cdCAgICAgICAgICAgIHByaXZhdGUgX3NjcmlwdDogU2NyaXB0TG9hZGVyU2VydmljZSxcclxuXHQgICAgICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcblx0ICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdCAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcblx0ICAgICAgICAgICAgcHJpdmF0ZSBfYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXHJcblx0ICAgICAgICAgICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm1vZGVsLnJlbWVtYmVyID0gdHJ1ZTtcclxuXHRcdC8vIGdldCByZXR1cm4gdXJsIGZyb20gcm91dGUgcGFyYW1ldGVycyBvciBkZWZhdWx0IHRvICcvJ1xyXG5cdFx0dGhpcy5yZXR1cm5VcmwgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1sncmV0dXJuVXJsJ10gfHwgJy8nO1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFt0aGlzLnJldHVyblVybF0pO1xyXG5cclxuXHRcdHRoaXMuX3NjcmlwdC5sb2FkKCdib2R5JywgJ2Fzc2V0cy92ZW5kb3JzL2Jhc2UvdmVuZG9ycy5idW5kbGUuanMnLCAnYXNzZXRzL2RlbW8vZGVmYXVsdC9iYXNlL3NjcmlwdHMuYnVuZGxlLmpzJylcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdEhlbHBlcnMuc2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdFx0TG9naW5DdXN0b20uaW5pdCgpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNpZ25pbigpIHtcclxuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0XHR0aGlzLl9hdXRoU2VydmljZS5sb2dpbih0aGlzLm1vZGVsLmVtYWlsLCB0aGlzLm1vZGVsLnBhc3N3b3JkKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFt0aGlzLnJldHVyblVybF0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93QWxlcnQoJ2FsZXJ0U2lnbmluJyk7XHJcblx0XHRcdFx0XHR0aGlzLl9hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzaWdudXAoKSB7XHJcblx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5fdXNlclNlcnZpY2UuY3JlYXRlKHRoaXMubW9kZWwpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0ZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dBbGVydCgnYWxlcnRTaWduaW4nKTtcclxuXHRcdFx0XHRcdHRoaXMuX2FsZXJ0U2VydmljZS5zdWNjZXNzKCdUaGFuayB5b3UuIFRvIGNvbXBsZXRlIHlvdXIgcmVnaXN0cmF0aW9uIHBsZWFzZSBjaGVjayB5b3VyIGVtYWlsLicsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRMb2dpbkN1c3RvbS5kaXNwbGF5U2lnbkluRm9ybSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5tb2RlbCA9IHt9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93QWxlcnQoJ2FsZXJ0U2lnbnVwJyk7XHJcblx0XHRcdFx0XHR0aGlzLl9hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmb3Jnb3RQYXNzKCkge1xyXG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHRcdHRoaXMuX3VzZXJTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkKHRoaXMubW9kZWwuZW1haWwpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0ZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dBbGVydCgnYWxlcnRTaWduaW4nKTtcclxuXHRcdFx0XHRcdHRoaXMuX2FsZXJ0U2VydmljZS5zdWNjZXNzKCdDb29sISBQYXNzd29yZCByZWNvdmVyeSBpbnN0cnVjdGlvbiBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwuJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdExvZ2luQ3VzdG9tLmRpc3BsYXlTaWduSW5Gb3JtKCk7XHJcblx0XHRcdFx0XHR0aGlzLm1vZGVsID0ge307XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnJvciA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dBbGVydCgnYWxlcnRGb3Jnb3RQYXNzJyk7XHJcblx0XHRcdFx0XHR0aGlzLl9hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzaG93QWxlcnQodGFyZ2V0KSB7XHJcblx0XHR0aGlzW3RhcmdldF0uY2xlYXIoKTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQWxlcnRDb21wb25lbnQpO1xyXG5cdFx0bGV0IHJlZiA9IHRoaXNbdGFyZ2V0XS5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcblx0XHRyZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cdH1cclxufSJdfQ==
