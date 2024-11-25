import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  searchForm: FormGroup;
  @Output() searchEmit: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.searchForm = new FormGroup({
      name: new FormControl(null, []),
      status: new FormControl("", []),
    }, [])
  }

  getSearchData() {
    //los datos de este formulario se los paso a lista de characters que es el padre de este componente OUTPUT
    this.searchEmit.emit(this.searchForm.value)
  }

}
