import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../model/character';
import { RickmortyRestService } from '../rickmorty-rest.service';
import { Episode } from '../model/episode';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{
  
  character:Character|undefined;
  episodes: Episode[] | undefined;
  episodePromises : Promise<Episode>[] = [];
  loading:boolean = true;
  constructor(private route:ActivatedRoute, private restApi:RickmortyRestService){

  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.restApi.findCharacter(id).then((character) => {
      this.character =character;
      console.log(this.character);
      this.fetchManyEpisodes(this.character.episode).then(
        e => {
          this.episodes = e
          this.loading = false;
        }
      )
    });
  }

  private fetchManyEpisodes(episodeList:string[]):Promise<Episode[]>{
    let promiseArray = episodeList.map(episode => this.restApi.fetchEpisode(episode));
    this.episodePromises = promiseArray;
    return Promise.all(promiseArray)
  }
}
