import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MentorsComponent } from './pages/mentors/mentors.component';
import { MasterclassComponent } from './pages/masterclass/masterclass.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'mentors',
        component: MentorsComponent,
      },
      {
        path: 'masterclass',
        component: MasterclassComponent,
      },
    ],
  },
];
