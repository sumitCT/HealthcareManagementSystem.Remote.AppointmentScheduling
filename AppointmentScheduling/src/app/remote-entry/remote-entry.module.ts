import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteEntryComponent } from './remote-entry.component';

const routes: Routes = [
  {
    path: '',
    component: RemoteEntryComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RemoteEntryComponent, // Import the standalone component here
  ],
  exports: [RouterModule],
})
export class RemoteEntryModule {}