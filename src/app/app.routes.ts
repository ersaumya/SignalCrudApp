import { Routes } from '@angular/router';
import { ContactLists } from './components/contact-lists/contact-lists';
import { AddContact } from './components/add-contact/add-contact';
import { EditContact } from './components/edit-contact/edit-contact';

export const routes: Routes = [
  {
    path: '',
    component: ContactLists,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddContact,
  },
  {
    path: 'edit/:id',
    component: EditContact,
  },
];
