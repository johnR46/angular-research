import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FcComponent } from './prove-eager-instance-module/fc/fc.component';

const routes: Routes = [
  {
    path: 'demo-eager',
    data: {
      title: 'Demo eager'
    },
    loadChildren: () =>
      import('./demo-eager/demo-eager.module').then(m => m.DemoEagerModule)
  },

  {
    path: 'demo-eager',
    outlet: 'demo-eager',
    data: {
      title: 'Demo eager'
    },
    loadChildren: () =>
      import('./demo-eager/demo-eager.module').then(m => m.DemoEagerModule)
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
    path: 'hello-feat',
    outlet: 'hello-feat',
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
  },
  {
    path: 'demo-service',
    data: {
      title: 'Demo-Service'
    },
    outlet: 'demo-service',
    loadChildren: () =>
      import('./demo-instance-srv/demo-instance-srv.module').then(
        m => m.DemoInstanceSrvModule
      )
  },

  {
    path: 'hello-mat',
    data: {
      title: 'hello-mat'
    },
    loadChildren: () =>
      import('./hello-mat/hello-mat.module').then(m => m.HelloMatModule)
  },
  {
    path: 'hello-mat',
    data: {
      title: 'hello-mat'
    },
    outlet: 'hello-mat',
    loadChildren: () =>
      import('./hello-mat/hello-mat.module').then(m => m.HelloMatModule)
  },
  {
    path: 'hello-provider',
    data: {
      title: 'Prove Type of Provider'
    },
    loadChildren: () =>
      import('./hello-provider/hello-provider.module').then(
        m => m.HelloProviderModule
      )
  },
  {
    path: '',
    component: FcComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
