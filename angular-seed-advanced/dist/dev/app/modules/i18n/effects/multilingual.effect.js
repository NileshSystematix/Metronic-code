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
var effects_1 = require("@ngrx/effects");
var lodash_1 = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var multilingual_service_1 = require("../services/multilingual.service");
var multilingual = require("../actions/multilingual.action");
var MultilingualEffects = (function () {
    function MultilingualEffects(store, actions$, multilangService, languages) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.multilangService = multilangService;
        this.languages = languages;
        this.change$ = this.actions$
            .ofType(multilingual.ActionTypes.CHANGE)
            .map(function (action) {
            var lang = action.payload;
            if (lodash_1.includes(lodash_1.map(_this.languages, 'code'), lang)) {
                var langChangedAction = new multilingual.LangChangedAction(lang);
                _this.multilangService.track(langChangedAction.type, { label: langChangedAction.payload });
                return new multilingual.LangChangedAction(lang);
            }
            else {
                return new multilingual.LangUnsupportedAction(lang);
            }
        });
    }
    return MultilingualEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], MultilingualEffects.prototype, "change$", void 0);
MultilingualEffects = __decorate([
    core_1.Injectable(),
    __param(3, core_1.Inject(multilingual_service_1.Languages)),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        multilingual_service_1.MultilingualService, Object])
], MultilingualEffects);
exports.MultilingualEffects = MultilingualEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vZWZmZWN0cy9tdWx0aWxpbmd1YWwuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQW1EO0FBR25ELHFDQUE0QztBQUM1Qyx5Q0FBZ0Q7QUFDaEQsaUNBQXVDO0FBQ3ZDLDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFHL0IseUVBQWtGO0FBQ2xGLDZEQUErRDtBQUcvRCxJQUFhLG1CQUFtQjtJQWtCOUIsNkJBQ1UsS0FBaUIsRUFDakIsUUFBaUIsRUFDakIsZ0JBQXFDLEVBQ2xCLFNBQVM7UUFKdEMsaUJBS0s7UUFKSyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFBO1FBcEI1QixZQUFPLEdBQXVCLElBQUksQ0FBQyxRQUFRO2FBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUN2QyxHQUFHLENBQUMsVUFBQSxNQUFNO1lBQ1QsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxpQkFBUSxDQUFDLFlBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFakUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFFMUYsTUFBTSxDQUFDLElBQUksWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFFTixNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBT0QsQ0FBQztJQUNQLDBCQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXRCVztJQUFULGdCQUFNLEVBQUU7OEJBQVUsdUJBQVU7b0RBY3hCO0FBaEJNLG1CQUFtQjtJQUQvQixpQkFBVSxFQUFFO0lBdUJSLFdBQUEsYUFBTSxDQUFDLGdDQUFTLENBQUMsQ0FBQTtxQ0FISCxhQUFLO1FBQ0YsaUJBQU87UUFDQywwQ0FBbUI7R0FyQnBDLG1CQUFtQixDQXdCL0I7QUF4Qlksa0RBQW1CIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2kxOG4vZWZmZWN0cy9tdWx0aWxpbmd1YWwuZWZmZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGxpYnNcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGluY2x1ZGVzLCBtYXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgTXVsdGlsaW5ndWFsU2VydmljZSwgTGFuZ3VhZ2VzIH0gZnJvbSAnLi4vc2VydmljZXMvbXVsdGlsaW5ndWFsLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgbXVsdGlsaW5ndWFsIGZyb20gJy4uL2FjdGlvbnMvbXVsdGlsaW5ndWFsLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aWxpbmd1YWxFZmZlY3RzIHtcblxuICBARWZmZWN0KCkgY2hhbmdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJFxuICAgIC5vZlR5cGUobXVsdGlsaW5ndWFsLkFjdGlvblR5cGVzLkNIQU5HRSlcbiAgICAubWFwKGFjdGlvbiA9PiB7XG4gICAgICBsZXQgbGFuZyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKGluY2x1ZGVzKG1hcCh0aGlzLmxhbmd1YWdlcywgJ2NvZGUnKSwgbGFuZykpIHtcbiAgICAgICAgbGV0IGxhbmdDaGFuZ2VkQWN0aW9uID0gbmV3IG11bHRpbGluZ3VhbC5MYW5nQ2hhbmdlZEFjdGlvbihsYW5nKTtcbiAgICAgICAgLy8gdHJhY2sgYW5hbHl0aWNzXG4gICAgICAgIHRoaXMubXVsdGlsYW5nU2VydmljZS50cmFjayhsYW5nQ2hhbmdlZEFjdGlvbi50eXBlLCB7IGxhYmVsOiBsYW5nQ2hhbmdlZEFjdGlvbi5wYXlsb2FkIH0pO1xuICAgICAgICAvLyBjaGFuZ2Ugc3RhdGVcbiAgICAgICAgcmV0dXJuIG5ldyBtdWx0aWxpbmd1YWwuTGFuZ0NoYW5nZWRBY3Rpb24obGFuZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIChoZXJlIGZvciBleGFtcGxlKVxuICAgICAgICByZXR1cm4gbmV3IG11bHRpbGluZ3VhbC5MYW5nVW5zdXBwb3J0ZWRBY3Rpb24obGFuZyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgbXVsdGlsYW5nU2VydmljZTogTXVsdGlsaW5ndWFsU2VydmljZSxcbiAgICBASW5qZWN0KExhbmd1YWdlcykgcHJpdmF0ZSBsYW5ndWFnZXNcbiAgKSB7IH1cbn1cbiJdfQ==
