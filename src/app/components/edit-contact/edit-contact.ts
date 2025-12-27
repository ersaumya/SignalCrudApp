import { Component, computed, inject, input, linkedSignal, resource, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-edit-contact',
  imports: [MatFormFieldModule, MatProgressSpinner, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './edit-contact.html',
  styleUrl: './edit-contact.css',
})
export class EditContact {
  name = linkedSignal(() => this.contactResource.value()?.name ?? '');
  email = linkedSignal(() => this.contactResource.value()?.email ?? '');
  phone = linkedSignal(() => this.contactResource.value()?.phone ?? '');

  id = input.required<string>();
  apiService = inject(ApiService);
  router = inject(Router);
  saving = signal(false);
  loading = computed(() => this.contactResource.isLoading() || this.saving());

  contactResource = resource({
    params: this.id,
    loader: ({ params }) => this.apiService.getContact(params),
  });

  async save() {
    this.saving.set(true);
    await this.apiService.updateContact({
      id: this.id(),
      name: this.name(),
      email: this.email(),
      phone: this.phone(),
    });
    this.saving.set(false);
    this.router.navigate(['/']);
  }
}
