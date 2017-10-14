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
var HrefPreventDefaultDirective = (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    return HrefPreventDefaultDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HrefPreventDefaultDirective.prototype, "href", void 0);
HrefPreventDefaultDirective = __decorate([
    core_1.Directive({
        selector: "[href]",
        host: { '(click)': 'preventDefault($event)' },
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HrefPreventDefaultDirective);
exports.HrefPreventDefaultDirective = HrefPreventDefaultDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL19kaXJlY3RpdmVzL2hyZWYtcHJldmVudC1kZWZhdWx0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE0RTtBQU81RSxJQUFhLDJCQUEyQjtJQUd4QyxxQ0FBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFFbEMsQ0FBQztJQUNELHFEQUFlLEdBQWY7SUFFQSxDQUFDO0lBQ0Qsb0RBQWMsR0FBZCxVQUFlLEtBQUs7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZFE7SUFBUixZQUFLLEVBQUU7O3lEQUFjO0FBRFQsMkJBQTJCO0lBSnZDLGdCQUFTLENBQUM7UUFDWCxRQUFRLEVBQUUsUUFBUTtRQUNsQixJQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsd0JBQXdCLEVBQUM7S0FDMUMsQ0FBQztxQ0FJc0IsaUJBQVU7R0FIckIsMkJBQTJCLENBZXZDO0FBZlksa0VBQTJCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL19kaXJlY3RpdmVzL2hyZWYtcHJldmVudC1kZWZhdWx0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ARGlyZWN0aXZlKHtcbnNlbGVjdG9yOiBcIltocmVmXVwiLFxuaG9zdDogeycoY2xpY2spJzogJ3ByZXZlbnREZWZhdWx0KCRldmVudCknfSxcbn0pXG5leHBvcnQgY2xhc3MgSHJlZlByZXZlbnREZWZhdWx0RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5ASW5wdXQoKSBocmVmOiBzdHJpbmc7XG5cbmNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpICB7XG5cbn1cbm5nQWZ0ZXJWaWV3SW5pdCgpICB7XG5cbn1cbnByZXZlbnREZWZhdWx0KGV2ZW50KSAge1xuaWYgKHRoaXMuaHJlZi5sZW5ndGggPT09IDAgfHwgdGhpcy5ocmVmID09PSAnIycpIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cbn1cblxufSJdfQ==
