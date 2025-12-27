import { Component, computed, effect, inject, resource, signal } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { ApiService } from '../../services/api-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-lists',
  imports: [MatListModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './contact-lists.html',
  styleUrl: './contact-lists.css',
})
export class ContactLists {
  apiService = inject(ApiService);
  deleting = signal(false);
  loading = computed(() => this.contactReasourse.isLoading() || this.deleting());
  //contacts = signal<Contact[]>([]);

  contactReasourse = resource({
    loader: () => this.apiService.getContacts(),
  });

  async deleteContact(id: string) {
    this.deleting.set(true);
    await this.apiService.deleteContact(id);
    this.deleting.set(false);
    this.contactReasourse.reload();
  }
  snakbar = inject(MatSnackBar);

  showError = effect(() => {
    const error = this.contactReasourse.error() as Error;

    if (error) {
      this.snakbar.open(error.message, 'Close', {});
    }
  });
}
