import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SelectorGenderComponent } from "../selector-gender/selector-gender.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SelectorGenderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
