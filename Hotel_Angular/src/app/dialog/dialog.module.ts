import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    DialogRoutingModule,
    FormsModule,
    ReactiveFormsModule,MatFormFieldModule,
    MatDialogModule,MatInputModule,
    MatDatepickerModule,MatNativeDateModule,MatSelectModule
  ]
})
export class DialogModule { }
