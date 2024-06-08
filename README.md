**MiniPeerfives**

# Steps to execute project
step 1: Clone the repo

step 2: Install all packages using npm i command

step 3: To run the project use command node index.js or npx nodemon index.js

# Problem Statement

Mini Peerfives allows users to reward other people with peerfives (P5) points.Users can give P5 points to each other as a thanking note, they can only spend P5, not the rewards.

P5 - Points that can be given to others

Rewards - Points that are earned and can not be given to others

# Completed

The task main goal was to give points to other user as a thanking note which has been accomplished using node js and mongodb by creating the apis.

All the test case have handled for validation in case of points related api and in other required apis too.

Required schema have created using mongoose with given and required entities.

Below are the list of apis please refer:


** REST APIs **

**User - Create, Edit, Get user List**
endpoints-  

1) Create- /adduser
2) Edit- /edituser/:id
3) Get user list- /getusers

**P5 (Points given) - Create, Get Points list, Delete Transaction**

endpoints-  

1) Create- /givepoints
2) Get user list- /getuserspoints
3) Delete Transaction- /deletetransaction/:id

**Reward (Points received) - Get Points list**

endpoints-  

1) Get user list- /getuserspoints






