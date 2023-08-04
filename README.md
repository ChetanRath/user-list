# User List Vite-React App

## Introduction

This simple UI is for listing users and also adding them in a dummy manner.

## Installing and Running the React App

### Switch to the React App folder

```
cd user-list
```

### Package Installation

In the project directory's terminal run below command to install all the required packages

```
yarn
```

### App start

In the project directory's terminal, create a .env file with along the format of .env.example.

Then run the below command

```
yarn dev
```

### Note

- **Adding and deleting happens in the local dataset, itself. And just to accomodate this, I have created a local copy of the user list that we are getting from the server. This is not required, generally and is not my pattern of working.**
- **I have set .env.example to exactly what is required in .env just for simplification but in general, I would never push the .env information in any manner whatsoever.**
- **Owing to the limitation of time and data, I did not add pagination nor did I add any scrolling method for infinite scroll.**
- **I have used very few fields for the form. But validations have been to them as asked and one field has been left off the validation test.**