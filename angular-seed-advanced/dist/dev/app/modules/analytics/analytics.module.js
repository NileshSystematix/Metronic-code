"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angulartics2_1 = require("angulartics2");
var index_1 = require("./services/index");
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    return AnalyticsModule;
}());
AnalyticsModule = __decorate([
    core_1.NgModule({
        imports: [
            angulartics2_1.Angulartics2Module.forRoot([
                angulartics2_1.Angulartics2Segment
            ])
        ],
        providers: index_1.ANALYTICS_PROVIDERS.slice()
    })
], AnalyticsModule);
exports.AnalyticsModule = AnalyticsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FuYWx5dGljcy9hbmFseXRpY3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esc0NBQXlDO0FBR3pDLDZDQUF1RTtBQUd2RSwwQ0FBdUQ7QUFnQnZELElBQWEsZUFBZTtJQUE1QjtJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksZUFBZTtJQVYzQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBa0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLGtDQUFtQjthQUNwQixDQUFDO1NBQ0g7UUFDRCxTQUFTLEVBQ0osMkJBQW1CLFFBQ3ZCO0tBQ0YsQ0FBQztHQUNXLGVBQWUsQ0FFM0I7QUFGWSwwQ0FBZSIsImZpbGUiOiJhcHAvbW9kdWxlcy9hbmFseXRpY3MvYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYlxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyTW9kdWxlLCBBbmd1bGFydGljczJTZWdtZW50IH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBBTkFMWVRJQ1NfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbi8qKlxuICogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFuZ3VsYXJ0aWNzMk1vZHVsZS5mb3JSb290KFtcbiAgICAgIEFuZ3VsYXJ0aWNzMlNlZ21lbnRcbiAgICBdKVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5BTkFMWVRJQ1NfUFJPVklERVJTXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzTW9kdWxlIHtcblxufVxuIl19
