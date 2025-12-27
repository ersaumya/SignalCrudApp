import { Component, inject, resource, signal } from '@angular/core';
import { Contact } from '../../models/contact';
import { MatListModule } from '@angular/material/list';
import { ApiService } from '../../services/api-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contact-lists',
  imports: [MatListModule, MatProgressSpinnerModule],
  templateUrl: './contact-lists.html',
  styleUrl: './contact-lists.css',
})
export class ContactLists {
  apiService = inject(ApiService);
  //contacts = signal<Contact[]>([]);

  contactReasourse = resource({
    loader: () => this.apiService.getContacts(),
  });
}
