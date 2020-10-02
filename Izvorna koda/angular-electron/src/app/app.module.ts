import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RondelicaComponent } from './rondelica/rondelica.component';
import { RondelicaFormComponent } from './rondelica/rondelica-form/rondelica-form.component';
import { RondelicaListComponent } from './rondelica/rondelica-list/rondelica-list.component';
import { RondelicaDetailComponent } from './rondelica/rondelica-detail/rondelica-detail.component';
import { RondelicaItemsServiceProxy } from './services/api.client.generated';
import { RondelicaIzrisComponent } from './rondelica/rondelica-izris/rondelica-izris.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RondelicaComponent,
    RondelicaFormComponent,
    RondelicaListComponent,
    RondelicaDetailComponent,
    RondelicaIzrisComponent,
    ErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RondelicaItemsServiceProxy],
  bootstrap: [AppComponent]
})
export class AppModule {}
