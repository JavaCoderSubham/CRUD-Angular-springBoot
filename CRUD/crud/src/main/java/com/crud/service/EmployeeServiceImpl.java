package com.crud.service;

import com.crud.entity.Employee;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private static List<Employee> list = new ArrayList<>();

    static {
        list.add(new Employee(UUID.randomUUID().toString(),"Subham","978465132","Kharagpur"));
        list.add(new Employee(UUID.randomUUID().toString(),"Gupta","89746132","Kolkata"));
        list.add(new Employee(UUID.randomUUID().toString(),"Subham Kr Gupta","9698654132","Hyderabad"));
        list.add(new Employee(UUID.randomUUID().toString(),"Hello Subham","32158944651","Delhi"));
        System.out.println("Static Block ================== > "+list);
    }


    @Override
    public List<Employee> getAll() {
        System.out.println(list);
        return list;
    }

    @Override
    public Employee getById(String id) {
        Optional<Employee> employee = list.stream().filter(l -> l.getId().equals(id)).findFirst();
        return employee.orElseThrow(() -> new RuntimeException("Employee ID Not Present"));
    }

    @Override
    public Employee create(Employee employee) {
        list.add(employee);
        return employee;
    }

    @Override
    public Employee update(String id, Employee employee) {
        Employee emp = null;
        for(int i =0; i<list.size(); i++) {
            if(list.get(i).getId().equals(id)) {
                list.get(i).setName(employee.getName());
                list.get(i).setMobileNumber(employee.getMobileNumber());
                list.get(i).setAddress(employee.getAddress());
                emp = list.get(i);
            }
        }
        return emp;
    }

    @Override
    public void deleteById(String id) {

        for(int i =0; i<list.size(); i++) {
            Employee emp  = list.get(i);
            if(emp.getId().equals(id)) {
                list.remove(i);
            }
        }
    }
}
