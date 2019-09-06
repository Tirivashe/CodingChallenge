# LifeWay Coding Challenge README

## Prerequisites

The tools that were used to run and test this project are as follows: 
* Node (npm, express.js)
* Git
* Postman
* JavaScript IDE or code editor of choice.

## Running The Project
1. Git clone the project onto your computer or download the zip file from GitHub
2. Open the terminal (Windows/MAC/ Linux) and, in the downloaded repository, navigate to where the 'server.js' is located using the terminal (you can open the 'server.js' file using JS IDE of choice to read through the code)
3. Once inside the folder where server.js is using the terminal, enter the command 'npm start' or 'node server.js' to have the node server running. Check to see if a message shows to indicate the port running on a particular server

## Testing
1. Open 'Postman' to start manipulating the endpoint. The single endpoint in use will be 'localhost:<PORT_NUMBER>/api'
2. On 'Postman', enter the above-mentioned endpoint onto the address bar and set the request to a GET request (left of the address bar)
3. Under the address bar, switch to the 'Body' tab and change the furthest right option underneath that to 'JSON(application/json)' 
4. Select 'SEND' (right of the address bar) and scroll all the way down to see the result in JSON (Count should start at 0 if no message has been sent yet).
5. To add a JSON message, switch from 'GET' to 'POST' and enter the JSON data in the space provided. Successful operation results in the same data being displayed at the bottom
6. Switch to 'GET' to get result and 'POST' to add JSON message
