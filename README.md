# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts for shared hosting (via SSH)

inside root folder of your hosting, run following command:
`git clone [repo-url]`

then rename the directory of `repo-directory-name` to `public_html`

after successfully cloning the repo and renamed the folder to `public_html`, then repeat the following commands to update the changes regarding to our react app

1. `git pull`

(run this only if there is changes in dependencies and for first clone)

2. `npm install` (optional)

3. `npm run build`

### Understand the .htaccess file
in .htaccess we can configure our hosting service to use /build folder as the root directory

Temporaryly, you can see the deployed demonstration here [https://reinhardjs.site](https://reinhardjs.site)

### Understand the .env file
in .env there is a value for BUILD_PATH, specify the directory to where the react app want to be builded.
