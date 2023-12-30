# Radar Management 

## Introduction

The aim of this project is to create a distributed system based on micro-services.This application allows to manage and automate the process of vehicle infractions following speed overruns detected by automatic radars. The system consists of three micro-services :
- Registration Service : allows to manage vehicles and their owners.
- Radar Service : allows to manage radars.
- Violation Service : manage the cars violations that detected by radars.

## Outils
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](	https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)
```
- Spring Boot
- Spring Cloud
- Eureka Discovery
- H2DataBase
- Keycloak
```

## Project Architecture 
<table align="center">
  <tr><img src="screenshots/52.png"/></tr>
</table>

## Project Structure 


## Eureka Service 
<table align="center">
  <tr>
    <th>Run</th>
    <th>Test</th>
  </tr>
  <tr>
    <td><img src="screenshots/5.png"/></td>
    <td><img src="screenshots/6.png"/></td>
  </tr>
</table>

## Config Service
<table align="center">
  <tr>
    <th>Config with Actuator</th>
  </tr>
  <tr>
    <td><img src="screenshots/8.png"/></td>
  </tr>
</table>

## Gateway Service
<table align="center">
  <tr><th>Gateway with Actuator</th></tr>
  <tr><td><img src="screenshots/7.png"/></td></tr>
</table>

## Ressource Service API Doc
<table align="center">
  <tr>
    <th>Rest API</th>
    <th>Get</th>
   </tr>
  <tr>
    <td><img src="screenshots/9.png"/></td>
    <td><img src="screenshots/10.png"/></td>
  </tr>
    <th>Post</th>
    <th>Get Id</th>
  <tr>
    <td><img src="screenshots/11.png"/></td>
    <td><img src="screenshots/12.png"/></td>
  </tr>
   </tr>
    <th>Update</th>
    <th>Delete</th>
  <tr>
    <td><img src="screenshots/13.png"/></td>
    <td><img src="screenshots/14.png"/></td>
  </tr>
</table>

## Reservation Service API Doc
<table align="center">
  <tr>
    <th>Reservation Rest API</th>
    <th>Personne Rest API</th>
   </tr>
  <tr>
    <td><img src="screenshots/15.png"/></td>
    <td><img src="screenshots/16.png"/></td>
  </tr>
    <th>Get Reservation</th>
    <th>Post Personne</th>
  <tr>
    <td><img src="screenshots/16.png"/></td>
    <td><img src="screenshots/17.png"/></td>
  </tr>
  </tr>
    <th>Update Reservation</th>
    <th>Delete Personne</th>
  <tr>
    <td><img src="screenshots/18.png"/></td>
    <td><img src="screenshots/19.png"/></td>
  </tr>
</table>

## Violation Service
<table align="center">
  <tr>
    <th>Rest</th>
    <th>SOAP</th>
   </tr>
  <tr>
    <td><img src="Screenshots/34.png"/></td>
    <td><img src="Screenshots/36.png"/></td>
  </tr>
    <th>GraphQL</th>
    <th>GRPC</th>
  <tr>
    <td><img src="Screenshots/32.png"/></td>
    <td><img src="Screenshots/30.png"/></td>
  </tr>
</table>

## Web Application
<table align="center">
  <tr>
    <th>Authentication</th>
    <th>Home</th>
   </tr>
  <tr>
    <td><img src="Screenshots/9.png"/></td>
    <td><img src="Screenshots/10.png"/></td>
  </tr>
  <tr>
    <th>Table</th>
    <th>Search</th>
  </tr>  
  <tr>
    <td><img src="Screenshots/19.png"/></td>
    <td><img src="Screenshots/23.png"/></td>
  </tr>
  <tr>
    <th>Owner Detail</th>
    <th>Violation Detail</th>
  </tr>  
  <tr>
    <td><img src="Screenshots/15.png"/></td>
    <td><img src="Screenshots/22.png"/></td>
  </tr>
  <tr>
    <th>Add</th>
    <th>Update</th>
  </tr>
  <tr>
    <td><img src="Screenshots/17.png"/></td>
    <td><img src="Screenshots/18.png"/></td>
  </tr>
</table>


## License
[MIT LICENSE](LICENSE)

