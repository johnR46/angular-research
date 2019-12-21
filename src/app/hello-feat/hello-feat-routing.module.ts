import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaFormSearchPageComponent } from './containers/ma-form-search-page.component';
import { MaFormPageComponent } from './containers/ma-form-page.component';
import { MaFormItemPageComponent } from './containers/ma-form-item-page.component';
import { MaFormAddItemComponent } from './components/ma-form-add-item/ma-form-add-item.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Ma form Search'
    },
    component: MaFormSearchPageComponent
  },
  {
    path: 'create',
    data: {
      title: 'Ma form Create'
    },
    component: MaFormPageComponent
  },
  {
    path: 'update',
    data: {
      title: 'Ma form update'
    },
    component: MaFormPageComponent
  },
  {
    path: 'view',
    data: {
      title: 'Ma form view'
    },
    component: MaFormPageComponent
  },
  {
    path: 'item',
    data: {
      title: 'Ma form view'
    },
    component: MaFormItemPageComponent,
    children: [
      {
        path: 'add',
        data: {
          title: 'ma form add item '
        },
        component: MaFormAddItemComponent
      },
      {
        path: 'update',
        data: {
          title: 'ma form add item '
        },
        component: MaFormAddItemComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloFeatRoutingModule {}
