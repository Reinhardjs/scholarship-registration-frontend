# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts for shared hosting (via SSH)

inside root folder of your hosting, run following command:
`git clone [repo-url]`

then rename the directory of `repo-directory-name` to `public_html`

`git pull`

`npm install`

`npm run build`

### Understand the .htaccess file
in .htaccess we can configure our hosting service to use /build folder as the root directory

Temporaryly, you can see the deployed demonstration here [https://reinhardjs.site](https://reinhardjs.site)

### Understand the .env file
in .env there is a value for BUILD_PATH, specify the directory to where the react app want to be builded.

## Available Scripts (for local development)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)