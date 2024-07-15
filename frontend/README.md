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
- [ ] AZ Filter Component
- [ ] Forms
  - [x] Author Form Component
  - [ ] Author Edit Form Component
  - [ ] Book Form Component
  - [ ] Book Edit Form Component
  - [x] Tag Form Component
  - [ ] Tag Edit Form Component
  - [ ] Search Form Component

Functionality:
- [ ] Grid component functionality
- [ ] Single image upload functionality
- [ ] Multi image upload functionality

Pages:
- [x] Homepage
- [ ] Favorites Page
- [ ] Search Results Page
- [x] Author Page
  - [ ] Add AZ filter
- [ ] Book Page
- [ ] Tags Results Page
- [ ] Admin Page
  - [x] Author Create Page
  - [ ] Author Edit Page
  - [ ] Book Create Page
  - [ ] Book Edit Page
  - [x] Tag Create Page
  - [ ] Tag Edit Page

Optional:
- [ ] Delete functionality for Author, Book, and Tag
- [ ] Creal uploaded image functionality