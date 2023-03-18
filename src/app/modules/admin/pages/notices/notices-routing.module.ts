import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidencesDetailsComponent } from './evidences-details/evidences-details.component';
import { EvidencesComponent } from './evidences/evidences.component';

const routes: Routes = [
  {
    path: 'evidences',
    component: EvidencesComponent,
  },
  {
    path: 'evidences-details',
    component: EvidencesDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticesRoutingModule { }
