import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  },

];
export const RouterModuleForChild = RouterModule.forChild(routes);
