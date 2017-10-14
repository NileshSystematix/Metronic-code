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
var http_1 = require("@angular/http");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.verify = function () {
        return this.http.get('/api/verify', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.http.post('/api/forgot-password', JSON.stringify({ email: email }), this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvX3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxzQ0FBc0U7QUFLdEUsSUFBYSxXQUFXO0lBQ3ZCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM5QixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLEtBQWE7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNqSSxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLElBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLElBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFJTyx5QkFBRyxHQUFYO1FBRUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbEUsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUM1RSxNQUFNLENBQUMsSUFBSSxxQkFBYyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNGLENBQUM7SUFDRixrQkFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUVjLFdBQUk7R0FEbEIsV0FBVyxDQTBDdkI7QUExQ1ksa0NBQVciLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXV0aC9fc2VydmljZXMvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0hlYWRlcnMsIEh0dHAsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL19tb2RlbHMvaW5kZXhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuXHR9XHJcblxyXG5cdHZlcmlmeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3ZlcmlmeScsIHRoaXMuand0KCkpLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0Zm9yZ290UGFzc3dvcmQoZW1haWw6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL2ZvcmdvdC1wYXNzd29yZCcsIEpTT04uc3RyaW5naWZ5KHtlbWFpbH0pLCB0aGlzLmp3dCgpKS5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblxyXG5cdGdldEFsbCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3VzZXJzJywgdGhpcy5qd3QoKSkubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3VzZXJzLycgKyBpZCwgdGhpcy5qd3QoKSkubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUodXNlcjogVXNlcikge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXJzJywgdXNlciwgdGhpcy5qd3QoKSkubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUodXNlcjogVXNlcikge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wdXQoJy9hcGkvdXNlcnMvJyArIHVzZXIuaWQsIHVzZXIsIHRoaXMuand0KCkpLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCcvYXBpL3VzZXJzLycgKyBpZCwgdGhpcy5qd3QoKSkubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG5cclxuXHQvLyBwcml2YXRlIGhlbHBlciBtZXRob2RzXHJcblxyXG5cdHByaXZhdGUgand0KCkge1xyXG5cdFx0Ly8gY3JlYXRlIGF1dGhvcml6YXRpb24gaGVhZGVyIHdpdGggand0IHRva2VuXHJcblx0XHRsZXQgY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcclxuXHRcdGlmIChjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50b2tlbikge1xyXG5cdFx0XHRsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGN1cnJlbnRVc2VyLnRva2VufSk7XHJcblx0XHRcdHJldHVybiBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnM6IGhlYWRlcnN9KTtcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0=
