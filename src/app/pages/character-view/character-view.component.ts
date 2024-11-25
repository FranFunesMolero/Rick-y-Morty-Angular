import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { ICharacter } from '../../interfaces/icharacter.interfaces';

@Component({
  selector: 'app-character-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.css'
})
export class CharacterViewComponent {
  //lo primero que tiene que hacer este componente es saber el id del character.
  activatedRoute = inject(ActivatedRoute)
  charactersService = inject(CharactersService);
  oneCharacter?: ICharacter;

  ngOnInit(): void {
    //tendremos disponible la ruta asi que la podremos capturar.
    this.activatedRoute.params.subscribe(async (params: any) => {
      console.log(params)
      let id: number = Number(params.idCharacter)
      //llamar al servicio
      this.oneCharacter = await this.charactersService.getById(id)
      console.log(this.oneCharacter)
    })
  }

}
