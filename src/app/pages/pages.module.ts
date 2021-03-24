import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutsModule } from '../layouts/layouts.module';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    DashboardModule,
    PagesRoutingModule,
    LayoutsModule
  ]
})
export class PagesModule { }
