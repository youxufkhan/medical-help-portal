import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NbListModule } from '@nebular/theme';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule, NbListModule
  ],
  declarations: [
    DashboardComponent,MainPageComponent, LoginPageComponent
  ],
})
export class DashboardModule { }
