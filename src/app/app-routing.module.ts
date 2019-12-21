import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo-eager',
    data: {
      title: 'Demo eager'
    },
    loadChildren: () => import('./demo-eager/demo-eager.module')
  },
  {
    path: 'hello-feat',
    data: {
      title: 'Hello Feat'
    },
    loadChildren: () =>
      import('./hello-feat/hello-feat.module').then(m => m.HelloFeatModule)
  },
  {
    path: 'demo-service',
    data: {
      title: 'Demo-Service'
    },
    loadChildren: () =>
      import('./demo-instance-srv/demo-instance-srv.module').then(
        m => m.DemoInstanceSrvModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
