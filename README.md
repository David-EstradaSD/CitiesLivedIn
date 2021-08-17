## EventTrackerProject

#### Full-Stack Spring/REST/JPA/Angular Project for Skill Distillery

### Overview
This a dynamic REST API designed by David Estrada, called "Cities Lived In," which acts as an event tracker. It utilizes Spring Data JPA's repositories to provide CRUD functionality and Spring REST to simplify the implementation of RESTful services in the web application. The application's frontend and design comes from JavaScript, Angular, HTML, CSS and Bootstrap. It is deployed out to AWS's EC2.

### Technologies Used
 * Coding Languages: Java, JavaScript, Angular, Typescript, SQL, HTML, CSS
 * Spring Data JPA
 * Spring REST
 * AJAX (Asynchronous JavaScript XML) & XHR (XMLHttpRequest)
 * JSON (JavaScript Object Notation)
 * Postman
 * Conditionals
 * Object-Oriented Design
 * Try-Catch Statements
 * Exceptions
 * Gradle
 * IDEs: Eclipse, VS Code, Atom
 * MySQL Workbench

### Angular Perks
Angular, like many other JavaScript web-application frameworks, allows us developers to implement reusable UI components. This speeds up our development time and makes our source code much more manageable. Best of all, we can design dynamic _single-page_ web apps. Of course, under the sheets, it's AJAX that's doing the majority of the work communicating to the server using our Angular code.

### Spring REST Perks
Spring REST is a web framework that simplifies the process of creating RESTful (Representational State Transfer) web services. In a REST API, a controller method returns data directly to the client. Spring even provides shortcuts for _@RequestMapping_. Since REST controllers deal with the full variety of HTTP verbs, these shortcuts are more convenient. We can also choose to put both @RequestMapping and @ResponseBody annotations during the controller class declaration to precede every endpoint method. In this application, I used _@RequestMapping("api")_.

### AJAX perks (behind the scenes of Angular framework)
By utilizing JavaScript's XMLHttpRequest, I was able to send asynchronous requests to my Java controllers. This provides several benefits, such as reduced server hits and network load, faster page renders and improved response times, an overall improved user experience, and asynchronous processing.

### Front-End Design
All of the front-end for this application was designed using Angular, JavaScript, HTML, and CSS (with some help from Bootstrap). Specifically, I used Angular components to dynamically create forms, tables, and other HTML elements as needed.

### How To Run
This application has been deployed to my AWS EC2 server and can be found here: http://18.119.82.56:8080/CitiesLived/

### Lessons Learned
I learned how to properly utilize Spring Data and Spring REST frameworks to optimize configuration, while implementing the proper annotations and logic to perform basic RESTful services of a dynamic REST api. I learned how REST is aptly named because its clients and servers retrieve and _transfer representations_ of resource state. I learned about _data serialization_ and how we translate an object's state to a sequence of bytes that can be saved or transmitted, allowing for a copy of the original object to be constructed. I learned a great deal regarding _JavaScript_ and _Asynchronous JavaScript XML programming_; more specifically, how to dynamically create HTML elements and how to send CRUD requests with XMLHttpRequest. I also used _JSON (JavaScript Object Notation)_ and its methods _parse_ and _stringify_ to send responses with JavaScript. Lastly, I learned how much smoother front-end design can be developed using JavaScript frameworks such as _Angular_.

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
