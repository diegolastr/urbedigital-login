import { Injectable } from '@angular/core';
import { Espacios } from '../interfaces/espacios';

@Injectable({
  providedIn: 'root'
})
export class CapacidadFisicaService {

  listEspacios: Espacios[] = [
    {espacio: 'A-01',descripcion: 'AULA DE CLASES', tipoEspacio: 'EXCLUSIVO', edificio: 'BLOQUE A', piso:'PLANTA BAJA', tipoPuesto:'PUPITRE', capacidad:'50 PERSONAS', estado:'DISPONIBLE'},
    {espacio: 'B-01',descripcion: 'AULA DE CLASES', tipoEspacio: 'EXCLUSIVO', edificio: 'BLOQUE B', piso:'PLANTA BAJA', tipoPuesto:'PUPITRE', capacidad:'50 PERSONAS', estado:'DISPONIBLE'},
    {espacio: 'C-01',descripcion: 'AULA DE CLASES', tipoEspacio: 'EXCLUSIVO', edificio: 'BLOQUE C', piso:'PLANTA BAJA', tipoPuesto:'PUPITRE', capacidad:'50 PERSONAS', estado:'DISPONIBLE'},
    {espacio: 'D-01',descripcion: 'AULA DE CLASES', tipoEspacio: 'EXCLUSIVO', edificio: 'BLOQUE D', piso:'PLANTA BAJA', tipoPuesto:'PUPITRE', capacidad:'50 PERSONAS', estado:'DISPONIBLE'},
    {espacio: 'E-01',descripcion: 'AULA DE CLASES', tipoEspacio: 'EXCLUSIVO', edificio: 'BLOQUE E', piso:'PLANTA BAJA', tipoPuesto:'PUPITRE', capacidad:'50 PERSONAS', estado:'DISPONIBLE'},
    {espacio: 'F-01',descripcion: 'AULA DE CLASES', tipoEspacio: 'EXCLUSIVO', edificio: 'BLOQUE F', piso:'PLANTA BAJA', tipoPuesto:'PUPITRE', capacidad:'50 PERSONAS', estado:'DISPONIBLE'}
  ];
  constructor() { }

  getEspacios(){
    return this.listEspacios.slice();
  }

}

