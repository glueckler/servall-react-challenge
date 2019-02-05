# React Tech Challenge

## Introduction

Thank you for your interest in joining our team here at Servall Development! This challenge is designed  to showcase your development skills and should ideally take 30 to 60 minutes.

The goal of this challenge is to help users  determine their MP Representative based on their postal code. You'll be using the API provided by [opennorth.ca](https://represent.opennorth.ca/api/) to determine this information.


## Goals

Some of the things we'd love to see in your solution include:

- Code quality
- Layout and presentation
- Comments when necessary

Feel free to add your personal touches or make any changes that you feel would improve the application.


## Setup

1. Login or setup a free account on [GitLab](https://about.gitlab.com/). You'll just need this so that you can fork [this repository](https://gitlab.com/servall/tech-challenge/react-challenge).

2. First fork [this repository](https://gitlab.com/servall/tech-challenge/react-challenge) into your own GitLab account by clicking the `Fork` button located at the top of the page.

3. Once forked, clone to your local machine by running [`git clone`](https://git-scm.com/docs/git-clone) or your git tool of choice.

4. Install the app by running in a command prompt or terminal (Note: [NodeJS](https://nodejs.org/en/) needs to be installed):

      `npm install`   
      or   
      `yarn install`   

5. Start the development environment by then running:

      `npm start`   
      or   
      `yarn start`   


## Technologies Used

- Uses [React framework](https://reactjs.org/docs/hello-world.html)
- Based on the [Create React App](https://github.com/facebookincubator/create-react-app)
- Representative API from [opennorth.ca](https://represent.opennorth.ca/api/)
- Data returned in the [JSONP format](https://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms)

## Guide

1. See `src/App.js` for a basic template to get started. Please feel free to change this file and add other components or visual elements that could provide what you feel is the best user experience.
2. For making requests to the Representative API, you can use the [opennorth.ca Postal Code API](https://represent.opennorth.ca/api/#postcode). An example URL for the postal code `T2Z 4M8`:

    [https://represent.opennorth.ca/postcodes/T2Z4M8/](https://represent.opennorth.ca/postcodes/T2Z4M8/?format=apibrowser).

    Note we are looking for representatives whose `elected_office` is `MP`.

3. Please note that since this is a web application, their API will require you to use JSONP to make the request. To make it easier, we have included [fetch-jsonp](https://github.com/camsong/fetch-jsonp) in this project. It can be used in the same format as a regular [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) request. To use [fetch-jsonp](https://github.com/camsong/fetch-jsonp), simply import it using the following code:

    ```javascript
    import fetchJsonp from "fetch-jsonp";
    ```

4. Once you have retrieved the data, please display the first and last name and any other data you feel will be useful to the user. Feel free to be creative!