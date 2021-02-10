import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './model/model.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  // {path: '' , component: TableComponent},
  // {path: 'modal' , component: ModelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
