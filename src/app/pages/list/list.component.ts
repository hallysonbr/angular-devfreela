import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { IProject } from 'src/app/shared/interfaces/IProject';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: IProject[] = [];
  isLoadedTable: boolean = false;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.listService.getProjects().subscribe({
      next: (response: IProject[]) => {
        this.list.push(...response);
        this.buildTable();
        this.isLoadedTable = true;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  buildTable() {
    const idClient = localStorage.getItem("clientId");
    this.list = this.list.filter(el => el.idClient === idClient);
  }

  goToEdit(id: string) {
    window.location.href = `project-create-edit.html?id=${id}`
  }

  deleteProject(id: string) {
    this.listService.deleteProject(id ?? '').subscribe({
      next: (response) => {
        this.list = this.list.filter(project => project.id != id);
        this.buildTable();
      },
      error: (error) => {
        alert('Erro no servidor!');
        console.log(error);
      }
    });
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  redirectToWithParams(url: string, id: string) {
    const dataParams: NavigationBehaviorOptions = {
       state: {
        id: id
       }
    }
    this.router.navigate([url], dataParams);
  }
}
