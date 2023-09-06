import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { department } from '../department';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DepartmentsListComponent implements OnInit, OnChanges, DoCheck {
  ngDoCheck(): void {
    console.log("on change is called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  @Input() departmentList: department[] = [];

  @Input() title:string='';

  @Output() selectedDepartment = new EventEmitter<department>();

  ngOnInit(): void {

  }

  selectDepartment(department: department) {
    this.selectedDepartment.emit(department);
  }
}
