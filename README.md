# Cyclebuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

Run `npm i` to install all the necessary packages and dependencies. 

## MongoDB server

Refer to this website for [MongoDB Installation Tutorial](https://www.mongodb.com/docs/manual/installation/?_ga=2.32940920.712864826.1654279176-919443297.1654279175).

Run `npm start` to initialize database and local server. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# API Documentation

Used to collect a Token for a registered User.

**URL** : `/api/bicycle`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "__v": 0,
        "_id": "629a52e202bdafa1a8282813",
        "imageUrl": [
            "/assets/bicycle-a-1.png",
            "/assets/bicycle-a-2.png",
            "/assets/bicycle-a-3.png"
        ],
        "name": "Bicycle A"
    },
    {
        "__v": 0,
        "_id": "629a52e202bdafa1a8282814",
        "imageUrl": [
            "/assets/bicycle-b-1.png",
            "/assets/bicycle-b-2.png",
            "/assets/bicycle-b-3.png"
        ],
        "name": "Bicycle B"
    },
    {
        "__v": 0,
        "_id": "629a52e202bdafa1a8282815",
        "imageUrl": [
            "/assets/bicycle-a-1.png",
            "/assets/bicycle-a-2.png",
            "/assets/bicycle-a-3.png"
        ],
        "name": "Bicycle C"
    },
    {
        "__v": 0,
        "_id": "629a52e202bdafa1a8282816",
        "imageUrl": [
            "/assets/bicycle-b-1.png",
            "/assets/bicycle-b-2.png",
            "/assets/bicycle-b-3.png"
        ],
        "name": "Bicycle D"
    }
]

```

