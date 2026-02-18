import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Профил на потребител #{{ id }}</h2>
    <p>Тук можеш да четеш от ActivatedRoute или директно от input :id</p>

    <a routerLink="/home">Начало</a>
  `
})
export class Profile{
  private route = inject(ActivatedRoute);

  // Начин 1: стар, но работи
  id = this.route.snapshot.paramMap.get('id');

  // Начин 2: модерен (от v17+), с input
  // id = input<string>();   // и в routes: { path: 'profile/:id', component: ProfileComponent, data: { title: 'Профил' } }
}
