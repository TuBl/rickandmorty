# Getting Started with Rick and morty react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# How to run this application

1. run `git clone https://github.com/TuBl/rickandmorty .`
2. At the project root directory `npm install`
3. `npm start` <br>
   > Runs the app in the development mode.\
   > Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Project Requirements

### P01
Create react app was used to bootstrap this project. <br>
### P02
Docker file that generates a docker image for the app
### P03
Docker Compose that can be used up to spin up multiple services/containers simultaenously was created. "below is an example of a docker-compose.yml for a project with multiple services instead of just a front end since ours doesn't have a backend."

```
# React front end, Node back end
version: '3'

services:
  backend:
    env_file:
        "./backend/.env"
    build:
      context: ./backend
      dockerfile: ./Dockerfile
    image: "tubi78/rickandmorty"
    ports:
      - "5000:5000"
  frontend:
    build:
      context: ./client
      dockerfile: ./Dockerfile
    image: "rickandmorty"
    ports:
      - "3000:3000"
    links:
      - "backend:be"
```
### P04
Used branches for features devolopment and merged to maser via pull requests with clear and concise commits.
### P05
Code is Open source with MIT License
### P06 
Ant Design components were used in every part of the application, Navbar, Input fields, Charecters list grid & Charecter showcase card.
### P07
Dockerized version of the api was deployed via GKE on the following address: http://34.68.69.108/api
    - /character
    - /location
    - /episode
![Api service running on GKE](/readme-assets/P08.PNG)
### P08
NA
### P09
A simple CI was created via github actions at .git/workflows/integrate.yml

```
name: Continuous Integration

on:
  pull_request:
    branches: [ master ]


jobs:
  test_pull_request:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm ci
      - run: npm test
      - run: npm run build

```

This runs on pull requests and runs our default test (App.test). If the command `npm test` or `npm run build` fail we know not merge the pull request into our master branch. <br>

### P10

A simple CD was created via Google Cloud Build, it runs on push to the master branch check kubernetes/deploy.yml.

![CD via Google Cloud Build](/readme-assets/P10.PNG)

### P11

The application was deployed on GKE at http://34.67.79.233/

![Front end App running on GKE](/readme-assets/P11.PNG)

### P12
GitHub Repo for the API: https://github.com/TuBl/rickandmortyapi
API Deployed to GKE: http://34.68.69.108/api  **Check P07**

### P13
N/A
