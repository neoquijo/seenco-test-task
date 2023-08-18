# React App with Authentication

This is a simple React application that demonstrates authentication and routing using Redux. The app has several pages: home, login, news, and profile.

## Pages

- **Home (/)**: The main page of the application.

- **Login (/login)**: This page allows users to enter their username and password. If the provided credentials match the predefined values (username: guest, password: guest), the user is redirected to the profile page. Otherwise, an error message is displayed.

- **News (/news)**: This page displays some dummy news content.

- **Profile (/profile)**: This page displays arbitrary text and is only accessible after successful authentication.

## Links

Navigation links are provided in the header or footer of the website:

- [Home](/)
- [News](/news)
- [Profile](/profile)

## Authentication

The user's authentication status is stored in the localStorage using a simple true/false parameter. If the user attempts to access the profile page without being authenticated, they are redirected to the login page.

## Implementation

The application uses Redux to manage state. The authentication status, user information, and routing are all handled through Redux.

## run with NPM

1. Clone the repository.
2. Navigate to the project directory and run `npm install` to install the dependencies. also you have to run npm install in the ./src/ockAPI dir
3. Run `npm start` to start the development server.
4. Open your browser and go to [http://localhost:3000]) to view the app.

## run with Docker

1. Clone the repository.
2. Navigate to the project directory and run `docker-compose up`

Feel free to explore and improve upon this application as needed.
