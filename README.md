## For your eyes only, Cosmofeed team
- I have used NestJS + TS on top of NodeJS to build this service
- I have developed this service between 3:30 AM and 5:30 AM
- I have not integrated any third-party notifications API as all of them were behind a paywall and I am a classic middle-class Indian
- Here is my most notable project: https://unacademy.com/compete/

## Design
<img width="928" alt="Screenshot 2024-02-17 at 5 29 02 AM" src="https://github.com/codebreaker343/notifier/assets/26453487/3f900a7e-387d-43b1-890d-0e7575906b80">


## Pre-requisites
- Docker
- Docker Compose

## Running the app

```bash
$ docker-compose up
```

## How to test things out?

```bash
# create user
$ curl --location 'http://localhost:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "contactNumber": "9766837161",
    "email": "deore.venkatesh@gmail.com"
}'

# fetch users
$ curl --location 'http://localhost:3000/user'

# create template
$ curl --location 'http://localhost:3000/template' \
--header 'Content-Type: application/json' \
--data '{
    "content": "Hello from {{organisation}}. We are based out of {{country}}"
}'

# fetch templates
$ curl --location 'http://localhost:3000/template'

# send SMS
$ curl --location 'http://localhost:3000/notification/sms' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 1,
    "templateId": 1,
    "payload": {
        "organisation" : "cosmofeed",
        "country": "India"
    }
}'

# send Email
$ curl --location 'http://localhost:3000/notification/email' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 1,
    "templateId": 1,
    "payload": {
        "organisation" : "cosmofeed",
        "country": "India"
    }
}'
```

## To-Do list
- Integrate third-party APIs for SMS & E-mail
- Integrate async-queue for fanning out notifications optimally
- Integrate AWS SNS for push notifications
- Add unit tests (Lol, who am I kidding)


## Connect with me
- LinkedIn: https://www.linkedin.com/in/venkatesh-deore/
- X: https://x.com/venkatesh_deore
