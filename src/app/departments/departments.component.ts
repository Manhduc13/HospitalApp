import { Component, OnInit } from '@angular/core';
import { department } from './department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  numberOfDepartments!: any;
  hideDepartment!: any;
  hideListView!: any;
  hideTableView!: any;
  departmentList: department[] = [];
  selectedDepartment!: department;
  title:string = '12345';
  constructor() { }

  ngOnInit(): void {

    this.numberOfDepartments = 10;
    this.hideDepartment = false;
    this.hideListView = true;
    this.hideTableView = false;
    this.departmentList = [
      { id: 12345, name: "Khoa hồi sức", numberOfEmployee: 10, checkedIn: new Date('24-Aug-2023'), checkedOut: new Date('28-Aug-2023') },
      { id: 23456, name: "Khoa nhi", numberOfEmployee: 10, checkedIn: new Date('24-Aug-2023'), checkedOut: new Date('28-Aug-2023') },
      { id: 34567, name: "Khoa cấp cứu", numberOfEmployee: 10, checkedIn: new Date('24-Aug-2023'), checkedOut: new Date('28-Aug-2023') },
      { id: 34558, name: "Khoa ngoại", numberOfEmployee: 10, checkedIn: new Date('24-Aug-2023'), checkedOut: new Date('28-Aug-2023') },
      { id: 14567, name: "Khoa da liễu", numberOfEmployee: 10, checkedIn: new Date('24-Aug-2023'), checkedOut: new Date('28-Aug-2023') }
    ]
  }

  toggle() {
    this.hideDepartment = !this.hideDepartment;
    this.title = "123456";
  }

  switch() {
    this.hideListView = !this.hideListView;
    this.hideTableView = !this.hideTableView;
  }

  selectDepartment(department: department) {
    this.selectedDepartment = department;
    console.log(department);
  }

  addDepartment() {
    const department: department = {
      id: 37529,
      name: "Khoa nhi",
      numberOfEmployee: 10,
      checkedIn: new Date('24-Aug-2023'),
      checkedOut: new Date('28-Aug-2023')
    }
    //this.departmentList.push(department);
    this.departmentList = [...this.departmentList,department];
  }
}
