"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var index_1 = require("../../core/index");
var index_2 = require("../../analytics/index");
var index_3 = require("../actions/index");
var NameListService = (function (_super) {
    __extends(NameListService, _super);
    function NameListService(analytics, http) {
        var _this = _super.call(this, analytics) || this;
        _this.analytics = analytics;
        _this.http = http;
        _this.category = index_3.NameList.CATEGORY;
        return _this;
    }
    NameListService.prototype.getNames = function () {
        return this.http.get((index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/data.json")
            .map(function (res) { return res.json(); });
    };
    return NameListService;
}(index_2.Analytics));
NameListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_2.AnalyticsService,
        http_1.Http])
], NameListService);
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBTXJDLDBDQUEwQztBQUMxQywrQ0FBb0U7QUFHcEUsMENBQTRDO0FBRzVDLElBQWEsZUFBZTtJQUFTLG1DQUFTO0lBRTVDLHlCQUNTLFNBQTJCLEVBQzFCLElBQVU7UUFGcEIsWUFJRSxrQkFBTSxTQUFTLENBQUMsU0FFakI7UUFMUSxlQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMxQixVQUFJLEdBQUosSUFBSSxDQUFNO1FBR2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQVEsQ0FBQyxRQUFRLENBQUM7O0lBQ3BDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUcsY0FBTSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsc0JBQWtCLENBQUM7YUFDNUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxzQkFBQztBQUFELENBZEEsQUFjQyxDQWRvQyxpQkFBUyxHQWM3QztBQWRZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FJUyx3QkFBZ0I7UUFDcEIsV0FBSTtHQUpULGVBQWUsQ0FjM0I7QUFkWSwwQ0FBZSIsImZpbGUiOiJhcHAvbW9kdWxlcy9zYW1wbGUvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvaW5kZXgnO1xuaW1wb3J0IHsgQW5hbHl0aWNzLCBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW5hbHl0aWNzL2luZGV4JztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBOYW1lTGlzdCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIGV4dGVuZHMgQW5hbHl0aWNzIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYW5hbHl0aWNzOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cFxuICApIHtcbiAgICBzdXBlcihhbmFseXRpY3MpO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBOYW1lTGlzdC5DQVRFR09SWTtcbiAgfVxuXG4gIGdldE5hbWVzKCk6IE9ic2VydmFibGU8QXJyYXk8c3RyaW5nPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke0NvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkgPyAnLycgOiAnJ31hc3NldHMvZGF0YS5qc29uYClcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICB9XG59XG4iXX0=
