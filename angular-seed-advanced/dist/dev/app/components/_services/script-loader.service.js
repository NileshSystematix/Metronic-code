"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require("jquery");
var ScriptLoaderService = (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        this.tag = tag;
        scripts.forEach(function (script) { return _this._scripts[script] = { src: script, loaded: false }; });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptLoaderService.prototype.loadScript = function (src) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._scripts[src].loaded) {
                resolve({ script: src, loaded: true, status: 'Already Loaded' });
            }
            else {
                var script = $('<script/>')
                    .attr('type', 'text/javascript')
                    .attr('src', _this._scripts[src].src);
                $(_this.tag).append(script);
                resolve({ script: src, loaded: true, status: 'Loaded' });
            }
        });
    };
    return ScriptLoaderService;
}());
ScriptLoaderService = __decorate([
    core_1.Injectable()
], ScriptLoaderService);
exports.ScriptLoaderService = ScriptLoaderService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL19zZXJ2aWNlcy9zY3JpcHQtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMEJBQTRCO0FBVTVCLElBQWEsbUJBQW1CO0lBRGhDO1FBRVMsYUFBUSxHQUFhLEVBQUUsQ0FBQztJQThCakMsQ0FBQztJQTNCQSxrQ0FBSSxHQUFKLFVBQUssR0FBRztRQUFSLGlCQU9DO1FBUFMsaUJBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQixnQ0FBb0I7O1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsRUFBcEQsQ0FBb0QsQ0FBQyxDQUFDO1FBRTFGLElBQUksUUFBUSxHQUFVLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztRQUNwRSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEdBQVc7UUFBdEIsaUJBaUJDO1FBaEJBLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBR2xDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUVMLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7cUJBQ3pCLElBQUksQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUM7cUJBQy9CLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFdEMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0YsMEJBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLG1CQUFtQjtJQUQvQixpQkFBVSxFQUFFO0dBQ0EsbUJBQW1CLENBK0IvQjtBQS9CWSxrREFBbUIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvX3NlcnZpY2VzL3NjcmlwdC1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuZGVjbGFyZSBsZXQgZG9jdW1lbnQ6IGFueTtcclxuXHJcbmludGVyZmFjZSBTY3JpcHQge1xyXG5cdHNyYzogc3RyaW5nO1xyXG5cdGxvYWRlZDogYm9vbGVhbjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2NyaXB0TG9hZGVyU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfc2NyaXB0czogU2NyaXB0W10gPSBbXTtcclxuXHRwcml2YXRlIHRhZzogYW55O1xyXG5cclxuXHRsb2FkKHRhZywgLi4uc2NyaXB0czogc3RyaW5nW10pIHtcclxuXHRcdHRoaXMudGFnID0gdGFnO1xyXG5cdFx0c2NyaXB0cy5mb3JFYWNoKChzY3JpcHQ6IHN0cmluZykgPT4gdGhpcy5fc2NyaXB0c1tzY3JpcHRdID0ge3NyYzogc2NyaXB0LCBsb2FkZWQ6IGZhbHNlfSk7XHJcblxyXG5cdFx0bGV0IHByb21pc2VzOiBhbnlbXSA9IFtdO1xyXG5cdFx0c2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHNjcmlwdCkpKTtcclxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblx0fVxyXG5cclxuXHRsb2FkU2NyaXB0KHNyYzogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuXHRcdFx0Ly9yZXNvbHZlIGlmIGFscmVhZHkgbG9hZGVkXHJcblx0XHRcdGlmICh0aGlzLl9zY3JpcHRzW3NyY10ubG9hZGVkKSB7XHJcblx0XHRcdFx0cmVzb2x2ZSh7c2NyaXB0OiBzcmMsIGxvYWRlZDogdHJ1ZSwgc3RhdHVzOiAnQWxyZWFkeSBMb2FkZWQnfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Ly9sb2FkIHNjcmlwdFxyXG5cdFx0XHRcdGxldCBzY3JpcHQgPSAkKCc8c2NyaXB0Lz4nKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0JylcclxuXHRcdFx0XHRcdC5hdHRyKCdzcmMnLCB0aGlzLl9zY3JpcHRzW3NyY10uc3JjKTtcclxuXHJcblx0XHRcdFx0JCh0aGlzLnRhZykuYXBwZW5kKHNjcmlwdCk7XHJcblx0XHRcdFx0cmVzb2x2ZSh7c2NyaXB0OiBzcmMsIGxvYWRlZDogdHJ1ZSwgc3RhdHVzOiAnTG9hZGVkJ30pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXX0=
