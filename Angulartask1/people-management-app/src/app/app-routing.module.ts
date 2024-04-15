import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';


const routes: Routes = [
  // Define your routes here
  { path: 'people', component: PeopleListComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'delete/:id', component: DeletePersonComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
