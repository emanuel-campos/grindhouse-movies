import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { TitleSectionComponent } from './shared/title-section/title-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ExplorarComponent,
    TitleSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
