## EventTrackerProject

### Full-Stack Spring/REST/JPA Project for Skill Distillery

### Overview
This a dynamic REST API designed by David Estrada, called "Cities Lived In," which acts as an event tracker. It utilizes Spring Data JPA's repositories to provide CRUD functionality and Spring REST to simplify the implementation of RESTful services in the web application.

### Technologies Used
 * Coding Languages: Java, SQL
 * Spring Data JPA
 * Spring REST
 * JSON
 * Conditionals
 * Object-Oriented Design
 * Try-Catch Statements
 * Exceptions
 * Gradle
 * MySQL Workbench


### Spring REST Perks
Spring REST is a web framework that simplifies the process of creating RESTful (Representational State Transfer) web services. In a REST API, a controller method returns data directly to the client. Spring even provides shortcuts for _@RequestMapping_. Since REST controllers deal with the full variety of HTTP verbs, these shortcuts are more convenient. We can also choose to put both @RequestMapping and @ResponseBody annotations during the controller class declaration to precede every endpoint method. In this application, I used _@RequestMapping("api")_.

### Lessons Learned
I learned how to properly utilize Spring Boot and Spring REST frameworks to optimize configuration, while implementing the proper annotations and logic to perform basic RESTful services of a dynamic REST api. I learned how REST is aptly named because its clients and servers retrieve and _transfer representations_ of resource state. I learned about _data serialization_ and how we translate an object's state to a sequence of bytes that can be saved or transmitted, allowing for a copy of the original object to be constructed. In this application, I used _JSON (JavaScript Object Notation)_.

### REST Endpoints

|  Method   |    URI               | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/cities`      |              | Collection of representations of all cities lived in | List or collection endpoint
| GET       | `/api/cities/{id}`      |              | Representation of _city_ with input id as {id}| **Retrieve** endpoint
| GET       | `/api/cities/search/city/{name}`      |              | Collection of all cities matching city name input as {name} | List or collection endpoint
| GET       | `/api/cities/search/{keyword}` |              | Collection of all cities lived in matching address or state name input as {keyword} | List or collection endpoint
| POST      | `/api/cities/`      | Representation of a new _city_ recorded | Description of the result of the operation | **Create** endpoint
| PUT       | `/api/cities/`   | Representation of a new version of _city_ with entered id | Description of the result of the new version | **Replace** endpoint |
| DELETE    | `/api/cities/{id}`   |              | | **Delete** route |
