import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CharacterComponent } from './character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RickmortyRestService } from './rickmorty-rest.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    RickmortyRestService
  ]
})
export class RickmortyModule { }
