import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/icharacter.interfaces';
import { firstValueFrom } from 'rxjs';

type Response = {
  info: any
  results: ICharacter[]
}

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private endpoint: string = 'https://rickandmortyapi.com/api/character';
  private httpClient = inject(HttpClient);

  /* metodo de consulta a la api*/


  getAll(url: string): Promise<Response> {
    let endpoint = url === "" ? this.endpoint : url;
    return firstValueFrom(this.httpClient.get<Response>(endpoint))
  }

  getById(id: number): Promise<ICharacter> {
    return firstValueFrom(this.httpClient.get<ICharacter>(`${this.endpoint}/${id}`))
  }

  filter(busqueda: any): Promise<Response> {
    return firstValueFrom(this.httpClient.get<Response>(`${this.endpoint}/?name=${busqueda.name}&status=${busqueda.status}`))
  }

  filterByGender(gender: string): Promise<Response> {
    return firstValueFrom(this.httpClient.get<Response>(`${this.endpoint}/?gender=${gender}`))
  }

}
