import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CursosComponent } from './cursos.component';
import { DetalheComponent } from './detalhe/detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    DetalheComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],

  exports: [
    CursosComponent
  ],
  
})
export class CursosModule { }
