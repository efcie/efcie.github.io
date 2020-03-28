import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { NavModuleRoutingModule } from './nav-module-routing.module';
import { ZMatMenuComponent } from './z-mat-menu/z-mat-menu.component';
let NavModuleModule = class NavModuleModule {
};
NavModuleModule = __decorate([
    NgModule({
        declarations: [ZMatMenuComponent],
        imports: [
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule,
            AppRoutingModule,
            MatToolbarModule,
            MatSidenavModule,
            MatListModule,
            MatButtonModule,
            MatIconModule,
            NavModuleRoutingModule
        ]
    })
], NavModuleModule);
export { NavModuleModule };
//# sourceMappingURL=nav-module.module.js.map