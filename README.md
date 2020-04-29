# Clines

Clines (also known as **Caelum Aero linhas**) is a system that allows the customer to purchase flight reservations and 
backoffice user to manage flights, airport and aircraft.


## Prerequisites
Before you begin, ensure you have met the following requirements:

* Node 12.16.1+ 
* Docker 19+
* Docker Compose 1.25+
* GNU Make 3.8+ 

## Running Clines API

To run this project simply execute this commands inside de project path

```shell script
export CLINES_API_URL=<CLINES-API-BASE-URL>
docker image build -t caelum/clines:latest .
docker-compose up
```