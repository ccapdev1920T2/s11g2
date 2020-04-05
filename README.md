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
5. For apparent reason, the command prompt will mention that the cars are added but the admin is not added. However, that is not the case since it's added to the database. To proceed to the next step, press on your keyboard, "ctrl + c", to stop the run.
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

## Authors

CCAPDEV S11 - Group 2: Virtus et Scientia
- Delima Jr., Reynaldo K. (rdj519)
- Jatico II, Nilo Cantil K. (Gridmerc)
- Valera, Luis Angelo DLC. (luigi-ravioli)

## Notes

