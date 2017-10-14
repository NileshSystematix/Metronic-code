"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var store_devtools_1 = require("@ngrx/store-devtools");
var core_2 = require("@ngx-translate/core");
var index_1 = require("./app/components/index");
var app_routes_1 = require("./app/components/app.routes");
var index_2 = require("./app/modules/core/services/index");
var index_3 = require("./app/modules/core/index");
var index_4 = require("./app/modules/analytics/index");
var index_5 = require("./app/modules/i18n/index");
var index_6 = require("./app/modules/sample/index");
var index_7 = require("./app/modules/ngrx/index");
index_3.Config.PLATFORM_TARGET = index_3.Config.PLATFORMS.WEB;
if (String('dev') === 'dev') {
    index_3.Config.DEBUG.LEVEL_4 = true;
}
var routerModule = router_1.RouterModule.forRoot(app_routes_1.routes);
if (String('false') === 'true') {
    index_3.Config.PLATFORM_TARGET = index_3.Config.PLATFORMS.DESKTOP;
    routerModule = router_1.RouterModule.forRoot(app_routes_1.routes, { useHash: true });
}
function win() {
    return window;
}
exports.win = win;
function storage() {
    return localStorage;
}
exports.storage = storage;
function cons() {
    return console;
}
exports.cons = cons;
function consoleLogTarget(consoleService) {
    return new index_2.ConsoleTarget(consoleService, { minLogLevel: index_2.LogLevel.Debug });
}
exports.consoleLogTarget = consoleLogTarget;
var DEV_IMPORTS = [];
if (String('dev') === 'dev') {
    DEV_IMPORTS = DEV_IMPORTS.concat([
        store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension()
    ]);
}
var WebModule = (function () {
    function WebModule() {
    }
    return WebModule;
}());
WebModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            index_3.CoreModule.forRoot([
                { provide: index_2.WindowService, useFactory: (win) },
                { provide: index_2.StorageService, useFactory: (storage) },
                { provide: index_2.ConsoleService, useFactory: (cons) },
                { provide: index_2.LogTarget, useFactory: (consoleLogTarget), deps: [index_2.ConsoleService], multi: true }
            ]),
            routerModule,
            index_4.AnalyticsModule,
            index_5.MultilingualModule.forRoot([{
                    provide: core_2.TranslateLoader,
                    deps: [http_1.Http],
                    useFactory: (index_5.translateLoaderFactory)
                }]),
            index_6.SampleModule,
            store_1.StoreModule.provideStore(index_7.AppReducer),
            effects_1.EffectsModule.run(index_5.MultilingualEffects),
            effects_1.EffectsModule.run(index_6.SampleEffects),
            DEV_IMPORTS,
        ],
        declarations: [
            index_1.APP_COMPONENTS
        ],
        providers: [
            {
                provide: common_1.APP_BASE_HREF,
                useValue: '/'
            },
            {
                provide: index_5.Languages,
                useValue: index_3.Config.GET_SUPPORTED_LANGUAGES()
            }
        ],
        bootstrap: [index_1.AppComponent]
    })
], WebModule);
exports.WebModule = WebModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxzQ0FBeUM7QUFDekMsMENBQWdEO0FBQ2hELDhEQUEwRDtBQUMxRCwwQ0FBK0M7QUFDL0Msc0NBQXFDO0FBR3JDLHFDQUEwQztBQUMxQyx5Q0FBOEM7QUFDOUMsdURBQTJEO0FBQzNELDRDQUFzRDtBQUd0RCxnREFBc0U7QUFDdEUsMERBQXFEO0FBR3JELDJEQUFpTDtBQUNqTCxrREFBOEQ7QUFDOUQsdURBQWdFO0FBQ2hFLGtEQUFzSDtBQUN0SCxvREFBeUU7QUFDekUsa0RBQXNEO0FBR3RELGNBQU0sQ0FBQyxlQUFlLEdBQUcsY0FBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7QUFDOUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUxQyxjQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDOUIsQ0FBQztBQUVELElBQUksWUFBWSxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFNLENBQUMsQ0FBQztBQUVoRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9DLGNBQU0sQ0FBQyxlQUFlLEdBQUcsY0FBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFFbEQsWUFBWSxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBS0Q7SUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFGRCxrQkFFQztBQUNEO0lBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN0QixDQUFDO0FBRkQsMEJBRUM7QUFDRDtJQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUZELG9CQUVDO0FBQ0QsMEJBQWlDLGNBQThCO0lBQzdELE1BQU0sQ0FBQyxJQUFJLHFCQUFhLENBQUMsY0FBYyxFQUFFLEVBQUUsV0FBVyxFQUFFLGdCQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUM1RSxDQUFDO0FBRkQsNENBRUM7QUFFRCxJQUFJLFdBQVcsR0FBVSxFQUFFLENBQUM7QUFFNUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxQyxXQUFXLEdBQ04sV0FBVztRQUNkLG9DQUFtQixDQUFDLDJCQUEyQixFQUFFO01BQ2xELENBQUM7QUFDSixDQUFDO0FBMkNELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsU0FBUztJQXpDckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZ0NBQWE7WUFDYixrQkFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsRUFBRSxPQUFPLEVBQUUscUJBQWEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0MsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbEQsRUFBRSxPQUFPLEVBQUUsc0JBQWMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0MsRUFBRSxPQUFPLEVBQUUsaUJBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLHNCQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQzVGLENBQUM7WUFDRixZQUFZO1lBQ1osdUJBQWU7WUFDZiwwQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLHNCQUFlO29CQUN4QixJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7b0JBQ1osVUFBVSxFQUFFLENBQUMsOEJBQXNCLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztZQUNILG9CQUFZO1lBRVosbUJBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQVUsQ0FBQztZQUNwQyx1QkFBYSxDQUFDLEdBQUcsQ0FBQywyQkFBbUIsQ0FBQztZQUN0Qyx1QkFBYSxDQUFDLEdBQUcsQ0FBQyxxQkFBYSxDQUFDO1lBRWhDLFdBQVc7U0FDWjtRQUNELFlBQVksRUFBRTtZQUNaLHNCQUFjO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsc0JBQWE7Z0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7WUFFRDtnQkFDRSxPQUFPLEVBQUUsaUJBQVM7Z0JBQ2xCLFFBQVEsRUFBRSxjQUFNLENBQUMsdUJBQXVCLEVBQUU7YUFDM0M7U0FDRjtRQUNELFNBQVMsRUFBRSxDQUFDLG9CQUFZLENBQUM7S0FDMUIsQ0FBQztHQUVXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwiZmlsZSI6IndlYi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZS1kZXZ0b29scyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBUFBfQ09NUE9ORU5UUywgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC9jb21wb25lbnRzL2FwcC5yb3V0ZXMnO1xuXG4vLyBmZWF0dXJlIG1vZHVsZXNcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlLCBDb25zb2xlU2VydmljZSwgY3JlYXRlQ29uc29sZVRhcmdldCwgcHJvdmlkZUNvbnNvbGVUYXJnZXQsIExvZ1RhcmdldCwgTG9nTGV2ZWwsIENvbnNvbGVUYXJnZXQgfSBmcm9tICcuL2FwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSwgQ29uZmlnIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9jb3JlL2luZGV4JztcbmltcG9ydCB7IEFuYWx5dGljc01vZHVsZSB9IGZyb20gJy4vYXBwL21vZHVsZXMvYW5hbHl0aWNzL2luZGV4JztcbmltcG9ydCB7IE11bHRpbGluZ3VhbE1vZHVsZSwgTGFuZ3VhZ2VzLCB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5LCBNdWx0aWxpbmd1YWxFZmZlY3RzIH0gZnJvbSAnLi9hcHAvbW9kdWxlcy9pMThuL2luZGV4JztcbmltcG9ydCB7IFNhbXBsZU1vZHVsZSwgU2FtcGxlRWZmZWN0cyB9IGZyb20gJy4vYXBwL21vZHVsZXMvc2FtcGxlL2luZGV4JztcbmltcG9ydCB7IEFwcFJlZHVjZXIgfSBmcm9tICcuL2FwcC9tb2R1bGVzL25ncngvaW5kZXgnO1xuXG4vLyBjb25maWdcbkNvbmZpZy5QTEFURk9STV9UQVJHRVQgPSBDb25maWcuUExBVEZPUk1TLldFQjtcbmlmIChTdHJpbmcoJzwlPSBCVUlMRF9UWVBFICU+JykgPT09ICdkZXYnKSB7XG4gIC8vIG9ubHkgb3V0cHV0IGNvbnNvbGUgbG9nZ2luZyBpbiBkZXYgbW9kZVxuICBDb25maWcuREVCVUcuTEVWRUxfNCA9IHRydWU7XG59XG5cbmxldCByb3V0ZXJNb2R1bGUgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xuXG5pZiAoU3RyaW5nKCc8JT0gVEFSR0VUX0RFU0tUT1AgJT4nKSA9PT0gJ3RydWUnKSB7XG4gIENvbmZpZy5QTEFURk9STV9UQVJHRVQgPSBDb25maWcuUExBVEZPUk1TLkRFU0tUT1A7XG4gIC8vIGRlc2t0b3AgKGVsZWN0cm9uKSBtdXN0IHVzZSBoYXNoXG4gIHJvdXRlck1vZHVsZSA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyB1c2VIYXNoOiB0cnVlIH0pO1xufVxuXG5kZWNsYXJlIHZhciB3aW5kb3csIGNvbnNvbGUsIGxvY2FsU3RvcmFnZTtcblxuLy8gRm9yIEFvVCBjb21waWxhdGlvbiB0byB3b3JrOlxuZXhwb3J0IGZ1bmN0aW9uIHdpbigpIHtcbiAgcmV0dXJuIHdpbmRvdztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnMoKSB7XG4gIHJldHVybiBjb25zb2xlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnNvbGVMb2dUYXJnZXQoY29uc29sZVNlcnZpY2U6IENvbnNvbGVTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgQ29uc29sZVRhcmdldChjb25zb2xlU2VydmljZSwgeyBtaW5Mb2dMZXZlbDogTG9nTGV2ZWwuRGVidWcgfSk7XG59XG5cbmxldCBERVZfSU1QT1JUUzogYW55W10gPSBbXTtcblxuaWYgKFN0cmluZygnPCU9IEJVSUxEX1RZUEUgJT4nKSA9PT0gJ2RldicpIHtcbiAgREVWX0lNUE9SVFMgPSBbXG4gICAgLi4uREVWX0lNUE9SVFMsXG4gICAgU3RvcmVEZXZ0b29sc01vZHVsZS5pbnN0cnVtZW50T25seVdpdGhFeHRlbnNpb24oKVxuICBdO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwcm92aWRlOiBXaW5kb3dTZXJ2aWNlLCB1c2VGYWN0b3J5OiAod2luKSB9LFxuICAgICAgeyBwcm92aWRlOiBTdG9yYWdlU2VydmljZSwgdXNlRmFjdG9yeTogKHN0b3JhZ2UpIH0sXG4gICAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VGYWN0b3J5OiAoY29ucykgfSxcbiAgICAgIHsgcHJvdmlkZTogTG9nVGFyZ2V0LCB1c2VGYWN0b3J5OiAoY29uc29sZUxvZ1RhcmdldCksIGRlcHM6IFtDb25zb2xlU2VydmljZV0sIG11bHRpOiB0cnVlIH1cbiAgICBdKSxcbiAgICByb3V0ZXJNb2R1bGUsXG4gICAgQW5hbHl0aWNzTW9kdWxlLFxuICAgIE11bHRpbGluZ3VhbE1vZHVsZS5mb3JSb290KFt7XG4gICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICBkZXBzOiBbSHR0cF0sXG4gICAgICB1c2VGYWN0b3J5OiAodHJhbnNsYXRlTG9hZGVyRmFjdG9yeSlcbiAgICB9XSksXG4gICAgU2FtcGxlTW9kdWxlLFxuICAgIC8vIGNvbmZpZ3VyZSBhcHAgc3RhdGVcbiAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUoQXBwUmVkdWNlciksXG4gICAgRWZmZWN0c01vZHVsZS5ydW4oTXVsdGlsaW5ndWFsRWZmZWN0cyksXG4gICAgRWZmZWN0c01vZHVsZS5ydW4oU2FtcGxlRWZmZWN0cyksXG4gICAgLy8gZGV2IGVudmlyb25tZW50IG9ubHkgaW1wb3J0c1xuICAgIERFVl9JTVBPUlRTLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBUFBfQ09NUE9ORU5UU1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gICAgfSxcbiAgICAvLyBvdmVycmlkZSB3aXRoIHN1cHBvcnRlZCBsYW5ndWFnZXNcbiAgICB7XG4gICAgICBwcm92aWRlOiBMYW5ndWFnZXMsXG4gICAgICB1c2VWYWx1ZTogQ29uZmlnLkdFVF9TVVBQT1JURURfTEFOR1VBR0VTKClcbiAgICB9XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXZWJNb2R1bGUgeyB9XG4iXX0=
