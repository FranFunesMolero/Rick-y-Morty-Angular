import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { CharacterViewComponent } from './pages/character-view/character-view.component';
import { C404Component } from './pages/c404/c404.component';

export const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: "home", component: HomeComponent },
  { path: 'characters', component: CharactersListComponent },
  { path: 'character/:idCharacter', component: CharacterViewComponent },
  { path: 'search/:gender', component: CharactersListComponent },
  { path: "**", component: C404Component }
];
