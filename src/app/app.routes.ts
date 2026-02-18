import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { Settings } from './pages/settings/settings';
import { Result } from './pages/result/result';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },

  // Пример с route param :id
  { path: 'profile/:id', component: Profile },

  // Пример с query параметри + service
  { path: 'settings', component: Settings },

  // Където показваме събраните данни
  { path: 'result', component: Result },

  { path: '**', redirectTo: 'home' }
];

