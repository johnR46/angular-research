import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { metaReducers, ROOT_REDUCERS } from 'src/app/core/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoEagerModule } from './demo-eager/demo-eager.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { DateAdapterModule } from '@core/date-adapter';
import { RoutingDialogModule } from '@shared/dialogs/routing-dialog/routing-dialog.module';
import { HelloDialogModule } from './hello-dialog/hello-dialog.module';
import { FcModule } from './prove-eager-instance-module/fc/fc.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoEagerModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
     DateAdapterModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    // layout
    HttpClientModule,
    RoutingDialogModule,

    // provider
    HelloDialogModule,


    // prove-eager-instance-module
    FcModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
