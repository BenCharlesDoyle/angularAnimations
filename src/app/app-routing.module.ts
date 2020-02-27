import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftPageComponent } from './left-page/left-page.component';
import { RightPageComponent } from './right-page/right-page.component';
import { MiddlePageComponent } from './middle-page/middle-page.component';

const routes: Routes = [
  { path: 'left', component: LeftPageComponent, data: { animation: 'isLeft' } },
  { path: 'right', component: RightPageComponent, data: { animation: 'isRight' } },
  { path: 'middle', component: MiddlePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
