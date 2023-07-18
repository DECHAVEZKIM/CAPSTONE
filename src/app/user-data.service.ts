import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData: any[] = [];

  constructor() { }

  // Method to add user data to the array
  addUser(user: any) {
    this.userData.push(user);
  }

  // Method to get all user data
  getUsers() {
    return this.userData;
  }

  // Method to delete user data by index
  deleteUser(index: number) {
    this.userData.splice(index, 1);
  }
}