import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';

import { NoticesRoutingModule } from './notices-routing.module';
import { NoticesListComponent } from './notices-list/notices-list.component';
import { NoticesComponent } from './notices/notices.component';
import { EvidencesComponent } from './evidences/evidences.component';
import { EvidencesDetailsComponent } from './evidences-details/evidences-details.component';


@NgModule({
  declarations: [
    NoticesListComponent,
    NoticesComponent,
    EvidencesComponent,
    EvidencesDetailsComponent
  ],
  imports: [
    CommonModule,
    NoticesRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatRadioModule,
    MatTableModule,
    MatTooltipModule,
  ]
})
export class NoticesModule { }
