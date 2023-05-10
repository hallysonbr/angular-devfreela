import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCreateEditService } from './services/project-create-edit.service';
import { IProject } from 'src/app/shared/interfaces/IProject';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { msg } from 'src/app/shared/utils/msg';

@Component({
  selector: 'app-project-create-edit',
  templateUrl: './project-create-edit.component.html',
  styleUrls: ['./project-create-edit.component.scss']
})

export class ProjectCreateEditComponent implements OnInit {
  // Pega os parâmetros da URL
  id: string;
  // Type: 'create' | 'edit'
  screenType: 'create' | 'edit';

  constructor(private fb: FormBuilder, private router: Router, private createEditService: ProjectCreateEditService) {
   this.id = history.state.id;
   this.screenType = this.id ? 'edit' : 'create';
  }

  msg = msg;
  projectCreateEditForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    totalCost: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    if(this.projectCreateEditForm.valid) {
        //Pegar os dados do formulário
      let payload: IProject = this.projectCreateEditForm.value;
      payload.idClient = localStorage.getItem("clientId")

      if(this.screenType === 'create') {
        this.createEditService.postProject(payload).subscribe({
          next: () => {
            alert(`Projeto cadastrado com sucesso!`);
            this.router.navigateByUrl('list');
          },
          error: (error) => {
            alert('Erro no servidor!');
            console.log(error);
          }
        });
      }

      if(this.screenType === 'edit') {
        this.createEditService.putProject(payload, this.id).subscribe({
          next: () => {
            alert(`Projeto atualizado com sucesso!`);
            this.router.navigateByUrl('list');
          },
          error: (error) => {
            alert('Erro no servidor!');
            console.log(error);
          }
        });
      }
    } else {
      this.projectCreateEditForm.markAsTouched();
    }
  }

  fillInputs() {
    if(this.screenType === 'edit') {
      this.createEditService.getProject(this.id).subscribe({
        next: (project) => {
          this.projectCreateEditForm.patchValue({
            title: project.title,
            totalCost: project.totalCost,
            description: project.description
          });
        },
        error: (error) => {
          alert('Erro no servidor!');
          console.log(error);
        },
      });
    }
  }

  title: string = '';
  actionButtonText: string = '';
  setScreenTypeTexts() {
    //  MODO CRIAR
    if(this.screenType == 'create') {
      this.title = "Vamos cadastrar seu novo projeto!";
      this.actionButtonText = "Cadastrar";
   }

   // MODO EDITAR
   if(this.screenType == 'edit') {
     this.title = "Editar projeto";
     this.actionButtonText = "Salvar";
   }
 }

 isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.projectCreateEditForm.get(inputName);
    if(formControl.errors !== null) {
      return formControl.errors[validatorName] && formControl.touched;
    }
  }
}
