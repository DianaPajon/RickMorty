import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickmortyModule } from './rickmorty/rickmorty.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RickmortyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
