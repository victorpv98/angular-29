import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaComponent } from './vista/vista.component';
import { AgregarComponent } from './agregar/agregar.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    VistaComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    FormsModule
  ],
  exports:[
    VistaComponent,
    AgregarComponent
  ]
})
export class ComponentsModule { }
