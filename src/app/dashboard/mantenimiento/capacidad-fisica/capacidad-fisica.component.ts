import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  espacio: string;
  descripcion: string;
  tipoEspacio: string;
  edificio: string;
  piso: string;
  tipoPuesto: string;
  capacidad: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {espacio: 'Hydrogen',descripcion: '', tipoEspacio: 'a', edificio: 'H', piso:'', tipoPuesto:'', capacidad:'', estado:''},
  {espacio: 'Hydrogen',descripcion: '', tipoEspacio: 'a', edificio: 'H', piso:'', tipoPuesto:'', capacidad:'', estado:''},
];

@Component({
  selector: 'app-capacidad-fisica',
  templateUrl: './capacidad-fisica.component.html',
  styleUrls: ['./capacidad-fisica.component.css']
})
export class CapacidadFisicaComponent implements OnInit {
  displayedColumns =
  ['espacio', 'descripcion', 'tipoEspacio', 'edificio', 'piso', 'tipoPuesto', 'capacidad', 'estado'];
dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
