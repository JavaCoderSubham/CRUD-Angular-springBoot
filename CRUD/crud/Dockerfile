FROM openjdk:17
WORKDIR /spring/data
COPY /target/crud-0.0.1-SNAPSHOT.jar /spring/data/app.jar
ENTRYPOINT ["java","-jar","app.jar"]