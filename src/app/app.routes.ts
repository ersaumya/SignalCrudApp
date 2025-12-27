import { Routes } from '@angular/router';
import { ContactLists } from './components/contact-lists/contact-lists';

export const routes: Routes = [
  {
    path: '',
    component: ContactLists,
    pathMatch: 'full',
  },
];
