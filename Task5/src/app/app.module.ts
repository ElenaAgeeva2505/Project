import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TabGroupAlignExampleComponent } from './tab-group-align-example/tab-group-align-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TabGroupAlignExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
