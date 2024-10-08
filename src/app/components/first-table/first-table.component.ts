import { Component, OnInit } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import { BySchoolCourses } from '../first-form/first-form.component';


@Component({
  selector: 'app-first-table',
  templateUrl: './first-table.component.html',
  styleUrls: ['./first-table.component.css'],
})
export class FirstTableComponent implements OnInit{
  
  ngOnInit(): void {
  }
  dataSource: BySchoolCourses[] = [
  ];
  receiveSubmission(singleRow: BySchoolCourses){
    const rowExists = this.dataSource.some(row => 
      row.school === singleRow.school && 
      row.requirement === singleRow.requirement && 
      row.name === singleRow.name
    );

    if (!rowExists) {
      this.dataSource = [...this.dataSource, singleRow];
    }
    //this.dataSource = [...this.dataSource, singleRow];
  }
  displayedColumns: string[] = ['school', 'requirement', 'name'];
}
