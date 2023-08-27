import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './rickmorty/list/list.component';
import { CharacterComponent } from './rickmorty/character/character.component';

const routes: Routes = [
  {path:'', component:ListComponent},
  {path:'character/:id', component:CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
