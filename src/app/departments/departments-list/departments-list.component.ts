import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { department } from '../department';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export default class DepartmentsListComponent implements OnInit{

  @Input() departmentList : department[] = [];

  @Output() selectedDepartment = new EventEmitter<department>(); 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectDepartment(department : department){
    this.selectedDepartment.emit(department);
  }
}
