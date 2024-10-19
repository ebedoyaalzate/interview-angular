import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModuleForChild } from './setting-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, RouterModuleForChild],
  exports: [SettingsComponent]
})
export class SettingsModule {}
