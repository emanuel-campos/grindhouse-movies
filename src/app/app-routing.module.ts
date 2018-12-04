import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorarComponent } from './components/explorar/explorar.component';

const routes: Routes = [
 {
  path: '',
  component: ExplorarComponent
 }
]

@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class AppRoutingModule {}
