# Name, Class and Admin Number
- Name: Reyes Asher Benedict Calaminos
- Class: DIT/FT/1B/11
- Admission Number: p2210979

# PLEASE READ THIS README BEFORE STARTING
Everything you need to know is written below.

# FOLDER STRUCTURE
Here is the folder structure:

```
bed-ca1-spicychillisus
├─ src
│  ├─ configs
│  │  └─ initTables.js
│  ├─ controllers
│  │  ├─ ownershipController.js
│  │  ├─ taskController.js
│  │  ├─ taskProgressController.js
│  │  ├─ userController.js
│  │  └─ vehicleController.js
│  ├─ models
│  │  ├─ ownershipModel.js
│  │  ├─ taskModel.js
│  │  ├─ taskProgressModel.js
│  │  ├─ userModel.js
│  │  └─ vehicleModel.js
│  ├─ routes
│  │  ├─ mainRoutes.js
│  │  ├─ ownershipRoutes.js
│  │  ├─ taskProgressRoutes.js
│  │  ├─ taskRoutes.js
│  │  ├─ userRoutes.js
│  │  └─ vehicleRoutes.js
│  ├─ services
│  │  └─ db.js
│  └─ app.js
├─ .env
├─ .gitignore
├─ index.js
├─ package-lock.json
├─ package.json
└─ README.md
```
©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

# HOW TO NAVIGATE WITH POSTMAN
Here are the endpoints that have been created:

Section A endpoints:
- /users
- /tasks
- /task_progress

Section B endpoints:
- /vehicles - this is a custom endpoint made to display the vehicles available for sale. this is a universal table.
- /ownership - this displays the vehicles owned by different people

** IT IS IMPORTANT TO KNOW THAT YOU SHOULD HAVE THE FOLLOWING MODULES INSTALLED ON YOUR COMPUTER BEFORE STARTING THIS:
- node.js
- expressjs
- readline-sync
- dotenv
- mysql2
    
These modules are EXTREMELY crucial in the functionality of the application, and any missing modules will result in a not so smooth experience in running this server.

Step 1: To install these modules, run the command:

```
npm install node express readline-sync dotenv mysql2
```

You can find the schema information inside the .env provided with this project, under

```
DB_DATABASE="ca1"
```
Where the database is the schema.
Make sure to add the schema into your mysql workbench before running the command to insert tables.

STEP 2: Type the following command into visual studio code integrated terminal:
```
npm run init_tables
```

This code will generate the tables needed and the information in the table.

STEP 3: Run the server by typing "npm run dev" or "npm start" or "node index.js" or "nodemon index.js" or "nodemon" in the integrated terminal of Visual Studio Code.

STEP 4: Load http://localhost:3000 in your browser. You should be able to see the message:
```
"this bed ca1 was done by spicychillisus"
```
To view the data in the endpoints, add the endpoint you wish to view.
For example, typing http://localhost:3000/users displays the users in the api.
Typing http://localhost:3000/users/1 displayes the user with user_id of 1.

STEP 5: Open Postman, and enter the endpoint that you wish to test. Make sure to set the text in the request body to JSON format.

STEP 6: You can run through the different routes, such as GET, POST, PUT, DELETE, in order to run through functions to add, delete or view data. 

# DETAILS OF THE ENDPOINTS
This section goes in detail of the endpoints
* DO NOTE THE INPUT DATA IS JUST AN EXAMPLE

# SECTION A ENDPOINTS

# /users
Here are the routes that were made for this endpoint:
- /POST => This adds users into the database.
However, you need to follow the following convention to add the user into database:

```
{
 "username": "greenUser123",
 "email": "user123@example.com"
}
```

you cannot add duplicate email entries, but you can have the same username for different emails. 
if you were to add duplicate email entries, you will be met with an error message.

- /GET => This gets all the users that are inside the database, and any users that have been added by the user are also added here.
- /GET/user_id => This gets an individual user data by providing the user.
- /DELETE/user_id => This deletes the user by providing the user_id of the user.
- /PUT/user_id => This updates the details of the user. 

# /tasks
Here are the routes that were made for this endpoint:
- /POST => This adds tasks into the database.
However, you need to follow the following convention to add the user into database:

```
{
 "title": "No Plastic Bottles",
 "description": "Avoid purchasing bottled water and use a reusable water bottle instead.",
 "points": 40
}
```

you may add duplicate entries in order to add more points

- /GET => This gets all the tasks that are inside the database, and any tasks that have been added by the user are also added here.
- /GET/task_id => This gets an individual task data by providing the user id.
- /DELETE/task_id => This deletes the task by providing the task_id of the task.
- /PUT/task_id => This updates the details of the task. 

# /task_progress
Here are the routes that were made for this endpoint:
- /POST => This adds task progress into the database.
However, you need to follow the following convention to add the task progress into database:

```
{
 "user_id": 1,
 "task_id": 1,
 "completion_date": "2023-07-30",
 "notes": "Planted a tree in the park near my house."
}
```

you may add duplicate task progress to earn more points.

- /GET => This gets all the task progress that are inside the database, and any task progress that have been added by the user are also added here.
- /GET/task_progress => This gets an individual task progress data by providing the user.
- /DELETE/task_progress => This deletes the user by providing the task_progress of the user.
- /PUT/task_progress => This adds notes for the task progress.
Follow the following updating convention:
```
{
 "notes": "Planted two trees this time!"
}
```
Change the notes message to any message you wish.

# SECTION B ENDPOINTS

# THEME: VEHICLES
The theme is based on vehicles. Feel free to own as much vehicles as you want in your own world! Although you can't drive them, it would be cool if you told someone you own a Formula 1 car.
You can also add custom vehicles to the database, in which you and everyone else will have to buy later on.

Users can use the points they have gotten from Section A and use them to buy any type of vehicles in Section B. There are 5 categories of vehicles available for purchase:
- Cars: it can range from sports cars or racing cars to normal road cars
- Buses: can be any bus model
- Bikes: it can be any type of motorcycle (e-bikes do not count)
- Planes: can range from any type of plane, commercial or cargo
- Others: it can range from any type of vehicle. it can even be a train.

2 tables are made:
- Vehicles: a hub for people to display the vehicles for sale and how many points the vehicle is worth.
- Ownership: a hub to display which users own which vehicles. However, the vehicle purchased must come from the vehicle database.


# /vehicles
Here are the routes that were made for this endpoint:
- /POST => This can add vehicles that one wants to add. The vehicle can be of any category, ranging from cars to trucks, or etc.
However, you need to follow the following convention to add the vehicle into database:

```
{
 "vehicle_name": "Red Bull RB19",
 "category": "CAR",
 "vehicle_description": "This car was driven by Max Verstappen and earned him a 3rd world championship in 2023.",
 "points_needed": 600
}

```
here is the full list:
"CAR" - for cars. it can range from formula one cars to road cars. it can also be cars from the past.
"BUS" - for any bus model that has hit the roads in any era.
"MOTOR" - for motorcycles
"PLANE" - can range from cargo planes to commercial planes
"OTHERS" - any other type of vehicle not mentioned
Any other categories not mentioned on top will be met with an error message.

Make sure the "points_needed" are a positive number.

You can allocate any price for the vehicle, but it would be nice if the price is as realistic as possible.

- /GET => This gets all the vehicles that are inside the database, and any vehicles that have been added by the user are also added here.
- /GET/vehicle_id => This gets an individual vehicle data by providing the vehicle_id in the endpoint.
For example: localhost:3000/vehicles/1 returns the vehicle data that is under vehicle_id: 1.

- /DELETE/vehicle_id => This deletes the vehicle by providing the vehicle_id of the vehicle.
For example: localhost:3000/vehicles/4 deletes all the vehicle data that is under vehicle_id: 4.

- /PUT/vehicle_id => This updates the details of the vehicle. 


# /ownership
This endpoint was added as a section to display the vehicles in the vehicle table and the owners that owned different cars.
This table updates when a user purchases a vehicle.
The addition convention is as follows:

```
{
    "vehicle_id": 1,
    "owner_id": 1
}
```

Make sure the vehicle_id and owner_id is accurately copied from the vehicle table.
Also make sure the vehicle_id exists inside the vehicle table as well.
But if you have made any errors, please delete your record and re-enter the record.
Do note that when you add a new ownership record, the corresponding points will be deducted from you.
When you delete an ownership record with /delete, you do not get your points back unfortunately 😔

# FORMULA FOR CALCULATING (a simplified version):
For example:
You are "owner_id": 1.
You have 600 points.
if "vehicle_id": 5 is worth 300 points, 
you will have 300 points left.
300 points will also be deducted from you.

You can own as many vehicles as you want.
You can also own the same vehicle twice, provided you have the necessary amount that is needed.

# ADDITIONAL DETAILS:
Link to repository:
https://github.com/ST0503-BED/bed-ca1-spicychillisus