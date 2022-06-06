import { Component } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  formGroup = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    holidaysPerYear: [0, Validators.required],
    birthday: [null, Validators.required],
    terms: [false],
  });

  constructor(private fb: NonNullableFormBuilder) {
  }
}
