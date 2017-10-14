"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var auth_routing_routing_1 = require("./auth-routing.routing");
var auth_component_1 = require("./auth.component");
var alert_component_1 = require("./_directives/alert.component");
var logout_component_1 = require("./logout/logout.component");
var auth_guard_1 = require("./_guards/auth.guard");
var alert_service_1 = require("./_services/alert.service");
var authentication_service_1 = require("./_services/authentication.service");
var user_service_1 = require("./_services/user.service");
var index_1 = require("./_helpers/index");
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        declarations: [
            auth_component_1.AuthComponent,
            alert_component_1.AlertComponent,
            logout_component_1.LogoutComponent,
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            auth_routing_routing_1.AuthRoutingModule,
        ],
        providers: [
            auth_guard_1.AuthGuard,
            alert_service_1.AlertService,
            authentication_service_1.AuthenticationService,
            user_service_1.UserService,
            index_1.fakeBackendProvider,
            testing_1.MockBackend,
            http_1.BaseRequestOptions,
        ],
        entryComponents: [alert_component_1.AlertComponent]
    })
], AuthModule);
exports.AuthModule = AuthModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2F1dGgvYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsMENBQTZDO0FBQzdDLHdDQUEyQztBQUMzQyxzQ0FBNkQ7QUFDN0QsaURBQWtEO0FBRWxELCtEQUF5RDtBQUN6RCxtREFBK0M7QUFDL0MsaUVBQTZEO0FBQzdELDhEQUEwRDtBQUMxRCxtREFBK0M7QUFDL0MsMkRBQXVEO0FBQ3ZELDZFQUF5RTtBQUN6RSx5REFBcUQ7QUFDckQsMENBQXFEO0FBMkJyRCxJQUFhLFVBQVU7SUFBdkI7SUFDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFVBQVU7SUF6QnRCLGVBQVEsQ0FBQztRQUNULFlBQVksRUFBRTtZQUNiLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCxrQ0FBZTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ1IscUJBQVk7WUFDWixtQkFBVztZQUNYLGlCQUFVO1lBQ1Ysd0NBQWlCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Ysc0JBQVM7WUFDVCw0QkFBWTtZQUNaLDhDQUFxQjtZQUNyQiwwQkFBVztZQUVYLDJCQUFtQjtZQUNuQixxQkFBVztZQUNYLHlCQUFrQjtTQUNsQjtRQUNELGVBQWUsRUFBRSxDQUFDLGdDQUFjLENBQUM7S0FDakMsQ0FBQztHQUVXLFVBQVUsQ0FDdEI7QUFEWSxnQ0FBVSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hdXRoL2F1dGgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7QmFzZVJlcXVlc3RPcHRpb25zLCBIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge01vY2tCYWNrZW5kfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cC90ZXN0aW5nXCI7XHJcblxyXG5pbXBvcnQge0F1dGhSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hdXRoLXJvdXRpbmcucm91dGluZ1wiO1xyXG5pbXBvcnQge0F1dGhDb21wb25lbnR9IGZyb20gXCIuL2F1dGguY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QWxlcnRDb21wb25lbnR9IGZyb20gXCIuL19kaXJlY3RpdmVzL2FsZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvZ291dENvbXBvbmVudH0gZnJvbSBcIi4vbG9nb3V0L2xvZ291dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuL19ndWFyZHMvYXV0aC5ndWFyZFwiO1xyXG5pbXBvcnQge0FsZXJ0U2VydmljZX0gZnJvbSBcIi4vX3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gXCIuL19zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL19zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtmYWtlQmFja2VuZFByb3ZpZGVyfSBmcm9tIFwiLi9faGVscGVycy9pbmRleFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEF1dGhDb21wb25lbnQsXHJcblx0XHRBbGVydENvbXBvbmVudCxcclxuXHRcdExvZ291dENvbXBvbmVudCxcclxuXHRdLFxyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cE1vZHVsZSxcclxuXHRcdEF1dGhSb3V0aW5nTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRBdXRoR3VhcmQsXHJcblx0XHRBbGVydFNlcnZpY2UsXHJcblx0XHRBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcblx0XHRVc2VyU2VydmljZSxcclxuXHRcdC8vIGFwaSBiYWNrZW5kIHNpbXVsYXRpb25cclxuXHRcdGZha2VCYWNrZW5kUHJvdmlkZXIsXHJcblx0XHRNb2NrQmFja2VuZCxcclxuXHRcdEJhc2VSZXF1ZXN0T3B0aW9ucyxcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW0FsZXJ0Q29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge1xyXG59Il19
