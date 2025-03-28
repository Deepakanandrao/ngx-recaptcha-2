import { LayoutModule } from "@angular/cdk/layout";
import { NgModule, inject, provideAppInitializer } from "@angular/core";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ConfigService } from "../examples/config.service";

import { DemoWrapperComponent, NAV_LINKS } from "./demo-wrapper.component";
import { navLinks } from "./demo-wrapper.data.auto-gen";
import { DemoWrapperRoutingModule } from "./demo-wrapper-routing.module";

function appLoadFactory(config: ConfigService): Promise<void> {
  return config.loadConfig();
}

@NgModule({
  bootstrap: [DemoWrapperComponent],
  declarations: [DemoWrapperComponent],
  exports: [DemoWrapperComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatRadioModule,
    LayoutModule,
    DemoWrapperRoutingModule,
  ],
  providers: [
    { provide: NAV_LINKS, useValue: navLinks },
    provideAppInitializer(() => appLoadFactory(inject(ConfigService))),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class DemoWrapperModule {}
