import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Espacios } from 'src/app/interfaces/espacios';
import { CapacidadFisicaService } from 'src/app/services/capacidad-fisica.service';


@Component({
  selector: 'app-capacidad-fisica',
  templateUrl: './capacidad-fisica.component.html',
  styleUrls: ['./capacidad-fisica.component.css']
})
export class CapacidadFisicaComponent implements OnInit {

   listEspacios: Espacios[] = [];

  displayedColumns =
  ['acciones','espacio', 'descripcion', 'tipoEspacio', 'edificio', 'piso', 'tipoPuesto', 'capacidad', 'estado', ];
  dataSource!: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private _CapacidadFisicaService: CapacidadFisicaService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarEspacios();
  }

  cargarEspacios(){
    this.listEspacios = this._CapacidadFisicaService.getEspacio();
    this.dataSource = new MatTableDataSource(this.listEspacios)
  }

  eliminarEspacio(index: number){
    console.log(index);

    this._CapacidadFisicaService.eliminarEspacio(index);
    this.cargarEspacios();

    this._snackBar.open('Espacio eliminado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
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

