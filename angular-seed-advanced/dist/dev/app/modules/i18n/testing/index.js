"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@ngx-translate/core");
var index_1 = require("../services/index");
var ng2_translate_mock_1 = require("./mocks/ng2-translate.mock");
var ng2_translate_loader_mock_1 = require("./mocks/ng2-translate-loader.mock");
function TEST_MULTILINGUAL_PROVIDERS() {
    var providers = [
        { provide: core_1.TranslateLoader, useClass: ng2_translate_loader_mock_1.TranslateLoaderMock },
        { provide: core_1.TranslateService, useClass: ng2_translate_mock_1.TranslateMock },
        index_1.MultilingualService
    ];
    return providers;
}
exports.TEST_MULTILINGUAL_PROVIDERS = TEST_MULTILINGUAL_PROVIDERS;
function getLanguages() {
    return [
        { code: 'en', title: 'English' },
        { code: 'es', title: 'Spanish' },
        { code: 'fr', title: 'French' },
        { code: 'ru', title: 'Russian' },
        { code: 'bg', title: 'Bulgarian' }
    ];
}
exports.getLanguages = getLanguages;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vdGVzdGluZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUF3RTtBQUd4RSwyQ0FBd0Q7QUFHeEQsaUVBQTJEO0FBQzNELCtFQUF3RTtBQUV4RTtJQUVFLElBQUksU0FBUyxHQUFlO1FBQzFCLEVBQUUsT0FBTyxFQUFFLHNCQUFlLEVBQUUsUUFBUSxFQUFFLCtDQUFtQixFQUFFO1FBQzNELEVBQUUsT0FBTyxFQUFFLHVCQUFnQixFQUFFLFFBQVEsRUFBRSxrQ0FBYSxFQUFFO1FBQ3RELDJCQUFtQjtLQUNwQixDQUFDO0lBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBVEQsa0VBU0M7QUFFRDtJQUNFLE1BQU0sQ0FBQztRQUNMLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1FBQy9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ2hDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO0tBQ25DLENBQUM7QUFDSixDQUFDO0FBUkQsb0NBUUMiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi90ZXN0aW5nL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcblxuLy8gbW9ja3NcbmltcG9ydCB7IFRyYW5zbGF0ZU1vY2sgfSBmcm9tICcuL21vY2tzL25nMi10cmFuc2xhdGUubW9jayc7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXJNb2NrIH0gZnJvbSAnLi9tb2Nrcy9uZzItdHJhbnNsYXRlLWxvYWRlci5tb2NrJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRFU1RfTVVMVElMSU5HVUFMX1BST1ZJREVSUygpOiBBcnJheTxhbnk+IHtcblxuICBsZXQgcHJvdmlkZXJzOiBBcnJheTxhbnk+ID0gW1xuICAgIHsgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLCB1c2VDbGFzczogVHJhbnNsYXRlTG9hZGVyTW9jayB9LFxuICAgIHsgcHJvdmlkZTogVHJhbnNsYXRlU2VydmljZSwgdXNlQ2xhc3M6IFRyYW5zbGF0ZU1vY2sgfSxcbiAgICBNdWx0aWxpbmd1YWxTZXJ2aWNlXG4gIF07XG5cbiAgcmV0dXJuIHByb3ZpZGVycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmd1YWdlcygpOiBBcnJheTxhbnk+IHtcbiAgcmV0dXJuIFtcbiAgICB7IGNvZGU6ICdlbicsIHRpdGxlOiAnRW5nbGlzaCcgfSxcbiAgICB7IGNvZGU6ICdlcycsIHRpdGxlOiAnU3BhbmlzaCcgfSxcbiAgICB7IGNvZGU6ICdmcicsIHRpdGxlOiAnRnJlbmNoJyB9LFxuICAgIHsgY29kZTogJ3J1JywgdGl0bGU6ICdSdXNzaWFuJyB9LFxuICAgIHsgY29kZTogJ2JnJywgdGl0bGU6ICdCdWxnYXJpYW4nIH1cbiAgXTtcbn1cbiJdfQ==
