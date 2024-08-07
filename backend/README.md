# API Backend
A backend server written in TypeScript and using module imports for an example Library app with self hosted database and file upload capabilities.

## Technologies
- Node.js version 20
- Express.js
- TypeScript
- Multer (file uploads)
- Prisma ORM for database (sqlite)

## Scripts
| Command | Description |
| ------- | ----------- |
| `dev` | Start in development mode |
| `start` | Start in production mode |

## Endpoints
Accepts formData

| Endpoint | Description |
| ------- | ----------- |
| `/authors` | GET all authors, POST to create new author |
| `/authors:id` | GET an author, UPDATE an author, DELETE an author |
| `/books` | GET all books, POST to create new book |
| `/books:id` | GET a book, UPDATE a book, DELETE a book |
| `/favorites` | GET all favorites |
| `/tags` | GET all tags, POST to create new tag |
| `/tags:id` | GET a tag, UPDATE a tag, DELETE a tag |

## File Uploads
Ideally uploaded files would be hosted externally, in this example uploaded files are saved into the Public folder under Books. Only images are accepted in the API. All major image formats are allowed.

## To Do
- [x] Add Query parameters to endpoints
- [x] Add Favorites endpoint
- [x] Add pagination capabilities
- [x] Add Query parameters to authors endpoint
