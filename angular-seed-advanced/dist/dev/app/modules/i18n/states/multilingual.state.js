"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = {
    lang: 'en'
};
function getLang(state$) {
    return state$.select(function (state) { return state.lang; });
}
exports.getLang = getLang;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vc3RhdGVzL211bHRpbGluZ3VhbC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1hLFFBQUEsWUFBWSxHQUF1QjtJQUM5QyxJQUFJLEVBQUUsSUFBSTtDQUNYLENBQUM7QUFFRixpQkFBd0IsTUFBc0M7SUFDNUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFGRCwwQkFFQyIsImZpbGUiOiJhcHAvbW9kdWxlcy9pMThuL3N0YXRlcy9tdWx0aWxpbmd1YWwuc3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTXVsdGlsaW5ndWFsU3RhdGUge1xuICBsYW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IElNdWx0aWxpbmd1YWxTdGF0ZSA9IHtcbiAgbGFuZzogJ2VuJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmcoc3RhdGUkOiBPYnNlcnZhYmxlPElNdWx0aWxpbmd1YWxTdGF0ZT4pIHtcbiAgcmV0dXJuIHN0YXRlJC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubGFuZyk7XG59XG4iXX0=