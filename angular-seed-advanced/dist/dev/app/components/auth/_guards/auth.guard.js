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
var user_service_1 = require("../_services/user.service");
var AuthGuard = (function () {
    function AuthGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this._userService.verify().map(function (data) {
            if (data !== null) {
                return true;
            }
            _this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }, function (error) {
            _this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], AuthGuard);
exports.AuthGuard = AuthGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvX2d1YXJkcy9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUFpRztBQUNqRywwREFBc0Q7QUFJdEQsSUFBYSxTQUFTO0lBRXJCLG1CQUFvQixPQUFlLEVBQVUsWUFBeUI7UUFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQ3RFLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksS0FBNkIsRUFBRSxLQUEwQjtRQUFyRSxpQkFpQkM7UUFoQkEsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUNwQyxVQUFBLElBQUk7WUFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFbkIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLENBQUM7WUFFRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLEVBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFFSixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLEVBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNGLGdCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxTQUFTO0lBRHJCLGlCQUFVLEVBQUU7cUNBR2lCLGVBQU0sRUFBd0IsMEJBQVc7R0FGMUQsU0FBUyxDQXVCckI7QUF2QlksOEJBQVMiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXV0aC9fZ3VhcmRzL2F1dGguZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vX3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuXHR9XHJcblxyXG5cdGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuXHRcdGxldCBjdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpO1xyXG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJTZXJ2aWNlLnZlcmlmeSgpLm1hcChcclxuXHRcdFx0ZGF0YSA9PiB7XHJcblx0XHRcdFx0aWYgKGRhdGEgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdC8vIGxvZ2dlZCBpbiBzbyByZXR1cm4gdHJ1ZVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGVycm9yIHdoZW4gdmVyaWZ5IHNvIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2Ugd2l0aCB0aGUgcmV0dXJuIHVybFxyXG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddLCB7cXVlcnlQYXJhbXM6IHtyZXR1cm5Vcmw6IHN0YXRlLnVybH19KTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IHtcclxuXHRcdFx0XHQvLyBlcnJvciB3aGVuIHZlcmlmeSBzbyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIHdpdGggdGhlIHJldHVybiB1cmxcclxuXHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSwge3F1ZXJ5UGFyYW1zOiB7cmV0dXJuVXJsOiBzdGF0ZS51cmx9fSk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn0iXX0=
