import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee.model';
import { CrudOperationService } from 'src/service/crud-operation.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent {
  id: string = '';
  employee: Employee;

  constructor(private route:ActivatedRoute,private router:Router,private service: CrudOperationService) {
    this.employee = new Employee('', '', '', '');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const objemployee = JSON.parse(params['userId']);
      console.log('objemployee',objemployee);
      // console.log(myObject);
      this.id = objemployee
    })
  }

  getById() {
    this.service.getById(this.id).subscribe((data) => {
      this.employee = data;
      console.log(this.employee);
    });
  }
}
