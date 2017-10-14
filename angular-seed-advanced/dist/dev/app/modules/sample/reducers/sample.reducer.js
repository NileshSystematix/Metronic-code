"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../states/index");
var index_2 = require("../actions/index");
function reducer(state, action) {
    if (state === void 0) { state = index_1.sampleInitialState; }
    switch (action.type) {
        case index_2.NameList.ActionTypes.INITIALIZED:
            return Object.assign({}, state, {
                names: action.payload
            });
        case index_2.NameList.ActionTypes.NAME_ADDED:
            return Object.assign({}, state, {
                names: state.names.concat([action.payload])
            });
        default:
            return state;
    }
}
exports.reducer = reducer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3NhbXBsZS9yZWR1Y2Vycy9zYW1wbGUucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFtRTtBQUNuRSwwQ0FBNEM7QUFFNUMsaUJBQ0UsS0FBd0MsRUFJeEMsTUFBd0I7SUFKeEIsc0JBQUEsRUFBQSxRQUFzQiwwQkFBa0I7SUFNeEMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXO1lBQ25DLE1BQU0sQ0FBTyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTzthQUN0QixDQUFDLENBQUM7UUFFTCxLQUFLLGdCQUFRLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDbEMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckMsS0FBSyxFQUFNLEtBQUssQ0FBQyxLQUFLLFNBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQzthQUN4QyxDQUFDLENBQUM7UUFFTDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFyQkQsMEJBcUJDIiwiZmlsZSI6ImFwcC9tb2R1bGVzL3NhbXBsZS9yZWR1Y2Vycy9zYW1wbGUucmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTYW1wbGVTdGF0ZSwgc2FtcGxlSW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2luZGV4JztcbmltcG9ydCB7IE5hbWVMaXN0IH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZTogSVNhbXBsZVN0YXRlID0gc2FtcGxlSW5pdGlhbFN0YXRlLFxuICAvLyBjb3VsZCBzdXBwb3J0IG11bHRpcGxlIHN0YXRlIGFjdGlvbnMgdmlhIHVuaW9uIHR5cGUgaGVyZVxuICAvLyBpZTogTmFtZUxpc3QuQWN0aW9ucyB8IE90aGVyLkFjdGlvbnNcbiAgLy8gdGhlIHNlZWQncyBleGFtcGxlIGp1c3QgaGFzIG9uZSBzZXQgb2YgYWN0aW9uczogTmFtZUxpc3QuQWN0aW9uc1xuICBhY3Rpb246IE5hbWVMaXN0LkFjdGlvbnNcbik6IElTYW1wbGVTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIE5hbWVMaXN0LkFjdGlvblR5cGVzLklOSVRJQUxJWkVEOlxuICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuYW1lczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBOYW1lTGlzdC5BY3Rpb25UeXBlcy5OQU1FX0FEREVEOlxuICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuYW1lczogWy4uLnN0YXRlLm5hbWVzLCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19
