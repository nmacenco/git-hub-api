

# git-hub-api project

## Contents

- [Description](#description)
- [Requirements](#requirements)
- [GitHub API Token Setup](#github-api-token-setup)
- [Installation](#installation)
- [Usage](#usage)


## Description


This is an SPA designed to showcase commits from the 'git-hub-api' repository. You can view them on the commits page. The application utilizes APIs from a Nestjs backend. Below, you'll find links to access the full repository and my GitHub profile.

## Requirements

Before you begin, make sure you have installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## GitHub API Token Setup

To use the GitHub API in this project, you'll need to create a personal access token. This token will allow the application to access GitHub data securely. Here's how to create and set up the token:

1. **Open your GitHub Account**:

   - If you dont have one please create one here: https://github.com/


2. **Create a GitHub Token**:

   - Go to your GitHub profile settings.
   - Navigate to the "Developer settings" section.
   - Select "Personal access tokens" from the left sidebar.
   - Click on the "Generate new token" button.
   - Give your token a name and select the necessary scopes or permissions (e.g., `repo` for accessing repositories).
   - Click the "Generate token" button at the bottom of the page.
   - Copy the token, you will use it in a moment. 




## Installation

1. Clone this repository on your local machine:

   ```bash
   git clone https://github.com/nmacenco/git-hub-api.git

2. Navigate to the api folder to install backend dependencies:

    - cd api
    - npm install 

3. Create a .dev.env file inside api folder using as example the .example.dev.env file provided, you will need to use the Git Hub token created in the previous step. 


4. Navigate to the client folder to install frontend dependencies:

    - cd client
    - npm install 

5. Create a .env file inside client folder using as example the .example.env file provided, make sure the port number you use is the same that you are using in the backend. 

## Usage

1. If you are using Linux or Mac go to package.json file, inside api folder and change the next line : 
    - "start:dev": "SET NODE_ENV=dev&& nest start --watch",
to: 
    - "start:dev": "EXPORT NODE_ENV=dev&& nest start --watch",


2. In the api folder, start the backend server:

    - cd api
    - npm run start:dev 

3. In the client folder, start the frontend application:

    - cd client
    - npm run start



Hope you like the app!! 