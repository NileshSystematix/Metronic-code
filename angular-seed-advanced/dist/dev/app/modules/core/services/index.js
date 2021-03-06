"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var console_service_1 = require("./console.service");
var log_service_1 = require("./logging/log.service");
var router_extensions_service_1 = require("./router-extensions.service");
var window_service_1 = require("./window.service");
var app_service_1 = require("./app.service");
var storage_service_1 = require("./storage.service");
exports.CORE_PROVIDERS = [
    window_service_1.WindowService,
    storage_service_1.StorageService,
    console_service_1.ConsoleService,
    log_service_1.LogService,
    app_service_1.AppService,
    router_extensions_service_1.RouterExtensions,
];
__export(require("./console.service"));
__export(require("./logging/index"));
__export(require("./router-extensions.service"));
__export(require("./window.service"));
__export(require("./app.service"));
__export(require("./storage.service"));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxxREFBbUQ7QUFDbkQscURBQW1EO0FBQ25ELHlFQUErRDtBQUMvRCxtREFBaUQ7QUFDakQsNkNBQTJDO0FBQzNDLHFEQUFtRDtBQUV0QyxRQUFBLGNBQWMsR0FBVTtJQUNuQyw4QkFBYTtJQUNiLGdDQUFjO0lBQ2QsZ0NBQWM7SUFDZCx3QkFBVTtJQUNWLHdCQUFVO0lBQ1YsNENBQWdCO0NBQ2pCLENBQUM7QUFFRix1Q0FBa0M7QUFDbEMscUNBQWdDO0FBQ2hDLGlEQUE0QztBQUM1QyxzQ0FBaUM7QUFDakMsbUNBQThCO0FBQzlCLHVDQUFrQyIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3NlcnZpY2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwXG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSB9IGZyb20gJy4vY29uc29sZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tICcuL2xvZ2dpbmcvbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJy4vcm91dGVyLWV4dGVuc2lvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IENPUkVfUFJPVklERVJTOiBhbnlbXSA9IFtcbiAgV2luZG93U2VydmljZSxcbiAgU3RvcmFnZVNlcnZpY2UsXG4gIENvbnNvbGVTZXJ2aWNlLFxuICBMb2dTZXJ2aWNlLFxuICBBcHBTZXJ2aWNlLFxuICBSb3V0ZXJFeHRlbnNpb25zLFxuXTtcblxuZXhwb3J0ICogZnJvbSAnLi9jb25zb2xlLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dnaW5nL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVyLWV4dGVuc2lvbnMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXBwLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zdG9yYWdlLnNlcnZpY2UnO1xuIl19
