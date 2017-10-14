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
var store_1 = require("@ngrx/store");
var index_1 = require("../../core/index");
var index_2 = require("../../electron/index");
var multilingual = require("../actions/index");
var index_3 = require("../services/index");
var LangSwitcherComponent = (function () {
    function LangSwitcherComponent(store, log, languages, viewHelper) {
        var _this = this;
        this.store = store;
        this.log = log;
        this.languages = languages;
        this.viewHelper = viewHelper;
        store.take(1).subscribe(function (s) {
            _this.lang = s && s.i18n ? s.i18n.lang : '';
        });
        if (index_1.Config.IS_DESKTOP()) {
            index_2.ElectronEventService.on('changeLang').subscribe(function (e) {
                _this.changeLang({ target: { value: e.detail.value } });
            });
        }
    }
    LangSwitcherComponent.prototype.changeLang = function (e) {
        var lang = this.supportedLanguages[0].code;
        if (index_1.Config.IS_MOBILE_NATIVE()) {
            if (e) {
                lang = this.supportedLanguages[e.newIndex].code;
            }
        }
        else if (e && e.target) {
            lang = e.target.value;
        }
        this.log.debug("Language change: " + lang);
        this.store.dispatch(new multilingual.ChangeAction(lang));
    };
    LangSwitcherComponent.prototype.ngOnInit = function () {
        this.supportedLanguages = this.languages;
        if (index_1.Config.IS_MOBILE_NATIVE() && this.viewHelper) {
            this.supportedLanguages = this.viewHelper;
        }
    };
    return LangSwitcherComponent;
}());
LangSwitcherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lang-switcher',
        templateUrl: 'lang-switcher.component.html',
        styleUrls: ['lang-switcher.component.css'],
    }),
    __param(2, core_1.Inject(index_3.Languages)),
    __param(3, core_1.Inject(index_3.LanguageViewHelper)),
    __metadata("design:paramtypes", [store_1.Store,
        index_1.LogService, Object, Object])
], LangSwitcherComponent);
exports.LangSwitcherComponent = LangSwitcherComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vY29tcG9uZW50cy9sYW5nLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHNDQUFrRDtBQUNsRCxxQ0FBb0M7QUFHcEMsMENBQTZEO0FBRTdELDhDQUE0RDtBQUM1RCwrQ0FBaUQ7QUFDakQsMkNBQXVGO0FBUXZGLElBQWEscUJBQXFCO0lBS2hDLCtCQUNVLEtBQXVCLEVBQ3ZCLEdBQWUsRUFDSSxTQUFTLEVBQ0EsVUFBVTtRQUpoRCxpQkFpQkM7UUFoQlMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNJLGNBQVMsR0FBVCxTQUFTLENBQUE7UUFDQSxlQUFVLEdBQVYsVUFBVSxDQUFBO1FBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBTTtZQUU3QixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLGNBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFeEIsNEJBQW9CLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU07Z0JBQ3JELEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxDQUFNO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUzQyxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQW9CLElBQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsY0FBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFHakQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDNUMsQ0FBQztJQUNILENBQUM7SUFDSCw0QkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1kscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUMzQyxDQUFDO0lBU0csV0FBQSxhQUFNLENBQUMsaUJBQVMsQ0FBQyxDQUFBO0lBQ2pCLFdBQUEsYUFBTSxDQUFDLDBCQUFrQixDQUFDLENBQUE7cUNBSFosYUFBSztRQUNQLGtCQUFVO0dBUGQscUJBQXFCLENBOENqQztBQTlDWSxzREFBcUIiLCJmaWxlIjoiYXBwL21vZHVsZXMvaTE4bi9jb21wb25lbnRzL2xhbmctc3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG4vLyBhcHBcbmltcG9ydCB7IENvbmZpZywgSUxhbmcsIExvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2luZGV4JztcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gJy4uLy4uL25ncngvaW5kZXgnO1xuaW1wb3J0IHsgRWxlY3Ryb25FdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9lbGVjdHJvbi9pbmRleCc7XG5pbXBvcnQgKiBhcyBtdWx0aWxpbmd1YWwgZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aWxpbmd1YWxTZXJ2aWNlLCBMYW5ndWFnZXMsIExhbmd1YWdlVmlld0hlbHBlciB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbGFuZy1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlVXJsOiAnbGFuZy1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsYW5nLXN3aXRjaGVyLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ1N3aXRjaGVyQ29tcG9uZW50IHtcblxuICBwdWJsaWMgbGFuZzogc3RyaW5nO1xuICBwdWJsaWMgc3VwcG9ydGVkTGFuZ3VhZ2VzOiBBcnJheTxJTGFuZz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8SUFwcFN0YXRlPixcbiAgICBwcml2YXRlIGxvZzogTG9nU2VydmljZSxcbiAgICBASW5qZWN0KExhbmd1YWdlcykgcHJpdmF0ZSBsYW5ndWFnZXMsXG4gICAgQEluamVjdChMYW5ndWFnZVZpZXdIZWxwZXIpIHByaXZhdGUgdmlld0hlbHBlclxuICApIHtcbiAgICBzdG9yZS50YWtlKDEpLnN1YnNjcmliZSgoczogYW55KSA9PiB7XG4gICAgICAvLyBzICYmIHMuMThuIC0gZW5zdXJlcyB0ZXN0aW5nIHdvcmtzIGluIGFsbCBjYXNlcyAoc2luY2Ugc29tZSB0ZXN0cyBkb250IHVzZSBpMThuIHN0YXRlKVxuICAgICAgdGhpcy5sYW5nID0gcyAmJiBzLmkxOG4gPyBzLmkxOG4ubGFuZyA6ICcnO1xuICAgIH0pO1xuXG4gICAgaWYgKENvbmZpZy5JU19ERVNLVE9QKCkpIHtcbiAgICAgIC8vIGFsbG93IGVsZWN0cm9uIG1lbnUgdG8gdGFsayB0byBjb21wb25lbnRcbiAgICAgIEVsZWN0cm9uRXZlbnRTZXJ2aWNlLm9uKCdjaGFuZ2VMYW5nJykuc3Vic2NyaWJlKChlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYW5nKHsgdGFyZ2V0OiB7IHZhbHVlOiBlLmRldGFpbC52YWx1ZSB9IH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTGFuZyhlOiBhbnkpIHtcbiAgICBsZXQgbGFuZyA9IHRoaXMuc3VwcG9ydGVkTGFuZ3VhZ2VzWzBdLmNvZGU7IC8vIGZhbGxiYWNrIHRvIGRlZmF1bHQgJ2VuJ1xuXG4gICAgaWYgKENvbmZpZy5JU19NT0JJTEVfTkFUSVZFKCkpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGxhbmcgPSB0aGlzLnN1cHBvcnRlZExhbmd1YWdlc1tlLm5ld0luZGV4XS5jb2RlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZSAmJiBlLnRhcmdldCkge1xuICAgICAgbGFuZyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmxvZy5kZWJ1ZyhgTGFuZ3VhZ2UgY2hhbmdlOiAke2xhbmd9YCk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbXVsdGlsaW5ndWFsLkNoYW5nZUFjdGlvbihsYW5nKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1cHBvcnRlZExhbmd1YWdlcyA9IHRoaXMubGFuZ3VhZ2VzO1xuICAgIGlmIChDb25maWcuSVNfTU9CSUxFX05BVElWRSgpICYmIHRoaXMudmlld0hlbHBlcikge1xuICAgICAgLy8ge059IDMuMCByZXF1aXJlcyBTZWdtZW50ZWRCYXJJdGVtIGNsYXNzIGZvciBpdGVtc1xuICAgICAgLy8gd2hlbiBiaW5kaW5nIHRvIFNlZ21lbnRlZEJhclxuICAgICAgdGhpcy5zdXBwb3J0ZWRMYW5ndWFnZXMgPSB0aGlzLnZpZXdIZWxwZXI7XG4gICAgfVxuICB9XG59XG4iXX0=
