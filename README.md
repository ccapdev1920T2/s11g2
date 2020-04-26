# Vehicle (Car) Web Application Store

The repository is submitted for the partial fulfillment of CCAPDEV course. The theme of the proposed web application is a car store. The inspiration came from the game, Grand Theft Auto V or GTA V. The data (car) used are from the game itself also.

## Contents

Each folder in the repository has its own function to make the project run properly.

- controllers - This folder contains files which defines the callback function for a given client request.
- models - This folder contains files for database modelling and access.
- public - This folder contains static files such as css and js. (Note: all img files are used via url)
- routes - This folder contains files which describes the response of the server for each HTTP method request to a specific path in the server.
- views - This folder contains all hbs files (including partials) to be rendered when requested from the server.
- add_data.js - This script creates the database and insert data and admin.
- index.js - The main entry point of the web application.

## Pre-requisites

You will need the following
1. Node.js
2. MongoDB Community Server

## Getting Started

1. Clone the repository either by downloading the contents of the repository, or using the
command below. Please note that git should be installed in your system for this to work if you
choose the latter option.
```
git clone https://github.com/ccapdev1920T2/s11g2
```
2. Open Command Prompt, and navigate to the project folder where you downloaded.
3. Run the command `npm install` to initialize and install all necessary modules used in the project.
4. Run the command `node add_data.js` to add the initial data to the database.
5. All the data necessary is added to the database. In order to proceed further, you must press on your keyboard, "ctrl + c".
6. We can now run the server. Run the command `node index.js`. Upon running the command, your Command Prompt should display the following statement:
```
App listening at port 3000
Connected to: mongodb://localhost:27017/ccapdev-mongoose
```
7. Let's test if the server is running properly. Head to the link below to access the web application:
```
http://localhost:3000/
```
8. You will be directed in the home page.
9. If you are in the home page, congratulations! That means that the server is running. Roam around the web application to view the different features. 

## More Info

In an unlikely event that there is no such thing as package.json and package-lock.json, you will have to run some commands.
1. Run the command `npm install express --save` to add the necessary package for express.
2. Run the command `npm install hbs` to add the necessary package for handlebars.
3. Run the command `npm install mongodb --save` to add the necessary package for MongoDB.
4. Run the command `npm install mongoose --save` to add the necessary package for Mongoose.

Note: Do run `npm audit fix` if there is a low severity due to pollution protocol of hbs.

## Authors

CCAPDEV S11 - Group 2: Virtus et Scientia
- Delima Jr., Reynaldo K. (rdj519)
- Jatico II, Nilo Cantil K. (Gridmerc)
- Valera, Luis Angelo D.C. (luigi-ravioli)

## Heroku

Here is the link of the Heroku deployment. Notes on Heroku is listed in the Phase 3 notes.
https://ccapdev-s11g2-deploy.herokuapp.com/

## Notes

### Phase 2

1. UI Price Slider is not implemented (from the comments of Phase 1) in Phase 2. As a result, there are three options in the search page where the user can sort the cars by their name, brand or price.
2. It's really important to note to ctrl + c once Command Prompt does not want to stop the add_data.js.
3. The implementation of adding users is not yet implemented as some of the concepts needed are not yet discussed or approached. However, to add, delete and update the information of cars are implemented.
4. As a result, registering and logging in is not yet possible until more concepts such as "express-session" is fully discussed.
5. The updated Pre-Phase 2 UML document is in the repository.

### Phase 3

1. 