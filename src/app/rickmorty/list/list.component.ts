import { Component, OnInit } from '@angular/core';
import { RickmortyRestService } from '../rickmorty-rest.service';
import { ApiResponse } from '../model/api-response';
import { Character } from '../model/character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  searchBar:string="";
  
  characters:Character[] = [];
  nextPage:string="";
  prevPage:string="";

  processResponse = (response:ApiResponse<Character>) => {
    this.characters = response.results;
    this.nextPage = response.info.next;
    this.prevPage = response.info.prev;
  }

  processError = (error:any) => {
    console.log(error)
    this.characters = [];
    this.nextPage = "";
    this.prevPage = "";
  }

  constructor(private service:RickmortyRestService){

  }

  filterResults(){
    console.log("Change! + " + this.searchBar)
    this.service.findByName(this.searchBar).then(this.processResponse,this.processError);
  }

  ngOnInit(): void {
    this.service.findAllCharacters().then(this.processResponse,this.processError);
  }

  loadNext():void{
    if(this.nextPage){
      this.service.getListPage(this.nextPage).then(this.processResponse,this.processError);
    }
  }

  loadPrev():void{
    if(this.prevPage){
      this.service.getListPage(this.prevPage).then(this.processResponse,this.processError);
    }
  }

}
