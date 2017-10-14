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
var helpers_1 = require("../helpers");
var UnwrapTagDirective = (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        helpers_1.Helpers.unwrapTag(nativeElement);
    };
    return UnwrapTagDirective;
}());
UnwrapTagDirective = __decorate([
    core_1.Directive({
        selector: "[appunwraptag]",
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], UnwrapTagDirective);
exports.UnwrapTagDirective = UnwrapTagDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL19kaXJlY3RpdmVzL3Vud3JhcC10YWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFFO0FBQ3JFLHNDQUFxQztBQU1yQyxJQUFhLGtCQUFrQjtJQUcvQiw0QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFFbEMsQ0FBQztJQUNELDRDQUFlLEdBQWY7UUFDQSxJQUFJLGFBQWEsR0FBZ0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckQsaUJBQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHlCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxrQkFBa0I7SUFIOUIsZ0JBQVMsQ0FBQztRQUNYLFFBQVEsRUFBRSxnQkFBZ0I7S0FDekIsQ0FBQztxQ0FJc0IsaUJBQVU7R0FIckIsa0JBQWtCLENBVzlCO0FBWFksZ0RBQWtCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL19kaXJlY3RpdmVzL3Vud3JhcC10YWcuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cblxuQERpcmVjdGl2ZSh7XG5zZWxlY3RvcjogXCJbYXBwdW53cmFwdGFnXVwiLFxufSlcbmV4cG9ydCBjbGFzcyBVbndyYXBUYWdEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXG5jb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSAge1xuXG59XG5uZ0FmdGVyVmlld0luaXQoKSAge1xubGV0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG5cdFx0SGVscGVycy51bndyYXBUYWcobmF0aXZlRWxlbWVudCk7XG59XG5cbn0iXX0=
