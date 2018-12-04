import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { TitleSectionComponent } from './components/shared/title-section/title-section.component';
import { MovieItemComponent } from './components/movies/movie-item/movie-item.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExplorarComponent,
    TitleSectionComponent,
    MovieItemComponent,
    MovieListComponent,
    TruncatePipe
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
