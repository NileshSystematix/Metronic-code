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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var index_1 = require("../core/index");
var index_2 = require("./components/index");
var index_3 = require("./services/index");
function translateLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, (index_1.Config.IS_MOBILE_NATIVE() ? '/' : '') + "assets/i18n/", '.json');
}
exports.translateLoaderFactory = translateLoaderFactory;
var MultilingualModule = MultilingualModule_1 = (function () {
    function MultilingualModule(parentModule) {
        if (parentModule) {
            throw new Error('MultilingualModule already loaded; Import in root module only.');
        }
    }
    MultilingualModule.forRoot = function (configuredProviders) {
        return {
            ngModule: MultilingualModule_1,
            providers: configuredProviders
        };
    };
    return MultilingualModule;
}());
MultilingualModule = MultilingualModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            core_2.TranslateModule.forRoot([{
                    provide: core_2.TranslateLoader,
                    deps: [http_1.Http],
                    useFactory: (translateLoaderFactory)
                }]),
        ],
        declarations: index_2.MULTILANG_COMPONENTS.slice(),
        providers: index_3.MULTILANG_PROVIDERS.slice(),
        exports: index_2.MULTILANG_COMPONENTS.concat([
            core_2.TranslateModule
        ]),
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
            core_1.CUSTOM_ELEMENTS_SCHEMA
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [MultilingualModule])
], MultilingualModule);
exports.MultilingualModule = MultilingualModule;
var MultilingualModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vbXVsdGlsaW5ndWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUE0SDtBQUM1SCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLHNDQUFpRDtBQUdqRCw0Q0FBdUU7QUFDdkUsMERBQWlFO0FBR2pFLHVDQUF1QztBQUN2Qyw0Q0FBMEQ7QUFDMUQsMENBQXVEO0FBR3ZELGdDQUF1QyxJQUFVO0lBQy9DLE1BQU0sQ0FBQyxJQUFJLGlDQUFtQixDQUFDLElBQUksRUFBRSxDQUFHLGNBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLGtCQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkcsQ0FBQztBQUZELHdEQUVDO0FBZ0NELElBQWEsa0JBQWtCO0lBVzdCLDRCQUFvQyxZQUFnQztRQUNsRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUNwRixDQUFDO0lBQ0gsQ0FBQztJQVhNLDBCQUFPLEdBQWQsVUFBZSxtQkFBK0I7UUFDNUMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsbUJBQW1CO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBT0gseUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGtCQUFrQjtJQTFCOUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixpQkFBVTtZQUNWLG1CQUFXO1lBQ1gsc0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxFQUFFLHNCQUFlO29CQUN4QixJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7b0JBQ1osVUFBVSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztTQUNKO1FBQ0QsWUFBWSxFQUNQLDRCQUFvQixRQUN4QjtRQUNELFNBQVMsRUFDSiwyQkFBbUIsUUFDdkI7UUFDRCxPQUFPLEVBQ0YsNEJBQW9CO1lBQ3ZCLHNCQUFlO1VBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1lBQ2hCLDZCQUFzQjtTQUN2QjtLQUNGLENBQUM7SUFZYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTtxQ0FBZSxrQkFBa0I7R0FYekQsa0JBQWtCLENBZ0I5QjtBQWhCWSxnREFBa0IiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi9tdWx0aWxpbmd1YWwubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcblxuLy8gbW9kdWxlXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb3JlL2luZGV4JztcbmltcG9ydCB7IE1VTFRJTEFOR19DT01QT05FTlRTIH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IE1VTFRJTEFOR19QUk9WSURFUlMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuLy8gZm9yIEFvVCBjb21waWxhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkoaHR0cDogSHR0cCkge1xuICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgYCR7Q29uZmlnLklTX01PQklMRV9OQVRJVkUoKSA/ICcvJyA6ICcnfWFzc2V0cy9pMThuL2AsICcuanNvbicpO1xufVxuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdChbe1xuICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgZGVwczogW0h0dHBdLFxuICAgICAgdXNlRmFjdG9yeTogKHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkpXG4gICAgfV0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5NVUxUSUxBTkdfQ09NUE9ORU5UU1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5NVUxUSUxBTkdfUFJPVklERVJTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uTVVMVElMQU5HX0NPTVBPTkVOVFMsXG4gICAgVHJhbnNsYXRlTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxuICAgIENVU1RPTV9FTEVNRU5UU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmd1YWxNb2R1bGUge1xuXG4gIC8vIG9wdGlvbmFsIHVzYWdlXG4gIC8vIGlkZWFsbHkgd2UgY291bGQgdXNlIHRoaXMgdG8gb3ZlcnJpZGUgVHJhbnNsYXRlTW9kdWxlLCBidXQgaXQgcmVxdWlyZXMgdGhlIHN0YXRpYyBhYm92ZSBhdCBtb21lbnRcbiAgc3RhdGljIGZvclJvb3QoY29uZmlndXJlZFByb3ZpZGVyczogQXJyYXk8YW55Pik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTXVsdGlsaW5ndWFsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBjb25maWd1cmVkUHJvdmlkZXJzXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogTXVsdGlsaW5ndWFsTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdWx0aWxpbmd1YWxNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xuICAgIH1cbiAgfVxufVxuIl19
