import { Component, inject } from '@angular/core';
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import { CharactersService } from '../../services/characters.service';
import { ICharacter } from '../../interfaces/icharacter.interfaces';
import { BusquedaComponent } from "../../components/busqueda/busqueda.component";
import { ActivatedRoute } from '@angular/router';


type Response = {
  info: any
  results: ICharacter[]
}

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharacterCardComponent, BusquedaComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {
  //traigo los datos del servicio
  charactersService = inject(CharactersService)
  activatedRoute = inject(ActivatedRoute);
  arrCharacters: ICharacter[] = [];
  urlNext: string = "";
  urlPrev: string = "";

  //cuando se llena el array, cuando carguemos el componente ngOnInit
  ngOnInit(): void {
    //si recibo ruta activa carga por genero y si no cargo todo los personajes
    this.activatedRoute.params.subscribe(async (params: any) => {
      if (params.gender) {
        //cargamos por genero
        let response: Response = await this.charactersService.filterByGender(params.gender)
        this.urlNext = response.info.next;
        this.urlPrev = response.info.prev;
        this.arrCharacters = response.results;
      } else {
        this.chargeData();
      }
    })

  }

  async nextPage() {
    //engachas otras cosas asociadas al evento

    this.chargeData(this.urlNext)
  }

  async prevPage() {
    this.chargeData(this.urlPrev)
  }

  async chargeData(url: string = "") {
    console.log(url)
    try {
      let response: Response = await this.charactersService.getAll(url)
      this.urlNext = response.info.next;
      this.urlPrev = response.info.prev;
      this.arrCharacters = response.results;
    } catch (err) {
      console.log(err)
    }
  }

  async buscar($event: any) {
    try {
      let response: Response = await this.charactersService.filter($event)
      this.urlNext = response.info.next;
      this.urlPrev = response.info.prev;
      this.arrCharacters = response.results;
      console.log(response.info)
    } catch (err) {
      console.log(err)
    }
  }

}
