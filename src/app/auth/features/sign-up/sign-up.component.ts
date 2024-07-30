import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../data-access/auth.service';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styles: ``
})
export default class SignUpComponent {

  private authservice = inject(AuthService);
  private fb = inject(FormBuilder);

  form = this.fb.group<LoginForm>({
    email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
    password: this.fb.nonNullable.control('', Validators.required),
  })

  submit(){
    if(this.form.invalid) return;

    const {email, password} = this.form.getRawValue();

    this.authservice.signUp(email, password)
      .subscribe({
        next: response => console.log(response),
        error: error => console.log(error),


      })

  }

}
