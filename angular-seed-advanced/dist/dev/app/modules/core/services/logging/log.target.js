"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 4] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var LogTargetOptions = (function () {
    function LogTargetOptions() {
    }
    return LogTargetOptions;
}());
exports.LogTargetOptions = LogTargetOptions;
var LogTarget = (function () {
    function LogTarget() {
    }
    return LogTarget;
}());
exports.LogTarget = LogTarget;
var LogTargetBase = (function () {
    function LogTargetBase(options) {
        this.options = options;
    }
    LogTargetBase.prototype.log = function (event) {
        if (event.level >= this.options.minLogLevel) {
            return this.writeToLog(event);
        }
        return Promise.resolve();
    };
    return LogTargetBase;
}());
exports.LogTargetBase = LogTargetBase;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvc2VydmljZXMvbG9nZ2luZy9sb2cudGFyZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxRQUtYO0FBTEQsV0FBWSxRQUFRO0lBQ2xCLHlDQUFTLENBQUE7SUFDVCx1Q0FBUSxDQUFBO0lBQ1IsNkNBQVcsQ0FBQTtJQUNYLHlDQUFTLENBQUE7QUFDWCxDQUFDLEVBTFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFLbkI7QUFPRDtJQUFBO0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGcUIsNENBQWdCO0FBSXRDO0lBQUE7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZxQiw4QkFBUztBQUkvQjtJQUNFLHVCQUFzQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUMvQyxDQUFDO0lBRUQsMkJBQUcsR0FBSCxVQUFJLEtBQWU7UUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdILG9CQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFacUIsc0NBQWEiLCJmaWxlIjoiYXBwL21vZHVsZXMvY29yZS9zZXJ2aWNlcy9sb2dnaW5nL2xvZy50YXJnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gIERlYnVnID0gMCxcbiAgSW5mbyA9IDEsXG4gIFdhcm5pbmcgPSAyLFxuICBFcnJvciA9IDRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2dFdmVudCB7XG4gIG1lc3NhZ2U6IHN0cmluZyB8IE9iamVjdDtcbiAgbGV2ZWw6IExvZ0xldmVsO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nVGFyZ2V0T3B0aW9ucyB7XG4gIG1pbkxvZ0xldmVsOiBMb2dMZXZlbDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1RhcmdldCB7XG4gIGFic3RyYWN0IGxvZyhldmVudDogTG9nRXZlbnQpOiBQcm9taXNlPGFueT47XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dUYXJnZXRCYXNlIGltcGxlbWVudHMgTG9nVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wdGlvbnM6IExvZ1RhcmdldE9wdGlvbnMpIHtcbiAgfVxuXG4gIGxvZyhldmVudDogTG9nRXZlbnQpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChldmVudC5sZXZlbCA+PSB0aGlzLm9wdGlvbnMubWluTG9nTGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLndyaXRlVG9Mb2coZXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgd3JpdGVUb0xvZyhldmVudDogTG9nRXZlbnQpOiBQcm9taXNlPGFueT47XG59XG4iXX0=
