import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MODULES = [
  MatTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class MaterialModule { }
