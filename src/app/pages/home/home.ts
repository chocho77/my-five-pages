import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService, UserForm } from '../../shared/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <h2>Начало – Въведи данни</h2>

    <form #f="ngForm" (ngSubmit)="saveAndGo()">
      <input name="name"    [(ngModel)]="form.name"    placeholder="Име" required />
      <input name="age"     [(ngModel)]="form.age"     type="number" placeholder="Години" />
      <input name="email"   [(ngModel)]="form.email"   type="email" placeholder="Email" />

      <button type="submit" [disabled]="!f.valid">Запази и продължи →</button>
    </form>

    <p>Или директно: <a routerLink="/settings">към настройки</a></p>
  `
})
export class Home {
  private data = inject(DataService);

  form: UserForm = { name: '', age: 0, email: '', favoriteColor: '' };

  saveAndGo() {
    this.data.setUser(this.form);
    // Можеш и да пуснеш query params ако искаш
    // this.router.navigate(['/result'], { queryParams: { from: 'home' } });
  }
}