"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var TranslateMock = (function () {
    function TranslateMock() {
        this.onLangChange = new core_1.EventEmitter();
        this.onTranslationChange = new core_1.EventEmitter();
    }
    TranslateMock.prototype.getTranslation = function (lang) {
        return {
            'TEST': 'test'
        };
    };
    TranslateMock.prototype.use = function (lang) {
    };
    TranslateMock.prototype.get = function (key, interpolateParams) {
        return Observable_1.Observable.of(key);
    };
    TranslateMock.prototype.setDefaultLang = function (lang) {
        return;
    };
    TranslateMock.prototype.getLangs = function () {
        return ['en'];
    };
    TranslateMock.prototype.reloadLang = function (lang) {
        return Observable_1.Observable.of('en');
    };
    return TranslateMock;
}());
exports.TranslateMock = TranslateMock;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vdGVzdGluZy9tb2Nrcy9uZzItdHJhbnNsYXRlLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBNkM7QUFHN0MsOENBQTZDO0FBQzdDLGtDQUFnQztBQUVoQztJQUFBO1FBQ1MsaUJBQVksR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDckQsd0JBQW1CLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBcUJyRSxDQUFDO0lBcEJRLHNDQUFjLEdBQXJCLFVBQXNCLElBQVk7UUFDaEMsTUFBTSxDQUFDO1lBQ0wsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO0lBQ0osQ0FBQztJQUNNLDJCQUFHLEdBQVYsVUFBVyxJQUFZO0lBRXZCLENBQUM7SUFDTSwyQkFBRyxHQUFWLFVBQVcsR0FBMkIsRUFBRSxpQkFBMEI7UUFDaEUsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSxzQ0FBYyxHQUFyQixVQUFzQixJQUFZO1FBQ2hDLE1BQU0sQ0FBQztJQUNULENBQUM7SUFDTSxnQ0FBUSxHQUFmO1FBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNNLGtDQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFDNUIsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDSCxvQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2Qlksc0NBQWEiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi90ZXN0aW5nL21vY2tzL25nMi10cmFuc2xhdGUubW9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vYW5ndWxhclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZU1vY2sge1xuICBwdWJsaWMgb25MYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIG9uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ1RFU1QnOiAndGVzdCdcbiAgICB9O1xuICB9XG4gIHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XG4gICAgLy8gY29uc29sZS5sb2cobGFuZyk7XG4gIH1cbiAgcHVibGljIGdldChrZXk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihrZXkpO1xuICB9XG4gIHB1YmxpYyBzZXREZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHVibGljIGdldExhbmdzKCkge1xuICAgIHJldHVybiBbJ2VuJ107XG4gIH1cbiAgcHVibGljIHJlbG9hZExhbmcobGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZignZW4nKTtcbiAgfVxufVxuIl19
