import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../model/character';
import { RickmortyRestService } from '../rickmorty-rest.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{
  
  character:Character|undefined;
  constructor(private route:ActivatedRoute, private restApi:RickmortyRestService){

  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.restApi.findCharacter(id).then((character) => this.character =character);
  }
}
