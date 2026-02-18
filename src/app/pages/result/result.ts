import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Резултат</h2>

    @if (user(); as u) {
      <div>
        <p>Име: <strong>{{u.name}}</strong></p>
        <p>Години: <strong>{{u.age}}</strong></p>
        <p>Email: <strong>{{u.email}}</strong></p>
        <p>Любим цвят: <strong style="color: {{u.favoriteColor?.toLowerCase()}}">{{u.favoriteColor}}</strong></p>
      </div>
    } @else {
      <p style="color: darkred">Няма запазени данни!</p>
    }

    <br/>
    <button (click)="clear()">Изчисти данните</button>
    <br/><br/>
    <a routerLink="/home">Обратно в началото</a>
  `
})
export class Result {
  private data = inject(DataService);

  user = this.data.currentUser;

  clear() {
    this.data.clearUser();
  }
}
