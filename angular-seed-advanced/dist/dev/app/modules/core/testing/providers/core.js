"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../../analytics/index");
var index_2 = require("../../services/index");
var window_mock_1 = require("../mocks/window.mock");
var router_extensions_mock_1 = require("../mocks/router-extensions.mock");
function TEST_CORE_PROVIDERS(options) {
    var providers = [
        { provide: index_2.ConsoleService, useValue: console },
        { provide: index_2.StorageService, useValue: localStorage },
        { provide: index_2.WindowService, useClass: (options && options.window) || window_mock_1.WindowMock },
        {
            provide: index_2.LogTarget,
            deps: [index_2.ConsoleService],
            useFactory: function (c) { return new index_2.ConsoleTarget(c, { minLogLevel: index_2.LogLevel.Debug }); },
            multi: true
        },
        index_2.LogService,
        index_1.ANALYTICS_PROVIDERS,
        { provide: index_2.RouterExtensions, useClass: router_extensions_mock_1.RouterExtensionsMock },
        index_2.AppService
    ];
    return providers;
}
exports.TEST_CORE_PROVIDERS = TEST_CORE_PROVIDERS;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9wcm92aWRlcnMvY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtEQUErRDtBQUcvRCw4Q0FBbUs7QUFHbkssb0RBQWtEO0FBQ2xELDBFQUF1RTtBQUV2RSw2QkFBb0MsT0FBYTtJQUkvQyxJQUFJLFNBQVMsR0FBRztRQUNkLEVBQUUsT0FBTyxFQUFFLHNCQUFjLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTtRQUM5QyxFQUFFLE9BQU8sRUFBRSxzQkFBYyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7UUFDbkQsRUFBRSxPQUFPLEVBQUUscUJBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLHdCQUFVLEVBQUU7UUFDL0U7WUFDRSxPQUFPLEVBQUUsaUJBQVM7WUFDbEIsSUFBSSxFQUFFLENBQUMsc0JBQWMsQ0FBQztZQUN0QixVQUFVLEVBQUUsVUFBQyxDQUFpQixJQUFLLE9BQUEsSUFBSSxxQkFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxnQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQXJELENBQXFEO1lBQ3hGLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxrQkFBVTtRQUNWLDJCQUFtQjtRQUNuQixFQUFFLE9BQU8sRUFBRSx3QkFBZ0IsRUFBRSxRQUFRLEVBQUUsNkNBQW9CLEVBQUU7UUFDN0Qsa0JBQVU7S0FDWCxDQUFDO0lBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBckJELGtEQXFCQyIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3Rlc3RpbmcvcHJvdmlkZXJzL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHBcbmltcG9ydCB7IEFOQUxZVElDU19QUk9WSURFUlMgfSBmcm9tICcuLi8uLi8uLi9hbmFseXRpY3MvaW5kZXgnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlLCBDb25zb2xlU2VydmljZSwgTG9nU2VydmljZSwgTG9nVGFyZ2V0LCBDb25zb2xlVGFyZ2V0LCBMb2dMZXZlbCwgUm91dGVyRXh0ZW5zaW9ucywgQXBwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuLy8gbW9ja3NcbmltcG9ydCB7IFdpbmRvd01vY2sgfSBmcm9tICcuLi9tb2Nrcy93aW5kb3cubW9jayc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zTW9jayB9IGZyb20gJy4uL21vY2tzL3JvdXRlci1leHRlbnNpb25zLm1vY2snO1xuXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9DT1JFX1BST1ZJREVSUyhvcHRpb25zPzogYW55KTogQXJyYXk8YW55PiB7XG4gIC8vIG9wdGlvbnM6XG4gIC8vIHdpbmRvdzogICA9IGN1c3RvbSB3aW5kb3cgbW9jayAobWFpbmx5IGZvciBjaGFuZ2luZyBvdXQgbGFuZ3VhZ2UpXG5cbiAgbGV0IHByb3ZpZGVycyA9IFtcbiAgICB7IHByb3ZpZGU6IENvbnNvbGVTZXJ2aWNlLCB1c2VWYWx1ZTogY29uc29sZSB9LFxuICAgIHsgcHJvdmlkZTogU3RvcmFnZVNlcnZpY2UsIHVzZVZhbHVlOiBsb2NhbFN0b3JhZ2UgfSxcbiAgICB7IHByb3ZpZGU6IFdpbmRvd1NlcnZpY2UsIHVzZUNsYXNzOiAob3B0aW9ucyAmJiBvcHRpb25zLndpbmRvdykgfHwgV2luZG93TW9jayB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IExvZ1RhcmdldCxcbiAgICAgIGRlcHM6IFtDb25zb2xlU2VydmljZV0sXG4gICAgICB1c2VGYWN0b3J5OiAoYzogQ29uc29sZVNlcnZpY2UpID0+IG5ldyBDb25zb2xlVGFyZ2V0KGMsIHsgbWluTG9nTGV2ZWw6IExvZ0xldmVsLkRlYnVnIH0pLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIExvZ1NlcnZpY2UsXG4gICAgQU5BTFlUSUNTX1BST1ZJREVSUyxcbiAgICB7IHByb3ZpZGU6IFJvdXRlckV4dGVuc2lvbnMsIHVzZUNsYXNzOiBSb3V0ZXJFeHRlbnNpb25zTW9jayB9LFxuICAgIEFwcFNlcnZpY2VcbiAgXTtcblxuICByZXR1cm4gcHJvdmlkZXJzO1xufVxuIl19
