import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";
import { NavbarModule } from "./navigation/navbar.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule,
    NavbarModule,
    MatCardModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
