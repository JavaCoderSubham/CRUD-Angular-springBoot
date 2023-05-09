# CRUD-Angular-springBoot

# docker compose file 
```agsl
version: '3.1'
services:
  spring-crud:
    image: subhamkrgupta/spring-crud:1.1
    container_name: "spring-crud"
    ports:
      - 8080:8080
  angular-app:
    image: subhamkrgupta/angular-app:1.0
    container_name: "angular-app"
    ports:
      - 80:80



```