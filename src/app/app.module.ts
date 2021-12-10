import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiodataComponent } from './biodata/biodata.component';
import { BiopicComponent } from './biopic/biopic.component';
import { CustomerComponent } from './customer/customer.component';
import { FoxComponent } from './fox/fox.component';

@NgModule({
  declarations: [
    AppComponent,
    BiodataComponent,
    CustomerComponent,
    FoxComponent,
    BiopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
