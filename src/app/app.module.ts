import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BikeService } from './services/bike.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
