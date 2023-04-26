import { Component, OnInit } from '@angular/core';
import { IListItem } from './interfaces/IListItem';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: IListItem[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.listService.getProjects().subscribe({
      next: (response: IListItem[]) => {
        this.list = response;
        this.buildTable();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  buildTable() {
    // document.querySelector('#table-body').innerHTML = "";
    const idClient = localStorage.getItem("clientId");

    this.list = this.list.filter(el => el.idClient === idClient)

    this.list.forEach(element => {
      let template = `<div class="row">
                      <div class="title-description">
                        <h6 class="title">${element.title}</h6>
                        <p class="description">${element.description}</p>
                      </div>
                      <div class="price">R$ ${element.totalCost}</div>
                      <div class="actions">
                        <span class="edit material-icons" onclick="goToEdit(${element.id})">edit</span>
                        <span class="delete material-icons" onclick="deleteProject(${element.id})">delete_outlined</span>
                      </div>
                    </div>`;

      // document.querySelector('#table-body').insertAdjacentHTML("beforeend", template);
    });
  }
}
