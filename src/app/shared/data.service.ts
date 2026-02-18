import { Injectable, signal, computed } from '@angular/core';

export interface UserForm {
  name: string;
  age: number;
  email: string;
  favoriteColor: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Osnoven state - moze da se pishe i chete ot vsichki komponenti
  private readonly userData = signal<UserForm | null>(null);

  readonly currentUser = computed(() => this.userData());

  setUser(data: UserForm) {
    this.userData.set(data);
  }

  clearUser() {
    this.userData.set(null);
  }
  
}
