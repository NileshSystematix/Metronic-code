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
var log_service_1 = require("../../../core/services/logging/log.service");
var ToolbarComponent = (function () {
    function ToolbarComponent(log) {
        this.log = log;
    }
    ToolbarComponent.prototype.openLanguages = function (e) {
        this.log.debug('openLanguages');
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-toolbar',
        templateUrl: 'toolbar.component.html',
        styleUrls: [
            'toolbar.component.css',
        ],
    }),
    __metadata("design:paramtypes", [log_service_1.LogService])
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFHMUMsMEVBQXdFO0FBVXhFLElBQWEsZ0JBQWdCO0lBRTNCLDBCQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFHLENBQUM7SUFFaEMsd0NBQWEsR0FBcEIsVUFBcUIsQ0FBTTtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLGdCQUFnQjtJQVI1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFO1lBQ1QsdUJBQXVCO1NBQ3hCO0tBQ0YsQ0FBQztxQ0FHeUIsd0JBQVU7R0FGeEIsZ0JBQWdCLENBTzVCO0FBUFksNENBQWdCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBMb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9sb2dnaW5nL2xvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICd0b29sYmFyLmNvbXBvbmVudC5jc3MnLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZzogTG9nU2VydmljZSkge31cblxuICBwdWJsaWMgb3Blbkxhbmd1YWdlcyhlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmxvZy5kZWJ1Zygnb3Blbkxhbmd1YWdlcycpO1xuICB9XG59XG4iXX0=
