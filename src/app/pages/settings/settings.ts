import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <h2>Настройки</h2>

    @if (user(); as u) {
      <p>Здравей, {{u.name}} ({{u.age}} г.)</p>
    } @else {
      <p>Няма данни от предишна страница</p>
    }

    <label>
      Любим цвят:
      <select [(ngModel)]="color">
        <option>Червен</option>
        <option>Син</option>
        <option>Зелен</option>
        <option>Жълт</option>
      </select>
    </label>

    <br/><br/>
    <button (click)="saveAndShowResult()">Покажи резултат</button>
    <br/>
    <a routerLink="/result">Директно към резултат</a>
  `
})
export class Settings {
  private data = inject(DataService);
  private router = inject(Router);

  user = this.data.currentUser;
  color = '';

  saveAndShowResult() {
    const current = this.user();
    if (current) {
      this.data.setUser({ ...current, favoriteColor: this.color });
    }
    this.router.navigate(['/result']);
  }
}
