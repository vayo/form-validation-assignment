This is a rather simple form validation demo app user by Vayo as a part of its front end interview process.

## Setup
* Clone the repository
* `yarn install` (or npm if you like it better)


## Problem Description

Validating user input is a crucial aspect, both for data integrity and good user experience.
All user input MUST be validated - in both client and the server.

In this app, instead of implementing client side validations, you will only present to the user validation error messages coming 
from the server, where currently validations take place.

The server code is provided and should be started with `yarn run server`.


## Goals

Make sure server.js is running, then start the web app with `yarn start`.
You should see a simple form present, with values already set in the form fields.

When clicking the submit button, You will get error messages from the server. 

### Requirements

* Right now, server spits out validation errors in a single string. 
  Parse the string so we can easily display the right validation error message near the correct form field. Be smart with your parser ;-)
* As you can see, we don't have any usable CSS. Add the minimal amount of CSS to make the form a bit more pleasant.
* Make sure validation messages are removed when correct input is given.
* Don't use any open source React form libraries.

### Non requirements (But great bonus points!)

* This code has some bugs, and lacks elegance and good practices. Fix it for bonus points!
* Use Redux just for API call and state management.
