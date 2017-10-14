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
var log_target_1 = require("./log.target");
var console_service_1 = require("../console.service");
var ConsoleTarget = (function (_super) {
    __extends(ConsoleTarget, _super);
    function ConsoleTarget(console, options) {
        var _this = _super.call(this, options) || this;
        _this.console = console;
        return _this;
    }
    ConsoleTarget.prototype.writeToLog = function (event) {
        switch (event.level) {
            case log_target_1.LogLevel.Debug:
                this.console.log(event.message);
                break;
            case log_target_1.LogLevel.Info:
                this.console.info(event.message);
                break;
            case log_target_1.LogLevel.Warning:
                this.console.warn(event.message);
                break;
            case log_target_1.LogLevel.Error:
                this.console.error(event.message);
                break;
        }
        return Promise.resolve();
    };
    return ConsoleTarget;
}(log_target_1.LogTargetBase));
ConsoleTarget = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [console_service_1.ConsoleService, log_target_1.LogTargetOptions])
], ConsoleTarget);
exports.ConsoleTarget = ConsoleTarget;
function createConsoleTarget(level, consoleService) {
    return new ConsoleTarget(consoleService, { minLogLevel: level });
}
exports.createConsoleTarget = createConsoleTarget;
function provideConsoleTarget(logLevel) {
    return {
        provide: log_target_1.LogTarget, deps: [console_service_1.ConsoleService],
        multi: true,
        useFactory: function (c) { return new ConsoleTarget(c, { minLogLevel: logLevel }); }
    };
}
exports.provideConsoleTarget = provideConsoleTarget;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvbG9nZ2luZy9jb25zb2xlLnRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUQ7QUFDckQsMkNBQThGO0FBQzlGLHNEQUFvRDtBQUdwRCxJQUFhLGFBQWE7SUFBUyxpQ0FBYTtJQUM5Qyx1QkFBb0IsT0FBdUIsRUFBRSxPQUF5QjtRQUF0RSxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQWdCOztJQUUzQyxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEtBQWU7UUFDeEIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxxQkFBUSxDQUFDLEtBQUs7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxxQkFBUSxDQUFDLElBQUk7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxxQkFBUSxDQUFDLE9BQU87Z0JBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxxQkFBUSxDQUFDLEtBQUs7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsQ0F0QmtDLDBCQUFhLEdBc0IvQztBQXRCWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBRWtCLGdDQUFjLEVBQVcsNkJBQWdCO0dBRDNELGFBQWEsQ0FzQnpCO0FBdEJZLHNDQUFhO0FBd0IxQiw2QkFBb0MsS0FBZSxFQUFFLGNBQThCO0lBQ2pGLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxjQUFjLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBRkQsa0RBRUM7QUFFRCw4QkFBcUMsUUFBa0I7SUFDckQsTUFBTSxDQUFDO1FBQ0wsT0FBTyxFQUFFLHNCQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUMxQyxLQUFLLEVBQUUsSUFBSTtRQUNYLFVBQVUsRUFBRSxVQUFDLENBQWlCLElBQUssT0FBQSxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBL0MsQ0FBK0M7S0FDbkYsQ0FBQztBQUNKLENBQUM7QUFORCxvREFNQyIsImZpbGUiOiJhcHAvbW9kdWxlcy9jb3JlL3NlcnZpY2VzL2xvZ2dpbmcvY29uc29sZS50YXJnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nVGFyZ2V0QmFzZSwgTG9nRXZlbnQsIExvZ0xldmVsLCBMb2dUYXJnZXRPcHRpb25zLCBMb2dUYXJnZXQgfSBmcm9tICcuL2xvZy50YXJnZXQnO1xuaW1wb3J0IHsgQ29uc29sZVNlcnZpY2UgfSBmcm9tICcuLi9jb25zb2xlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uc29sZVRhcmdldCBleHRlbmRzIExvZ1RhcmdldEJhc2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnNvbGU6IENvbnNvbGVTZXJ2aWNlLCBvcHRpb25zOiBMb2dUYXJnZXRPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGV2ZW50OiBMb2dFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQubGV2ZWwpIHtcbiAgICAgIGNhc2UgTG9nTGV2ZWwuRGVidWc6XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coZXZlbnQubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dMZXZlbC5JbmZvOlxuICAgICAgICB0aGlzLmNvbnNvbGUuaW5mbyhldmVudC5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ0xldmVsLldhcm5pbmc6XG4gICAgICAgIHRoaXMuY29uc29sZS53YXJuKGV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nTGV2ZWwuRXJyb3I6XG4gICAgICAgIHRoaXMuY29uc29sZS5lcnJvcihldmVudC5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29uc29sZVRhcmdldChsZXZlbDogTG9nTGV2ZWwsIGNvbnNvbGVTZXJ2aWNlOiBDb25zb2xlU2VydmljZSkge1xuICByZXR1cm4gbmV3IENvbnNvbGVUYXJnZXQoY29uc29sZVNlcnZpY2UsIHsgbWluTG9nTGV2ZWw6IGxldmVsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbnNvbGVUYXJnZXQobG9nTGV2ZWw6IExvZ0xldmVsKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IExvZ1RhcmdldCwgZGVwczogW0NvbnNvbGVTZXJ2aWNlXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgICB1c2VGYWN0b3J5OiAoYzogQ29uc29sZVNlcnZpY2UpID0+IG5ldyBDb25zb2xlVGFyZ2V0KGMsIHsgbWluTG9nTGV2ZWw6IGxvZ0xldmVsIH0pXG4gIH07XG59XG4iXX0=
