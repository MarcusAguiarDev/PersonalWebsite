import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from './utilities/material-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialImportsModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialImportsModule
  ]
})
export class SharedModule { }
