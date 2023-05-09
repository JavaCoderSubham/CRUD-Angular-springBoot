import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: DataComponent
  },
  {
    path: 'delete-message',
    component: DeleteMessageComponent
  },
  {
    path: 'get',
    component: GetEmployeeComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
