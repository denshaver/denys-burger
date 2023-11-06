# DENY BURGER BACKEND DOCUMENTATION

Documentation where described how to install dependecies, start backend project. Also here have API Reference where you can see all endpoints with urls and responses.

## Instalation and Configuration

Instal dependencies with poetry:

```
poetry install
```

.venv derectory must be created. If it wansn't created, you need to create it manualy

```
python -m venv venv
```

activate it (.venv or venv directory, check your name of this directory)
```
# WINDOWS

source .venv/Scripts/active

LINUX/MAC OS

source .venv/bin/activate
```

and after venv activation, you can install dependencies with "```poetry install```" command.

You can check installed dependecies:

```
pip list
```

Create .env file and fill it from .env_sample

```
# DJANGO SETTINGS
SECRET_KEY=
DEBUG=True
LANGUAGE_CODE=en-us
TIME_ZONE=Europe/Kiev

# DATABASE CONNECTION
DB_ENGINE=django.db.backends.sqlite3
DB_NAME=deny_burger_db
DB_USER=user
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432

# JAZZMING SETTINGS
SUPPORT_LINK=https://github.com/denshaver/denys-burger/issues
```

In DJANGO SETTINGS, value of SECRET_KEY you can get from this website: https://djecrety.ir/

And in DATABASE CONNECTION, in DB_PASSWORD field write any password


If you have completed all previous steps, you can do migrate:

```
python manage.py migrate
```

Create super user:

```
python manage.py createsuperuser
```

Run server

```
python manage.py runserver
```

## API Reference

### Products

```GET/api/v1/products```

#### Response
```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "count": 2,
    "next": "http://localhost:8000/api/v1/products/?limit=1&offset=1",
    "previous": null,
    "results": [
        {
            "id": 2,
            "name": "Вкусная бомба",
            "category": 1,
            "description": "Наша вкусная бомба",
            "image": "http://localhost:8000/media/images/products/IMG_8243.jpeg",
            "price_decimal": "650.00",
            "weight_grams": 150,
            "weight_kilocalories": 55,
            "ingredients": [
                "Зерна пшеницы",
                "Мясо"
            ]
        }
    ]
}
```

### Next Page
```GET api/v1/products/?limit=1&offset=1```

#### Reponse

```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "count": 2,
    "next": null,
    "previous": "http://localhost:8000/api/v1/products/?limit=1",
    "results": [
        {
            "id": 1,
            "name": "Мясная бомба",
            "category": 1,
            "description": "Наша мясная бомба",
            "image": "http://localhost:8000/media/images/products/IMG_8243.jpeg",
            "price_decimal": "650.00",
            "weight_grams": 150,
            "weight_kilocalories": 55,
            "ingredients": [
                "Булка",
                "Мясо"
            ]
        }
    ]
}
```

### Previous page

```GET /api/v1/products/?limit=1```


#### Response

```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "count": 2,
    "next": "http://localhost:8000/api/v1/products/?limit=1&offset=1",
    "previous": null,
    "results": [
        {
            "id": 2,
            "name": "Вкусная бомба",
            "category": 1,
            "description": "Наша вкусная бомба",
            "image": "http://localhost:8000/media/images/products/IMG_8243.jpeg",
            "price_decimal": "650.00",
            "weight_grams": 150,
            "weight_kilocalories": 55,
            "ingredients": [
                "Зерна пшеницы",
                "Мясо"
            ]
        }
    ]
}
```

### Product Detail

```GET /api/v1/products/<product_id>/```

#### Response

```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "id": 1,
    "name": "Мясная бомба",
    "category": 1,
    "description": "Наша мясная бомба",
    "image": "http://localhost:8000/media/images/products/IMG_8243.jpeg",
    "price_decimal": "650.00",
    "weight_grams": 150,
    "weight_kilocalories": 55,
    "ingredients": [
        "Булка",
        "Мясо"
    ]
}
```

### Filtered by category

```GET /api/v1/products/filter_by_category/<category_id>/```

#### Response

```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "count": 2,
    "next": "http://localhost:8000/api/v1/products/filter_by_category/1/?limit=1&offset=1",
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Мясная бомба",
            "category": 1,
            "description": "Наша мясная бомба",
            "image": "/media/images/products/IMG_8243.jpeg",
            "price_decimal": "650.00",
            "weight_grams": 150,
            "weight_kilocalories": 55,
            "ingredients": [
                "Булка",
                "Мясо"
            ]
        }
    ]
}
```

### Categories

```GET /api/v1/categories/```

#### Response

```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "Burgers",
            "icon": "http://localhost:8000/media/images/categories/IMG_8244.jpeg"
        }
    ]
}
```

### Category Detail

```GET /api/v1/categories/<category_id>/```

#### Response

```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "id": 1,
    "name": "Burgers",
    "icon": "http://localhost:8000/media/images/categories/IMG_8244.jpeg"
}

```

### Orders

```POST /api/v1/orders/```

#### Data

```
{
    "products": [
         {
             "product": 1,
             "quantity": 1
         }
    ],
    "customer_name": "Oleg Kuzmenko",
    "customer_phone": "+380684996403",
    "session_id": "1425",
    "status": "NEW",
    "delivery_method": "DELIVERY",
    "full_address": "Kharkiv, Ukraine",
    "floor": 125,
    "intercom": "16A"
}
```

#### Response

```
HTTP 201 Created
Allow: POST, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "id": 11,
    "products": [
        {
            "id": 10,
            "quantity": 1,
            "total_price": 650,
            "product": 1,
            "order": 11
        }
    ],
    "customer_name": "Oleg Kuzmenko",
    "customer_phone": "+380684996403",
    "session_id": "1425",
    "status": "NEW",
    "delivery_method": "DELIVERY",
    "total_amount": 650,
    "full_address": "Kharkiv, Ukraine",
    "floor": 125,
    "intercom": "16A"
}
```

### Order detail

```GET /api/v1/order/<order_id>/```

#### Response

```
HTTP 200 OK
Allow: GET, DELETE, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "id": 11,
    "products": [
        {
            "id": 10,
            "quantity": 1,
            "total_price": 650,
            "product": 1,
            "order": 11
        }
    ],
    "customer_name": "Oleg Kuzmenko",
    "customer_phone": "+380684996403",
    "session_id": "1425",
    "status": "NEW",
    "delivery_method": "DELIVERY",
    "total_amount": 650,
    "full_address": "Kharkiv, Ukraine",
    "floor": 125,
    "intercom": "16A"
}
```

### Delete order

```DELETE /api/v1/orders/<order_id>/```

#### Response

```
HTTP 204 No Content
Allow: GET, DELETE, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept
```
