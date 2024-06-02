# Contributing to the project

Thanks for sharing your interesting in contributing to the project! 🎉

Any advice, request or report can be written in the [issues](https://github.com/DomeT99/app-repo/issues) section of the project.

## Getting Started

This project is built with [Nuxt](https://nuxt.com/) so all the instructions to run it locally are the same as the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction).

### Environment Variables

Create a file named `.env.local` in the root directory of the project. This file should contain the following environment variables:

```
//Firebase Config
FIREBASE_API_KEY = AIzaSyDXdIhsKkSFlJ-n03Ko0se5N_K0VDS5-4s
FIREBASE_AUTH_DOMAIN = app-repo-test-21e83.firebaseapp.com
FIREBASE_PROJECT_ID = app-repo-test-21e83
FIREBASE_STORAGE_BUCKET = app-repo-test-21e83.appspot.com
FIREBASE_MESSAGING_SENDER_ID = 627762693068
FIREBASE_APP_ID = 1:627762693068:web:1d310df123a6d84ae15369

//Firebase Data
FIREBASE_APP_COLLECTION = Application
```

### Project Structure
Inside your project, you'll see the following directory structure:
 

- `components/`: this folder contains all the components (generic and specific) used in the application.

- `composables/`: the project is designed to use composables to encapsulate all the logic necessary for operation and then be called into the wrapper components (Pages). For more information about `Composables` follow this [link](https://vuejs.org/guide/reusability/composables.html).

- `server/`: all APIs that invoke their services are in this folder.

- `store/`: this folder contains all the relevant stores  used in the application.


## How to Contribute

1. Fork the repository
2. Clone the repository to your local machine
3. Create a new branch

```
 git checkout -b <branch-name>
```

4. Make your changes
5. Commit and push your changes

```
 git add .
 git commit -m "commit message"
 git push origin <branch-name>
```

6. Create a pull request
7. Wait for the pull request to be reviewed and merged