import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RemoteEntryComponent} from './remote-entry/remote-entry.component';
export const routes: Routes = [
  {
    path: '',
    component: RemoteEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RemoteEntryComponent],
})
export class RemoteEntryModule {}