import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from './model/character';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs';
import { ApiResponse } from './model/api-response';

@Injectable({
  providedIn: 'root'
})
export class RickmortyRestService {

  readonly apiUrl:string = environment.apiUrl;
  readonly characterEndpoint:string = this.apiUrl + "/character"

  constructor(private httpClient:HttpClient) {

  }

  public async findAllCharacters():Promise<ApiResponse<Character>>{
    return firstValueFrom(this.httpClient.get<ApiResponse<Character>>(this.characterEndpoint));
  }

  public async getListPage(pageUrl:string):Promise<ApiResponse<Character>>{
    return firstValueFrom(this.httpClient.get<ApiResponse<Character>>(pageUrl));
  }

  public async findByName(name:string):Promise<ApiResponse<Character>>{
    return firstValueFrom(this.httpClient.get<ApiResponse<Character>>(this.characterEndpoint + "/?name=" + name));
  }

  public async findCharacter(id:number):Promise<Character>{
    return firstValueFrom(this.httpClient.get<Character>(this.characterEndpoint + "/" + id));
  }
}
