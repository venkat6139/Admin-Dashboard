# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Admin Dashboard for Social Media Application

This project is a simple admin dashboard for a social media application built with React and Material-UI. It includes functionality for managing users and posts, as well as a login system to secure access to the dashboard.

## Project Structure

- **src**
  - **components**: Contains reusable components like `KPICard`, `NavigationBar`, and `PostTable`.
  - **context**: Contains the `LoginContext` for managing authentication state.
  - **pages**: Contains different pages like `HomePage`, `UserListingPage`, and `PostListingPage`.
  - **data**: Contains dummy data files for users and posts.
  - **App.js**: Main application component that handles routing and authentication.
  - **index.css**: Global styles for the application.
  - **index.js**: Entry point for the React application.


## Features
Login Page: Simple login form that uses dummy credentials to authenticate users.
Dashboard: Displays key performance indicators (KPIs) for total users, total posts, active users, and recent posts.
User Listing Page: Lists users with actions to edit or ban each user.
Post Listing Page: Lists posts with actions to delete or hide each post.

## Components
LoginPage: Handles user authentication.
HomePage: Displays KPI cards.
UserListingPage: Shows a table of users with edit and ban functionalities.
PostListingPage: Shows a table of posts with delete and hide functionalities.
NavigationBar: Provides navigation links for the dashboard.
KPICard: Displays individual KPI metrics.
PostTable: Displays a table of posts with action buttons.
UserTable: Displays a table of users with action buttons.

## Styling
The project uses Bootstrap for layout and Material-UI for components. Custom CSS is used to enhance the styling of the login page, navigation bar, and tables.

## Responsive Design
The application is responsive and works well on both desktop and mobile devices. Media queries and flexible layouts ensure that the UI adapts to different screen sizes.

## Data
Dummy data for users and posts is stored in JSON files located in the data directory. This data is used to populate the tables in the user and post listing pages.

## Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
