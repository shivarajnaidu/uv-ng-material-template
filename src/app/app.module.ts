import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMatComponentsModule } from './app-mat-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarTopComponent } from './navbar/navbar-top/navbar-top.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarTopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppMatComponentsModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
