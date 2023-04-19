//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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

  cadastrar() {
    //Verifica se alguma role está checada
    if(this.roleIsChecked() === false) {
      Swal.fire(
        'Algo deu errado...',
        'Marque alguma role!',
        'error'
      )
      return;
    }

    //Pegar os dados do formulário
    let payLoad = {
      role: document.getElementsByName("cargo")[0].checked === true ? 'Dev' : 'Cliente',
      fullName: document.querySelector("#fullName").value,
      birthDate: document.querySelector("#birthDate").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value
    }

    //Enviar para a api
    fetch("https://637c0ed76f4024eac21d48b8.mockapi.io/api/users", {
      method: 'POST',
      body: JSON.stringify(payLoad),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
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
          window.location.href = "list.html";
        }
      })
    })
    .catch(error => {
      alert('Erro no servidor!');
      console.log(error);
    })
  }
}
