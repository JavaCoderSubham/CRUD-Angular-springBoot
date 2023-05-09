package com.crud.service;

import com.crud.entity.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> getAll();
    Employee getById(String id);
    Employee create(Employee employee);
    Employee update(String id, Employee employee);
    void deleteById(String id);


}
