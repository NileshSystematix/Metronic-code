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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var Observable_1 = require("rxjs/Observable");
var name_list_service_1 = require("../services/name-list.service");
var index_1 = require("../actions/index");
var SampleEffects = (function () {
    function SampleEffects(store, actions$, nameListService) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.nameListService = nameListService;
        this.init$ = this.actions$
            .ofType(index_1.NameList.ActionTypes.INIT)
            .startWith(new index_1.NameList.InitAction)
            .switchMap(function () { return _this.nameListService.getNames(); })
            .map(function (payload) {
            var names = payload;
            return new index_1.NameList.InitializedAction(names);
        })
            .catch(function () { return Observable_1.Observable.of(new index_1.NameList.InitFailedAction()); });
        this.add$ = this.actions$
            .ofType(index_1.NameList.ActionTypes.ADD)
            .map(function (action) {
            var name = action.payload;
            _this.nameListService.track(index_1.NameList.ActionTypes.NAME_ADDED, { label: name });
            return new index_1.NameList.NameAddedAction(name);
        });
    }
    return SampleEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], SampleEffects.prototype, "init$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], SampleEffects.prototype, "add$", void 0);
SampleEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        name_list_service_1.NameListService])
], SampleEffects);
exports.SampleEffects = SampleEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9lZmZlY3RzL3NhbXBsZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBMkM7QUFHM0MscUNBQTRDO0FBQzVDLHlDQUFnRDtBQUNoRCw4Q0FBNkM7QUFHN0MsbUVBQWdFO0FBQ2hFLDBDQUE0QztBQUc1QyxJQUFhLGFBQWE7SUEwQnhCLHVCQUNVLEtBQWlCLEVBQ2pCLFFBQWlCLEVBQ2pCLGVBQWdDO1FBSDFDLGlCQUlLO1FBSEssVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQXZCaEMsVUFBSyxHQUF1QixJQUFJLENBQUMsUUFBUTthQUNoRCxNQUFNLENBQUMsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxJQUFJLGdCQUFRLENBQUMsVUFBVSxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBL0IsQ0FBK0IsQ0FBQzthQUNoRCxHQUFHLENBQUMsVUFBQSxPQUFPO1lBQ1YsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLGdCQUFRLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDO2FBRUQsS0FBSyxDQUFDLGNBQU0sT0FBQSx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQUM7UUFFckQsU0FBSSxHQUF1QixJQUFJLENBQUMsUUFBUTthQUMvQyxNQUFNLENBQUMsZ0JBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLE1BQU07WUFDVCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBRTFCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGdCQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxJQUFJLGdCQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBTUQsQ0FBQztJQUNQLG9CQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQXpCVztJQUFULGdCQUFNLEVBQUU7OEJBQVEsdUJBQVU7NENBU29DO0FBRXJEO0lBQVQsZ0JBQU0sRUFBRTs4QkFBTyx1QkFBVTsyQ0FPckI7QUF4Qk0sYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQTRCTSxhQUFLO1FBQ0YsaUJBQU87UUFDQSxtQ0FBZTtHQTdCL0IsYUFBYSxDQStCekI7QUEvQlksc0NBQWEiLCJmaWxlIjoiYXBwL21vZHVsZXMvc2FtcGxlL2VmZmVjdHMvc2FtcGxlLmVmZmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbGlic1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIG1vZHVsZVxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmFtZUxpc3QgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNhbXBsZUVmZmVjdHMge1xuXG4gIC8qKlxuICAgKiBUaGlzIGVmZmVjdCBtYWtlcyB1c2Ugb2YgdGhlIGBzdGFydFdpdGhgIG9wZXJhdG9yIHRvIHRyaWdnZXJcbiAgICogdGhlIGVmZmVjdCBpbW1lZGlhdGVseSBvbiBzdGFydHVwLlxuICAgKi9cbiAgQEVmZmVjdCgpIGluaXQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXG4gICAgLm9mVHlwZShOYW1lTGlzdC5BY3Rpb25UeXBlcy5JTklUKVxuICAgIC5zdGFydFdpdGgobmV3IE5hbWVMaXN0LkluaXRBY3Rpb24pXG4gICAgLnN3aXRjaE1hcCgoKSA9PiB0aGlzLm5hbWVMaXN0U2VydmljZS5nZXROYW1lcygpKVxuICAgIC5tYXAocGF5bG9hZCA9PiB7XG4gICAgICBsZXQgbmFtZXMgPSBwYXlsb2FkO1xuICAgICAgcmV0dXJuIG5ldyBOYW1lTGlzdC5Jbml0aWFsaXplZEFjdGlvbihuYW1lcyk7XG4gICAgfSlcbiAgICAvLyBub3RoaW5nIHJlYWN0aW5nIHRvIGZhaWx1cmUgYXQgbW9tZW50IGJ1dCB5b3UgY291bGQgaWYgeW91IHdhbnQgKGhlcmUgZm9yIGV4YW1wbGUpXG4gICAgLmNhdGNoKCgpID0+IE9ic2VydmFibGUub2YobmV3IE5hbWVMaXN0LkluaXRGYWlsZWRBY3Rpb24oKSkpO1xuXG4gIEBFZmZlY3QoKSBhZGQkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkXG4gICAgLm9mVHlwZShOYW1lTGlzdC5BY3Rpb25UeXBlcy5BREQpXG4gICAgLm1hcChhY3Rpb24gPT4ge1xuICAgICAgbGV0IG5hbWUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIC8vIGFuYWx5dGljc1xuICAgICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UudHJhY2soTmFtZUxpc3QuQWN0aW9uVHlwZXMuTkFNRV9BRERFRCwgeyBsYWJlbDogbmFtZSB9KTtcbiAgICAgIHJldHVybiBuZXcgTmFtZUxpc3QuTmFtZUFkZGVkQWN0aW9uKG5hbWUpO1xuICAgIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG5hbWVMaXN0U2VydmljZTogTmFtZUxpc3RTZXJ2aWNlXG4gICkgeyB9XG59XG4iXX0=
