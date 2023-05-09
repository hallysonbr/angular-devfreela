import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCreateEditService } from './services/project-create-edit.service';
import { IProject } from 'src/app/shared/interfaces/IProject';

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

  constructor(private router: Router, private createEditService: ProjectCreateEditService) {
   this.id = history.state.id;
   this.screenType = this.id ? 'edit' : 'create';
  }

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    //Pegar os dados do formulário
    let payLoad: IProject = {
      title: (document.querySelector("#title") as any).value,
      totalCost: (document.querySelector("#totalCost") as any).value,
      description: (document.querySelector("#description") as any).value,
      idClient: localStorage.getItem("clientId"),
    }

    if(this.screenType === 'create') {
      this.createEditService.postProject(payLoad).subscribe({
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
      this.createEditService.putProject(payLoad, this.id).subscribe({
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
  }

  fillInputs() {
    if(this.screenType === 'edit') {
      fetch(`https://637c0ed76f4024eac21d48b8.mockapi.io/api/projects/${this.id}`)
      .then(response => response.json())
      .then(project => {
        (document.querySelector("#title") as any).value  = project.title;
        (document.querySelector("#totalCost") as any).value  = project.totalCost;
        (document.querySelector("#description") as any).value  = project.description;
      })
      .catch(error => {
        alert('Erro no servidor!');
        console.log(error);
      })
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

}
