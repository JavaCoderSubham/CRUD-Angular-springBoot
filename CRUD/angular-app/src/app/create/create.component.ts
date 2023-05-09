import { Component } from '@angular/core';
import { Employee } from 'src/model/employee.model';
import { CrudOperationService } from 'src/service/crud-operation.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  emp: Employee;

  constructor(private service: CrudOperationService) {
    this.emp = new Employee('', '', '', '');
  }

  create() {
    this.service.create(this.emp).subscribe((data) => {
      this.emp = data;
      console.log(this.emp);
      this.emp.name = '';
      this.emp.mobileNumber = '';
      this.emp.address = '';
    });
  }
}
