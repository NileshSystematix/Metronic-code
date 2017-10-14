"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var default_component_1 = require("../pages/default/default.component");
var aside_nav_component_1 = require("./aside-nav/aside-nav.component");
var header_nav_component_1 = require("./header-nav/header-nav.component");
var aside_left_display_disabled_component_1 = require("../pages/aside-left-display-disabled/aside-left-display-disabled.component");
var footer_component_1 = require("./footer/footer.component");
var quick_sidebar_component_1 = require("./quick-sidebar/quick-sidebar.component");
var scroll_top_component_1 = require("./scroll-top/scroll-top.component");
var tooltips_component_1 = require("./tooltips/tooltips.component");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var href_prevent_default_directive_1 = require("../../_directives/href-prevent-default.directive");
var unwrap_tag_directive_1 = require("../../_directives/unwrap-tag.directive");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        declarations: [
            default_component_1.DefaultComponent,
            aside_nav_component_1.AsideNavComponent,
            header_nav_component_1.HeaderNavComponent,
            aside_left_display_disabled_component_1.AsideLeftDisplayDisabledComponent,
            footer_component_1.FooterComponent,
            quick_sidebar_component_1.QuickSidebarComponent,
            scroll_top_component_1.ScrollTopComponent,
            tooltips_component_1.TooltipsComponent,
            href_prevent_default_directive_1.HrefPreventDefaultDirective,
            unwrap_tag_directive_1.UnwrapTagDirective,
        ],
        exports: [
            default_component_1.DefaultComponent,
            aside_nav_component_1.AsideNavComponent,
            header_nav_component_1.HeaderNavComponent,
            aside_left_display_disabled_component_1.AsideLeftDisplayDisabledComponent,
            footer_component_1.FooterComponent,
            quick_sidebar_component_1.QuickSidebarComponent,
            scroll_top_component_1.ScrollTopComponent,
            tooltips_component_1.TooltipsComponent,
            href_prevent_default_directive_1.HrefPreventDefaultDirective,
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
        ]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RoZW1lL2xheW91dHMvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF1QztBQUN2Qyx3RUFBc0U7QUFDdEUsdUVBQW9FO0FBQ3BFLDBFQUF1RTtBQUN2RSxvSUFBK0g7QUFDL0gsOERBQTREO0FBQzVELG1GQUFnRjtBQUNoRiwwRUFBdUU7QUFDdkUsb0VBQWtFO0FBQ2xFLDBDQUE2QztBQUM3QywwQ0FBNkM7QUFDN0MsbUdBQTZGO0FBQzdGLCtFQUEwRTtBQStCMUUsSUFBYSxZQUFZO0lBQXpCO0lBQ0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxZQUFZO0lBN0J4QixlQUFRLENBQUM7UUFDVCxZQUFZLEVBQUU7WUFDZixvQ0FBZ0I7WUFDaEIsdUNBQWlCO1lBQ2pCLHlDQUFrQjtZQUNsQix5RUFBaUM7WUFDakMsa0NBQWU7WUFDZiwrQ0FBcUI7WUFDckIseUNBQWtCO1lBQ2xCLHNDQUFpQjtZQUNmLDREQUEyQjtZQUMzQix5Q0FBa0I7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDVixvQ0FBZ0I7WUFDaEIsdUNBQWlCO1lBQ2pCLHlDQUFrQjtZQUNsQix5RUFBaUM7WUFDakMsa0NBQWU7WUFDZiwrQ0FBcUI7WUFDckIseUNBQWtCO1lBQ2xCLHNDQUFpQjtZQUNmLDREQUEyQjtTQUMzQjtRQUNELE9BQU8sRUFBRTtZQUNSLHFCQUFZO1lBQ1oscUJBQVk7U0FDWjtLQUNELENBQUM7R0FDVyxZQUFZLENBQ3hCO0FBRFksb0NBQVkiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdGhlbWUvbGF5b3V0cy9sYXlvdXQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuLi9wYWdlcy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IEFzaWRlTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9hc2lkZS1uYXYvYXNpZGUtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJOYXZDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXNpZGVMZWZ0RGlzcGxheURpc2FibGVkQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZXMvYXNpZGUtbGVmdC1kaXNwbGF5LWRpc2FibGVkL2FzaWRlLWxlZnQtZGlzcGxheS1kaXNhYmxlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBRdWlja1NpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3F1aWNrLXNpZGViYXIvcXVpY2stc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsVG9wQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2x0aXBzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwcy90b29sdGlwcy5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0hyZWZQcmV2ZW50RGVmYXVsdERpcmVjdGl2ZX0gZnJvbSAnLi4vLi4vX2RpcmVjdGl2ZXMvaHJlZi1wcmV2ZW50LWRlZmF1bHQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtVbndyYXBUYWdEaXJlY3RpdmV9IGZyb20gJy4uLy4uL19kaXJlY3RpdmVzL3Vud3JhcC10YWcuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcbkRlZmF1bHRDb21wb25lbnQsXG5Bc2lkZU5hdkNvbXBvbmVudCxcbkhlYWRlck5hdkNvbXBvbmVudCxcbkFzaWRlTGVmdERpc3BsYXlEaXNhYmxlZENvbXBvbmVudCxcbkZvb3RlckNvbXBvbmVudCxcblF1aWNrU2lkZWJhckNvbXBvbmVudCxcblNjcm9sbFRvcENvbXBvbmVudCxcblRvb2x0aXBzQ29tcG9uZW50LFxuXHRcdEhyZWZQcmV2ZW50RGVmYXVsdERpcmVjdGl2ZSxcclxuXHRcdFVud3JhcFRhZ0RpcmVjdGl2ZSxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuRGVmYXVsdENvbXBvbmVudCxcbkFzaWRlTmF2Q29tcG9uZW50LFxuSGVhZGVyTmF2Q29tcG9uZW50LFxuQXNpZGVMZWZ0RGlzcGxheURpc2FibGVkQ29tcG9uZW50LFxuRm9vdGVyQ29tcG9uZW50LFxuUXVpY2tTaWRlYmFyQ29tcG9uZW50LFxuU2Nyb2xsVG9wQ29tcG9uZW50LFxuVG9vbHRpcHNDb21wb25lbnQsXG5cdFx0SHJlZlByZXZlbnREZWZhdWx0RGlyZWN0aXZlLFxyXG5cdF0sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7XHJcbn0iXX0=
