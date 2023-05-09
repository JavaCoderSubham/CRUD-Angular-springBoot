package com.crud.controller;

import com.crud.entity.Employee;
import com.crud.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @GetMapping("/getAll")
    public List<Employee> getAll() {
        List<Employee> all = service.getAll();
        System.out.println(all);
        return all;
    }

    @GetMapping("/getById/{id}")
    public Employee getById(@PathVariable String id) {
        return service.getById(id);
    }

    @PostMapping("/create")
    public Employee create(@RequestBody Employee employee) {
        employee.setId(UUID.randomUUID().toString());
        return service.create(employee);
    }

    @PutMapping("/update/{id}")
    public Employee update(@RequestBody Employee employee, @PathVariable String id) {
        return service.update(id,employee);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable String id) {
        service.deleteById(id);
    }

}
