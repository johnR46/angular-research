import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloProviderRoutingModule } from './hello-provider-routing.module';
import { FormPageComponent } from './containers/form-page/form-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { UserService } from './containers/service/user.service';

@NgModule({
  declarations: [FormPageComponent],
  imports: [
    CommonModule,
    HelloProviderRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [UserService]
})
export class HelloProviderModule {}
