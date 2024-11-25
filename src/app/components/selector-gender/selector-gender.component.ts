import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selector-gender',
  standalone: true,
  imports: [],
  templateUrl: './selector-gender.component.html',
  styleUrl: './selector-gender.component.css'
})
export class SelectorGenderComponent {
  router = inject(Router);

  getGender(event: Event) {
    let selector = event.target as HTMLSelectElement
    let gender = selector.value;
    //capturar el valor de la ruta y conformar la ruta para hacer un router.navigate(url)
    if (gender !== "") {
      this.router.navigate(['/search', gender])
    } else {
      this.router.navigate(['/characters'])
    }
    //cuando quiero hacer una redireccion despues de por ejemplo recoger un valor de un evento o formulario uso router que es un injectable
  }

  /*   cargaNombre(event: Event) {
      let input = event.target as HTMLInputElement;
      let name = input.value;
      console.log(name)
    } */

}
