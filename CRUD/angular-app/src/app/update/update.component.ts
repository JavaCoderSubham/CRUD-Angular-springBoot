import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/model/employee.model';
import { CrudOperationService } from 'src/service/crud-operation.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  employee : Employee;
  constructor(private route:ActivatedRoute, private routes:Router, private service:CrudOperationService) {
    this.employee = new Employee('','','','');
  }

  ngOnInit() {
    // debugger;
 
    this.route.queryParams.subscribe(params => {
    const objemployee = JSON.parse(params['data']);
    console.log('objemployee',objemployee);
    // console.log(myObject);
    this.employee = objemployee;

    });
      

  }
  edit(){
    this.service.update(this.employee.id,this.employee).subscribe((data) => {
      console.log(data)
      this.routes.navigate(['/'])
    })
  }
}
