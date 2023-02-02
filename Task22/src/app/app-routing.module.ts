import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FetchingResolver } from './fetching.resolver';
import { ResolveComponent } from './resolve/resolve.component';

const routes: Routes = [
  {
    path:'',
    component:ResolveComponent,
    resolve:[FetchingResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


