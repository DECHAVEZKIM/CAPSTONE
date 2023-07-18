import { FormBuilder, FormGroup } from "@angular/forms";
import { ResidentPageForm } from "./resident.page.form";

describe('ResidentPageForm', () => {
    
    let residentPageForm: ResidentPageForm;
    let form: FormGroup;

    beforeEach(() => {
        residentPageForm = new ResidentPageForm(new FormBuilder());
        form = residentPageForm.getForm();
    })

    it ('should empty name be invalid', () => {
        expect(form.get('name').valid).toBeFalsy();
    })

    it ('should empty name be invalid', () => {
        expect(form.get('email').valid).toBeFalsy();
    })

    it ('should empty name be invalid', () => {
        expect(form.get('password').valid).toBeFalsy();
    })

    it('should invalid email be invalid', () =>{
        form.get('email').setValue('invalidEmail');

        expect(form.get('email').valid).toBeFalsy();
    })

    it('should password less than 7 characters be invalid', () =>{
        form.get('password').setValue('12345');

        expect(form.get('email').valid).toBeFalsy();
    })

    it('should password password different from repeat password be invalid', () =>{
        form.get('password').setValue('anyPassword');
        form.get('repeatPassword').setValue('anotherPassword');

        expect(form.get('repeatPassword').valid).toBeFalsy();
    })

    it('should form be valid', () => {
        form.get('name').setValue("anyName");
        form.get('email').setValue("any@email.com");
        form.get('password').setValue("anyPassword");
        form.get('repeatPassword').setValue("anyPassword");

        expect(form.valid).toBeTruthy();
    })

})