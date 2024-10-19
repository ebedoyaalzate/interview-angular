import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModuleForChild } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModuleForChild],
  exports: [DashboardComponent],
})
export class DashboardModule {}
