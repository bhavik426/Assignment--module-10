import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  { path: 'html', loadChildren: () => import('./html/html.module').then(m => m.HtmlModule) },
  { path: 'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule) },
  { path: 'javascript', loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule) },
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
