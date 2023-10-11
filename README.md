# Fish Folio

FishFolio is a web application for fishing enthusiasts to log and share their fishing experiences, including details about the fish they've caught, the locations where they were caught, and the bait used.

## Table of Contents

- [User Stories](#user-stories)
- [ERD](#erd)
- [Technologies Used](#technologies-used)
- [Authentication](#authentication)



## User Stories

As a user...

- As a visitor, I want user registration and authentication features
- As a visitor, I want to log catches with details such as species, size, weight, date, and bait used
- As a visitor, I want to associate catches with specific locations, including optional GPS coordinates
- As a visitor, I want to be able to edit and delete my own posts
- As a visitor, I want to be able to view posts from other users

## Icebox (Additional Features)

- As a logged-in user, I want to add pictures to fish postings
- As a logged-in user, I want to view the weather in any location where I plan to fish
- As a logged-in user, I want to be able to leave a comment on posts

## ERD
![fish-folio-erd](https://github.com/brendinsgit/Fish_Folio/assets/139824521/e0db2245-4b52-4e46-8504-1d76573a6ef1)



## Technologies Used

- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat)
- ![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=flat)
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat)
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?logo=bootstrap&logoColor=white&style=flat)


## API
Postman for testing.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |

### Fish

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/fish`                | `fish#index`      |
| GET    | `/fish/<fish_id>`      | `fish#show`       |
| POST   | `/fish`                | `fish#create`     |
| PATCH  | `/fish/<fish_id>`      | `fish#update`     |
| DELETE | `/fish/<fish_id>`      | `fish#delete`     |

### Equipment

| Verb   | URI Pattern                 |   Controller#Action    |
|--------|-----------------------------|------------------------|
| POST   | `/fish/<fish_id>` | `equipment#create`  |
| PATCH  | `/fish/<fish_id>/<equipment_id>` | `equipment#update`  |
| DELETE | `/fish/<fish_id>/<equipment_id>` | `equipment#delete`  |

#### Recommended Request Bodies

Request - users#signup:

```json
{
    "credentials": {
        "email": "an@something.email",
        "password": "some password",
        "password_confirmation": "some password"
    }
}
```

Request - fish#create (requires a token):

```json
{
    "fish": {
        "species": "Flounder",
        "size": "18 inches",
        "weight": "4lb",
        "location": "By the dock at X harbor",
        "bait": "mullet",
        "date": "05-02-2023",
        "notes": "was in the shallow part of the water"
    }
}
```

### Token Auth Strategy

Send the token as `Bearer Token <token>`