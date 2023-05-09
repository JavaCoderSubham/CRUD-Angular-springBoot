import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationService {

  url:string = 'http://localhost:8080/employee'

  constructor(private http:HttpClient) { }

  getAll():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url+"/getAll");
  }

  getById(id:string):Observable<Employee> {
    return this.http.get<Employee>(this.url+`/getById/${id}`);
  }

  create(emp:Employee):Observable<Employee> {
    return this.http.post<Employee>(this.url+`/create`,emp);
  }

  deleteById(id:string) {
    return this.http.delete(this.url + `/deleteById/${id}`)
  }

  update(id:string, emp:Employee) {
    return this.http.put(this.url + `/update/${id}`,emp);
  }

}




