Demo Book List
Test application has two separate screens: Dashboard, Add a Book(Edit Book).

Dashboard. Layout
Main part of this screen is a table with columns:
Book title;
Author name;
Category;
ISBN;
column “Actions” - which should have 2 buttons “Edit”, “Delete”.
Also somewhere in the page should be a link to the “Add a Book” page.
Dashboard. Functionality
Table. Retrieve data from a backend and display it as a table row.
Click on the “Edit” button - should redirect users to the edit page (layout and functionality are the same as we have for “Add a book” screen, but with pre populated inputs and correct texts). On submit - update record in DB, show success message and redirect to Dashboard with updated table list.
Click on the “Delete” button - remove book from DB and table list.
Add a Book. Layout
Page has a form with fields (inputs):
Book title - text, required;
Author name - text, required;
Category - select (add few dummy options), required;
International Standard Book Number (ISBN) - number, required;
Submit button “Add a Book”
Also somewhere in the page should be a link to the “Dashboard” page. On submit - create record in DB, show success message and redirect to Dashboard with updated table list.
Add a Book. Functionality
Each field (input, select) requires validation. Users are not able to add a book with empty fields, show warning alert and highlight empty fields. On submit - form data should be stored to a fake backend and record should appear in the table list.

Back-end technical limits:
use fake REST API (https://github.com/typicode/json-server) for CRUD operations;
Front-end technical limits:
use the latest version of React;
use hooks or/and custom hooks (where necessary);
use Typescript (optional, but will be a big plus), use only functional components;
usage of Context API is welcome;
use any type of CSS frameworks (usage of preprocessor is welcome).
UI requirements:
eye friendly design;
responsive layout (min 320px)
Additional:
Create a public repository on GitHub with the final code;
Add instructions how to run application locally, step by step (add readme.md);
Share a repo link with us;
Avoid using third party packages (like Redux, mobX, axios, formik, yup, react-hook-form etc.);

---

# Getting Started

-In the project directory create local server:
npm install -g json-server

-Paste data in db.json if the last one is empty:
{
"books": [
{
"id": 1,
"title": "Sense and Sensibility",
"author": "Jane Austen",
"category": "novel",
"ISBN": "978-5-9942-0465-8"
},
{
"id": 2,
"title": "The Portrait of Dorian Grey",
"author": "Oscar Wilde,
"category": "philosophical novel",
"ISBN": "978-5-9985-0372-6
},
{
"id": 3,
"title": "Great Expectations",
"author": " Charles Dickens",
"category": "novel",
"ISBN": "978-617-7030-43-9"
},
{
"id": 4,
"title": "Vanity Fair",
"author": " William Thackeray",
"category": "novel",
"ISBN": "978-5-17-067421-3"
},
{
"id": 5,
"title": "Romeo and Juliet",
"author": "William Shakespeare",
"category": "tragedy",
"ISBN": "978-5-9985-1118-9"
}
]
}

--In the project directory set local server:
npx json-server --watch data/db.json --port 3001

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
