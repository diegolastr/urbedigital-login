import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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



@Component({
  selector: 'app-capacidad-fisica',
  templateUrl: './capacidad-fisica.component.html',
  styleUrls: ['./capacidad-fisica.component.css']
})
export class CapacidadFisicaComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {espacio: 'Hydrogen',descripcion: '', tipoEspacio: 'a', edificio: 'H', piso:'', tipoPuesto:'', capacidad:'', estado:''},
    {espacio: 'Hydrogen',descripcion: '', tipoEspacio: 'a', edificio: 'H', piso:'', tipoPuesto:'', capacidad:'', estado:''},
  ];

  displayedColumns =
  ['espacio', 'descripcion', 'tipoEspacio', 'edificio', 'piso', 'tipoPuesto', 'capacidad', 'estado', 'acciones'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

