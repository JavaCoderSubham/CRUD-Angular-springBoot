import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/model/employee.model';
import { CrudOperationService } from 'src/service/crud-operation.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  employee: Employee[] = [];
  // @Output() editData= new EventEmitter<Employee>();

  constructor(private service:CrudOperationService, private router:Router) {
  }

  // drop(event : CdkDragDrop<Employee[]>):void {
  //   moveItemInArray(this.employee, event.previousIndex, event.currentIndex)
  // }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.employee = data;
      console.log(data)
    })
  }

  // getAll() {
  //   this.service.getAll().subscribe((data) => {
  //     this.employee = data;
  //     console.log(data)
  //   })
  // }

  update(emp:Employee) {
    const queryParams: NavigationExtras = { queryParams: { data: JSON.stringify(emp) } };
    this.router.navigate(['/update'], queryParams);
  }

  delete(id:string) {
    this.service.deleteById(id).subscribe(() => {
      this.router.navigate(['/delete-message'])
    });
  }

  totalData(id:string) {
    const queryParams: NavigationExtras = { queryParams: { userId: JSON.stringify(id) } };
    this.router.navigate(['/get'] , queryParams);
  }
}
