import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  users: any[] = [];

  constructor(public userDataService: UserDataService, private toastController: ToastController) {}

  ngOnInit() {
    this.users = this.userDataService.users;
  }

  async acceptUser(index: number) {
    // Implement acceptUser logic here if needed
    // For example, you can show a toast notification
    const toast = await this.toastController.create({
      message: 'User submission accepted!',
      duration: 2000,
      color: 'success',
    });
    await toast.present();

    // Then remove the user submission from the array
    this.userDataService.deleteUser(index);
  }

  async deleteUser(index: number) {
    // Implement delete logic here
    // For example, you can show a toast notification
    const toast = await this.toastController.create({
      message: 'User data deleted!',
      duration: 2000,
      color: 'danger',
    });
    await toast.present();

    // Then remove the user data from the array
    this.userDataService.deleteUser(index);
  }
}
