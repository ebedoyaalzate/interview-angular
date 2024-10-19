import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { RouterModuleForChild } from './dashboard-routing.module';
import { DynamicListComponent } from '../../components/dynamic-list/dynamic-list.component';

@NgModule({
  declarations: [DashboardComponent, DynamicListComponent],
  imports: [CommonModule, RouterModuleForChild, HttpClientModule, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
