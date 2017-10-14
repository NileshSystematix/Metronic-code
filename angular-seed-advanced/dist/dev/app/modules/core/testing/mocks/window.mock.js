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
Object.defineProperty(exports, "__esModule", { value: true });
var WindowMock = (function () {
    function WindowMock() {
        this.navigator = {
            language: 'en-US',
            userAgent: 'testing'
        };
        this.location = {};
    }
    WindowMock.prototype.alert = function (msg) {
        return;
    };
    WindowMock.prototype.confirm = function (msg) {
        return;
    };
    return WindowMock;
}());
exports.WindowMock = WindowMock;
var WindowMockFrench = (function (_super) {
    __extends(WindowMockFrench, _super);
    function WindowMockFrench() {
        var _this = _super.call(this) || this;
        _this.navigator.language = 'fr-US';
        return _this;
    }
    return WindowMockFrench;
}(WindowMock));
exports.WindowMockFrench = WindowMockFrench;
var WindowMockNoLanguage = (function (_super) {
    __extends(WindowMockNoLanguage, _super);
    function WindowMockNoLanguage() {
        var _this = _super.call(this) || this;
        _this.navigator.language = undefined;
        return _this;
    }
    return WindowMockNoLanguage;
}(WindowMock));
exports.WindowMockNoLanguage = WindowMockNoLanguage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy93aW5kb3cubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBQ1MsY0FBUyxHQUFRO1lBQ3RCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFDSyxhQUFRLEdBQVEsRUFBRSxDQUFDO0lBTzVCLENBQUM7SUFOUSwwQkFBSyxHQUFaLFVBQWEsR0FBVztRQUN0QixNQUFNLENBQUM7SUFDVCxDQUFDO0lBQ00sNEJBQU8sR0FBZCxVQUFlLEdBQVc7UUFDeEIsTUFBTSxDQUFDO0lBQ1QsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxnQ0FBVTtBQWN2QjtJQUFzQyxvQ0FBVTtJQUM5QztRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQURDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzs7SUFDcEMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTHFDLFVBQVUsR0FLL0M7QUFMWSw0Q0FBZ0I7QUFPN0I7SUFBMEMsd0NBQVU7SUFDbEQ7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7O0lBQ3RDLENBQUM7SUFDSCwyQkFBQztBQUFELENBTEEsQUFLQyxDQUx5QyxVQUFVLEdBS25EO0FBTFksb0RBQW9CIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy93aW5kb3cubW9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBXaW5kb3dNb2NrIHtcbiAgcHVibGljIG5hdmlnYXRvcjogYW55ID0ge1xuICAgIGxhbmd1YWdlOiAnZW4tVVMnLFxuICAgIHVzZXJBZ2VudDogJ3Rlc3RpbmcnXG4gIH07XG4gIHB1YmxpYyBsb2NhdGlvbjogYW55ID0ge307XG4gIHB1YmxpYyBhbGVydChtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuICBwdWJsaWMgY29uZmlybShtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2luZG93TW9ja0ZyZW5jaCBleHRlbmRzIFdpbmRvd01vY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmF2aWdhdG9yLmxhbmd1YWdlID0gJ2ZyLVVTJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2luZG93TW9ja05vTGFuZ3VhZ2UgZXh0ZW5kcyBXaW5kb3dNb2NrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hdmlnYXRvci5sYW5ndWFnZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19
