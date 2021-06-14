import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders, HttpResponse } from '@angular/common/http';

//modulos
import { CapacidadFisicaRoutingModule } from './capacidad-fisica-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CapacidadFisicaComponent } from './capacidad-fisica.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { EditarEspacioComponent } from './editar-espacio/editar-espacio.component';
import { AgregarEspacioComponent } from './agregar-espacio/agregar-espacio.component';


@NgModule({
  declarations: [
    CapacidadFisicaComponent,
    NavbarComponent,
    FooterComponent,
    EditarEspacioComponent,
    AgregarEspacioComponent
  ],
  imports: [
    CommonModule,
    CapacidadFisicaRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule
    
  ]
})
export class CapacidadFisicaModule { }
