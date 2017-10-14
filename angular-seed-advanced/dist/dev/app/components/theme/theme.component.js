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
var helpers_1 = require("../helpers");
var script_loader_service_1 = require("../_services/script-loader.service");
var ThemeComponent = (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/demo2/base/scripts.bundle.js')
            .then(function (result) {
            helpers_1.Helpers.setLoading(false);
            _this._script.load('head', 'assets/vendors/custom/fullcalendar/fullcalendar.bundle.js');
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof router_1.NavigationStart) {
                mApp.scrollTop();
                helpers_1.Helpers.setLoading(true);
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof router_1.NavigationEnd) {
                mApp.init();
                mUtil.init();
                helpers_1.Helpers.setLoading(false);
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    return ThemeComponent;
}());
ThemeComponent = __decorate([
    core_1.Component({
        selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
        templateUrl: "./theme.component.html",
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [script_loader_service_1.ScriptLoaderService, router_1.Router])
], ThemeComponent);
exports.ThemeComponent = ThemeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL3RoZW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFxRTtBQUNyRSwwQ0FBeUU7QUFDekUsc0NBQXFDO0FBQ3JDLDRFQUF5RTtBQVV6RSxJQUFhLGNBQWM7SUFHM0Isd0JBQW9CLE9BQTRCLEVBQVUsT0FBZTtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFFekUsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFBQSxpQkEwQkM7UUF6QkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHVDQUF1QyxFQUFDLDBDQUEwQyxDQUFDO2FBQzNHLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDWCxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsMkRBQTJELENBQUMsQ0FBQTtRQUN2RixDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDbkMsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLHdCQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUVoQyxJQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hCLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVuQixDQUFDLENBQUMsMkJBQTJCLENBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkQsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxzQkFBYSxDQUFDLENBQUMsQ0FBQztnQkFFOUIsSUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNiLEtBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsaUJBQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRTFCLElBQUksV0FBUyxHQUFHLHNCQUFzQixDQUFDO2dCQUN2QyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLDhFQUE4RSxFQUFFLFVBQVUsQ0FBQztvQkFDOUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFTLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFTLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUJBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNYLFFBQVEsRUFBRSx5Q0FBeUM7UUFDbkQsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtLQUNwQyxDQUFDO3FDQUkyQiwyQ0FBbUIsRUFBbUIsZUFBTTtHQUg1RCxjQUFjLENBa0MxQjtBQWxDWSx3Q0FBYyIsImZpbGUiOiJhcHAvY29tcG9uZW50cy90aGVtZS90aGVtZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IFNjcmlwdExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvc2NyaXB0LWxvYWRlci5zZXJ2aWNlJztcblxuZGVjbGFyZSBsZXQgbUFwcDogYW55O1xuZGVjbGFyZSBsZXQgbVV0aWw6IGFueTtcbmRlY2xhcmUgbGV0IG1MYXlvdXQ6IGFueTtcbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6IFwiLm0tZ3JpZC5tLWdyaWQtLWhvci5tLWdyaWQtLXJvb3QubS1wYWdlXCIsXG50ZW1wbGF0ZVVybDogXCIuL3RoZW1lLmNvbXBvbmVudC5odG1sXCIsXG5lbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuY29uc3RydWN0b3IocHJpdmF0ZSBfc2NyaXB0OiBTY3JpcHRMb2FkZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgIHtcblxufVxubmdPbkluaXQoKSAge1xuXHRcdHRoaXMuX3NjcmlwdC5sb2FkKCdib2R5JywgJ2Fzc2V0cy92ZW5kb3JzL2Jhc2UvdmVuZG9ycy5idW5kbGUuanMnLCdhc3NldHMvZGVtby9kZW1vMi9iYXNlL3NjcmlwdHMuYnVuZGxlLmpzJylcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0XHRIZWxwZXJzLnNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdHRoaXMuX3NjcmlwdC5sb2FkKCdoZWFkJywgJ2Fzc2V0cy92ZW5kb3JzL2N1c3RvbS9mdWxsY2FsZW5kYXIvZnVsbGNhbGVuZGFyLmJ1bmRsZS5qcycpXHJcblx0XHRcdH0pO1xyXG5cdFx0dGhpcy5fcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHJvdXRlKSA9PiB7XHJcblx0XHRcdGlmIChyb3V0ZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCg8YW55Pm1BcHApLnNjcm9sbFRvcCgpO1xyXG5cdFx0XHRcdEhlbHBlcnMuc2V0TG9hZGluZyh0cnVlKTtcclxuXHRcdFx0XHQvLyBoaWRlIHZpc2libGUgcG9wb3ZlclxyXG5cdFx0XHRcdCg8YW55PiQoJ1tkYXRhLXRvZ2dsZT1cIm0tcG9wb3ZlclwiXScpKS5wb3BvdmVyKCdoaWRlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHJvdXRlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG5cdFx0XHRcdC8vIGluaXQgcmVxdWlyZWQganNcclxuXHRcdFx0XHQoPGFueT5tQXBwKS5pbml0KCk7XHJcblx0XHRcdFx0KDxhbnk+bVV0aWwpLmluaXQoKTtcclxuXHRcdFx0XHRIZWxwZXJzLnNldExvYWRpbmcoZmFsc2UpO1xyXG5cdFx0XHRcdC8vIGNvbnRlbnQgbS13cmFwcGVyIGFuaW1hdGlvblxyXG5cdFx0XHRcdGxldCBhbmltYXRpb24gPSAnbS1hbmltYXRlLWZhZGUtaW4tdXAnO1xyXG5cdFx0XHRcdCQoJy5tLXdyYXBwZXInKS5vbmUoJ3dlYmtpdEFuaW1hdGlvbkVuZCBtb3pBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBhbmltYXRpb25lbmQnLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0JCgnLm0td3JhcHBlcicpLnJlbW92ZUNsYXNzKGFuaW1hdGlvbik7XHJcblx0XHRcdFx0fSkucmVtb3ZlQ2xhc3MoYW5pbWF0aW9uKS5hZGRDbGFzcyhhbmltYXRpb24pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcbn1cblxufSJdfQ==
