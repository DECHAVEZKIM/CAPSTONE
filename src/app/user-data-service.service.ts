import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private readonly STORAGE_KEY = 'userSubmissions';
  users: any[] = [];

  constructor() {
    this.loadUserSubmissions();
  }

  addUser(userData: any) {
    this.users.push(userData);
    this.saveUserSubmissions();
  }

  deleteUser(index: number) {
    if (index >= 0 && index < this.users.length) {
      // Remove the user data from the array
      this.users.splice(index, 1);
      this.saveUserSubmissions(); // Update the local storage after deletion
    }
  }

  private loadUserSubmissions() {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (storedData) {
      this.users = JSON.parse(storedData);
    }
  }

  private saveUserSubmissions() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.users));
  }
}