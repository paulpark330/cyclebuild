# Cyclebuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

Run `npm i` to install all the necessary packages and dependencies. 

## MongoDB server

Refer to this website for [MongoDB Installation Tutorial](https://www.mongodb.com/docs/manual/installation/?_ga=2.32940920.712864826.1654279176-919443297.1654279175).

Run `npm start` to initialize database and local server. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# API Documentation

## All Bicycles

Get the details of all bicycles.

**URL** : `/api/bicycles`

**Method** : `GET`

### Success Response

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

## Single Bicycle

Get the details of a single bicycle.

**URL** : `/api/bicycles/{id}`

**Method** : `GET`

### Success Response

**Code** : `200 OK`

**Content example**

```json
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
```
### Error Response

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "error": "Not Found",
    "message": "Bicycle was not found.",
    "statusCode": 404
}
```

## All Parts

Get the details of all parts.

**URL** : `/api/parts`

**Method** : `GET`

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "__v": 0,
        "_id": "629a5c58332472552ee8ed75",
        "compatibilities": [
            "Bicycle D"
        ],
        "description": "A seatpost wedge compatible with the 2019 S3 Rim and Disc models.",
        "imageUrl": [
            "/assets/part-1-1.png",
            "/assets/part-1-2.png"
        ],
        "name": "Bicycle Part 1"
    },
    {
        "__v": 0,
        "_id": "629a5c58332472552ee8ed76",
        "compatibilities": [
            "Bicycle A",
            "Bicycle B"
        ],
        "description": "As their name implies, the Short Reach handlebars are designed for those that require a shorter reach in order to obtain the optimal bike fit. Along these lines, they feature a 65mm reach (which is about 10 to 15mm shorter than \"average\") and a shallow 125mm drop. This also comes with the added benefit of increased control at the hoods and levers. And for the construction, we selected a lightweight, yet highly durable, 6061 Premium Butted Aluminum that's sure to stand up to years of hard riding. 6062 premium butted aluminum, high-strength design. Short reach for optimal brake/shift control. Shallow Bend Drop: 125mm drop x 65mm reach",
        "imageUrl": [
            "/assets/part-2-1.png",
            "/assets/part-2-2.png"
        ],
        "name": "Bicycle Part 2"
    },
    {
        "__v": 0,
        "_id": "629a5c58332472552ee8ed77",
        "compatibilities": [
            "Bicycle B",
            "Bicycle C"
        ],
        "description": "A seatpost wedge compatible with the 2019 S3 Rim and Disc models.",
        "imageUrl": [
            "/assets/part-1-1.png",
            "/assets/part-1-2.png"
        ],
        "name": "Bicycle Part 3"
    },
    {
        "__v": 0,
        "_id": "629a5c58332472552ee8ed78",
        "compatibilities": [
            "Bicycle A",
            "Bicycle B",
            "Bicycle C"
        ],
        "description": "As their name implies, the Short Reach handlebars are designed for those that require a shorter reach in order to obtain the optimal bike fit. Along these lines, they feature a 65mm reach (which is about 10 to 15mm shorter than \"average\") and a shallow 125mm drop. This also comes with the added benefit of increased control at the hoods and levers. And for the construction, we selected a lightweight, yet highly durable, 6061 Premium Butted Aluminum that's sure to stand up to years of hard riding. 6062 premium butted aluminum, high-strength design. Short reach for optimal brake/shift control. Shallow Bend Drop: 125mm drop x 65mm reach",
        "imageUrl": [
            "/assets/part-2-1.png",
            "/assets/part-2-2.png"
        ],
        "name": "Bicycle Part 4"
    }
]
```

## Single Bicycle

Get the details of a single part.

**URL** : `/api/parts/{id}`

**Method** : `GET`

### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "__v": 0,
    "_id": "629a5c58332472552ee8ed78",
    "compatibilities": [
        "Bicycle A",
        "Bicycle B",
        "Bicycle C"
    ],
    "description": "As their name implies, the Short Reach handlebars are designed for those that require a shorter reach in order to obtain the optimal bike fit. Along these lines, they feature a 65mm reach (which is about 10 to 15mm shorter than \"average\") and a shallow 125mm drop. This also comes with the added benefit of increased control at the hoods and levers. And for the construction, we selected a lightweight, yet highly durable, 6061 Premium Butted Aluminum that's sure to stand up to years of hard riding. 6062 premium butted aluminum, high-strength design. Short reach for optimal brake/shift control. Shallow Bend Drop: 125mm drop x 65mm reach",
    "imageUrl": [
        "/assets/part-2-1.png",
        "/assets/part-2-2.png"
    ],
    "name": "Bicycle Part 4"
}
```
### Error Response

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "error": "Not Found",
    "message": "Part was not found.",
    "statusCode": 404
}
```
