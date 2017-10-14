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
var Subject_1 = require("rxjs/Subject");
var AlertService = (function () {
    function AlertService(_router) {
        var _this = this;
        this._router = _router;
        this.subject = new Subject_1.Subject();
        this.keepAfterNavigationChange = false;
        _router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterNavigationChange) {
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'danger', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AlertService);
exports.AlertService = AlertService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvX3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQXdEO0FBRXhELHdDQUFxQztBQUdyQyxJQUFhLFlBQVk7SUFJeEIsc0JBQW9CLE9BQWU7UUFBbkMsaUJBYUM7UUFibUIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUgzQixZQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFPLENBQUM7UUFDN0IsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBSXpDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksd0JBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7b0JBRXBDLEtBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7Z0JBQ3hDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBRVAsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztZQUNGLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsT0FBZSxFQUFFLHlCQUFpQztRQUFqQywwQ0FBQSxFQUFBLGlDQUFpQztRQUN6RCxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sT0FBZSxFQUFFLHlCQUFpQztRQUFqQywwQ0FBQSxFQUFBLGlDQUFpQztRQUN2RCxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNGLG1CQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtBQWhDWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBS2lCLGVBQU07R0FKdkIsWUFBWSxDQWdDeEI7QUFoQ1ksb0NBQVkiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXV0aC9fc2VydmljZXMvYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcclxuXHRwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblx0cHJpdmF0ZSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcblx0XHQvLyBjbGVhciBhbGVydCBtZXNzYWdlIG9uIHJvdXRlIGNoYW5nZVxyXG5cdFx0X3JvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSkge1xyXG5cdFx0XHRcdFx0Ly8gb25seSBrZWVwIGZvciBhIHNpbmdsZSBsb2NhdGlvbiBjaGFuZ2VcclxuXHRcdFx0XHRcdHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBjbGVhciBhbGVydFxyXG5cdFx0XHRcdFx0dGhpcy5zdWJqZWN0Lm5leHQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZSkge1xyXG5cdFx0dGhpcy5rZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlID0ga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZTtcclxuXHRcdHRoaXMuc3ViamVjdC5uZXh0KHt0eXBlOiAnc3VjY2VzcycsIHRleHQ6IG1lc3NhZ2V9KTtcclxuXHR9XHJcblxyXG5cdGVycm9yKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlKSB7XHJcblx0XHR0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlO1xyXG5cdFx0dGhpcy5zdWJqZWN0Lm5leHQoe3R5cGU6ICdkYW5nZXInLCB0ZXh0OiBtZXNzYWdlfSk7XHJcblx0fVxyXG5cclxuXHRnZXRNZXNzYWdlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufSJdfQ==
