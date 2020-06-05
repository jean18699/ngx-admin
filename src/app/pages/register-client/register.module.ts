import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbInputModule, NbRadioModule, NbCheckboxModule, NbSelectModule
} from '@nebular/theme';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonModule,
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbRadioModule,
    NbCheckboxModule,
    NbSelectModule,
  ]
})
export class RegisterModule {
}
