import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdDialogModule, MdGridListModule, MdIconModule, MdInputModule, MdOptionModule,
  MdSelectModule,
  OverlayModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdGridListModule,
    MdOptionModule,
    OverlayModule,
    MdDialogModule,
    MdCardModule,
    MdIconModule,
    MdSelectModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdGridListModule,
    MdOptionModule,
    OverlayModule,
    MdDialogModule,
    MdCardModule,
    MdIconModule,
    MdSelectModule,
  ],
  declarations: []
})
export class CustomMaterialModule { }
