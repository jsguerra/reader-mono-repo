# Astro Frontend Library Example
This app displays books and authors on the frontend. Only images are used to display the content.

## Technologies
- Astro.js
- TypeScript
- React.js used for interactive components

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── common/
│   ├── comopnents/
│   ├── layout/
│   ├── pages/
|   |   ├── admin/
|   |   ├── authors/
|   |   ├── books/
|   |   ├── tags/
|   |   ├── 404.astro
│   |   └── index.astro
│   └── styles/
|       ├── reset.css
│       └── global.css
└── package.json
```


## 🧞 Commands

These commands can be run from inside the frontend directory:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## To Do
Components:
- [x] Pagination Component
- [x] Scroll Up Component
- [x] AZ Filter Component
- [x] Forms
  - [x] Author Form Component
  - [x] Author Edit Form Component
  - [x] Book Form Component
  - [x] Book Edit Form Component
  - [x] Tag Form Component
  - [x] Tag Edit Form Component
  - [x] Search Form Component

Functionality:
- [x] Grid component functionality
- [x] Single image upload functionality
- [x] Multi image upload functionality

Pages:
- [x] Homepage
- [x] Favorites Page
- [x] Search Results Page
  - [ ] Search Pagination
- [x] Author Page
  - [x] Add AZ filter
- [x] Book Page
  - [x] Configure page pagination
- [x] Tags Results Page
  - [x] Add results pagination
- [x] Admin Page
  - [x] Author Create Page
  - [x] Author Edit Page
  - [x] Book Create Page
  - [x] Book Edit Page
  - [x] Tag Create Page
  - [x] Tag Edit Page

Optional:
- [x] Delete functionality
  - [x] Delete author
  - [x] Delete book
  - [x] Delete tag
- [ ] Clear uploaded image functionality

Bugs:
- [ ] Creating a book and selecting only 1 tag sets the tags property as a string instead of an array of strings, this crashes the backend server
- [ ] Going to a page id that does not exist crashes the page instead of going to 404