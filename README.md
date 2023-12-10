# Star War App

This is a simple Vite app. Docker file is written here .Unit Testing is configure here but due to swiper warnings in nodejs .it does not work .One more thing ,api does not provide any id but in documentation it provide an endpoint with /:id so i store state in redux store .and on the detail page it will find the item using name and then render it.This app need a lot of code improvements and refactoring ,but due to the lack of time .i cannot procceed . some test cases are left.I hope the given code can help you in finding the required things in my skills.
Thank you 

## Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm (comes with Node.js)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone url
   cd starwar
   npm install
   npm run dev

 **Docker :**

     ```docker
        docker build -t my-app .
        docker run -p 3000:3000 my-app