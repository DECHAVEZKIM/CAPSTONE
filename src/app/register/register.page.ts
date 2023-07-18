import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { UserDataService } from '../user-data-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userForm: FormGroup;
  isSubmitted = false;
  selectedImage: File | null = null;

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Submitted',
      duration: 2000,
      position: 'bottom',
      color: 'success' // You can customize the color here (e.g., success, danger, warning)
    });

    toast.present();
  }


  constructor(private router: Router, private formBuilder: FormBuilder, private userDataService: UserDataService, private toastController: ToastController) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      familyposition: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      birthday: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      bloodType: [''],
      Disability: [''],
      HighestEducationalAttainment: [''],
      Occupation: ['', Validators.required],
      contactNumber: ['', [Validators.required, this.philippineNumberValidator]],
      Religion: [''],
      street: ['', Validators.required],
      barangay: ['', Validators.required],
      sitio: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      houseNumber: ['', Validators.required],
      userImage: ['', Validators.required],
    }, { validator: this.matchPasswords }); 

  }


  ngOnInit() {}

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get repeatPassword() {
    return this.userForm.get('repeatPassword');
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get familyposition() {
    return this.userForm.get('familyposition');
  }

  get gender() {
    return this.userForm.get('gender');
  }

  get age() {
    return this.userForm.get('age');
  }

  get birthday() {
    return this.userForm.get('birthday');
  }

  get maritalStatus() {
    return this.userForm.get('maritalStatus');
  }

  get Occupation() {
    return this.userForm.get('Occupation');
  }

  get contactNumber() {
    return this.userForm.get('contactNumber');
  }


  get street() {
    return this.userForm.get('street');
  }

  get barangay() {
    return this.userForm.get('barangay');
  }

  get sitio() {
    return this.userForm.get('sitio');
  }

  get city() {
    return this.userForm.get('city');
  }

  get zipCode() {
    return this.userForm.get('zipCode');
  }

  get houseNumber() {
    return this.userForm.get('houseNumber');
  }

  get userImage() {
    return this.userForm.get('userImage');
  }


  matchPasswords(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;

    if (password !== repeatPassword) {
      control.get('repeatPassword')?.setErrors({ passwordMismatch: true });
      return { 'passwordMismatch': true };
    }

    control.get('repeatPassword')?.setErrors(null);
    return null;
  }

  onFormSubmit() {
    for (const field in this.userForm.controls) {
      const control = this.userForm.get(field);
      control?.markAsTouched();
    }
  
    if (this.userForm.valid) {
      this.userDataService.addUser(this.userForm.value);
      this.userForm.reset();

      this.presentToast();

    }
  }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedImage = file;
  }

  philippineNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    const phoneNumberPattern = /^09\d{9}$/; // Philippine mobile number format (starting with 09 and 11 digits)
    if (control.value && !control.value.match(phoneNumberPattern)) {
      return { 'invalidPHNumber': true };
    }
    return null;
  }

  register() {
    this.router.navigate(['home']);
  }
}
