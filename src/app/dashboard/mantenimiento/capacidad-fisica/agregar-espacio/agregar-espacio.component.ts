import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Espacios } from 'src/app/interfaces/espacios';
import { CapacidadFisicaService } from 'src/app/services/capacidad-fisica.service';

@Component({
  selector: 'app-agregar-espacio',
  templateUrl: './agregar-espacio.component.html',
  styleUrls: ['./agregar-espacio.component.css']
})
export class AgregarEspacioComponent implements OnInit {

  estado: any [] = ['DISPONIBLE', 'NO DISPONIBLE']
  form: FormGroup;


  constructor( private fb: FormBuilder, 
               private _CapacidadFisicaService: CapacidadFisicaService,
               private router: Router,
               private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      espacio: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipoEspacio: ['', Validators.required],
      estado: ['', Validators.required],
      edificio: ['', Validators.required],
      piso: ['', Validators.required],
      tipoPuesto: ['', Validators.required],
      capacidad: ['', Validators.required],

    })
   }

  ngOnInit(): void {
  }

  agregarEspacio(){

      const espacio: Espacios = {
        espacio: this.form.value.espacio,
        descripcion: this.form.value.descripcion,
        tipoEspacio: this.form.value.tipoEspacio,
        estado: this.form.value.estado,
        edificio: this.form.value.edificio,
        piso: this.form.value.piso,
        tipoPuesto: this.form.value.tipoPuesto,
        capacidad: this.form.value.capacidad,

      }
      this._CapacidadFisicaService.agregarEspacio(espacio);
      this.router.navigate(['/dashboard/mantenimiento/capacidadFisica']);

      this._snackBar.open('Espacio Agregado con exito!', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
  }
}
