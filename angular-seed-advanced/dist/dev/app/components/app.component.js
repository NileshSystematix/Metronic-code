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
var helpers_1 = require("./helpers");
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--wide m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof router_1.NavigationStart) {
                helpers_1.Helpers.setLoading(true);
                helpers_1.Helpers.bodyClass(_this.globalBodyClass);
            }
            if (route instanceof router_1.NavigationEnd) {
                helpers_1.Helpers.setLoading(false);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'body',
        templateUrl: './app.component.html',
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBbUU7QUFDbkUsMENBQXVFO0FBQ3ZFLHFDQUFrQztBQU9sQyxJQUFhLFlBQVk7SUFJeEIsc0JBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBSG5DLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxvQkFBZSxHQUFHLHVLQUF1SyxDQUFDO0lBRzFMLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSx3QkFBZSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLGlCQUFPLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLHNCQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7S0FDckMsQ0FBQztxQ0FLNEIsZUFBTTtHQUp2QixZQUFZLENBa0J4QjtBQWxCWSxvQ0FBWSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0hlbHBlcnN9IGZyb20gXCIuL2hlbHBlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYm9keScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dGl0bGUgPSAnYXBwJztcclxuXHRnbG9iYWxCb2R5Q2xhc3MgPSAnbS1wYWdlLS1sb2FkaW5nLW5vbi1ibG9jayBtLXBhZ2UtLXdpZGUgbS1oZWFkZXItLWZpeGVkIG0taGVhZGVyLS1maXhlZC1tb2JpbGUgbS1hc2lkZS1sZWZ0LS1lbmFibGVkIG0tYXNpZGUtbGVmdC0tb2ZmY2FudmFzIG0tZm9vdGVyLS1wdXNoIG0tYXNpZGUtLW9mZmNhbnZhcy1kZWZhdWx0JztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5fcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHJvdXRlKSA9PiB7XHJcblx0XHRcdGlmIChyb3V0ZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xyXG5cdFx0XHRcdEhlbHBlcnMuc2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdFx0XHRIZWxwZXJzLmJvZHlDbGFzcyh0aGlzLmdsb2JhbEJvZHlDbGFzcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHJvdXRlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG5cdFx0XHRcdEhlbHBlcnMuc2V0TG9hZGluZyhmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSJdfQ==
