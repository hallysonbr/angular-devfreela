//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { msg } from 'src/app/shared/utils/msg';
import { RegisterService } from './services/register.service';
import { IUser } from './interfaces/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }
  msg = msg;
  registerForm: FormGroup = this.fb.group({
    role: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  ngOnInit(): void {
  }

  roleIsChecked() {
    let list = document.getElementsByName("cargo");
    let counter = 0;

    for(let radioButton of list) {
      if(radioButton.checked === false) {
        counter++;
      }
    }

    return counter !== list.length;
  }

  toogleRole(role: 'dev'|'cliente') {
    this.registerForm.get('role')?.setValue(role)
  }

  cadastrar() {
    if (this.registerForm.valid) {
      let payload: IUser = this.registerForm.value;
      this.registerService.postUser(payload).subscribe({
        next: (response) => {
          Swal.fire({
          title: 'Bom trabalho!',
          text: 'Cadastrado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK!'
        }).then((result) => {
          if(result.isConfirmed) {
            localStorage.setItem('user.name', response.fullName);
            localStorage.setItem('role', response.role === 'Dev' ? 'Desenvolvedor' : 'Cliente');
            localStorage.setItem('clientId', response.id);
            this.router.navigateByUrl('list')
          }
        })
      },
      error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.registerForm.get(inputName);
    if(formControl.errors !== null) {
      return formControl.errors[validatorName] && formControl.touched;
    }
  }
}
