# EventTrackerProject

### Full-Stack Spring/REST/JPA Project for Skill Distillery

## Overview

## REST Endpoints
// use control-shift-m to preview 

|  Method   |    URI               | Request Body | Response Body | Purpose |
|-----------|----------------------|--------------|---------------|---------|
| GET       | `/api/v1/books`      |              | Collection of representations of all _book_ resources |
| POST      | `/api/v1/books`      | Representation of a new _book_ resource | Description of the result of the operation |
| PUT       | `/api/v1/books/17`   | Representation of a new version of _book_ `17` | | **Replace** endpoint |
| PATCH     | `/api/v1/books/17`   | Description of changes to make to _book_ `17` | | **Update** endpoint |
| DELETE    | `/api/v1/books/17`   |              | | **Delete** route |
