# LifeWay Coding Challenge README

### Prerequisites

The tools that were used to run and test this project are as follows: 
* Node (npm)
* Git
* Postman
* JavaScript IDE or code editor of choice.

### Running The Project
1. Git clone the project onto computer or download the zip file from GitHub
2. Open the terminal (Windows/MAC/ Linux) and navigate to where the 'server.js' is located (you can open the 'server.js' file using JS IDE of choice to read through the code)
3. Run 'npm start' or 'node server.js' to have the node server running. Check to see if a message shows to indicate the port running on a particular server

### Testing
1. Open 'Postman' to start manipulating the endpoints. The single endpoint in use will be 'localhost:<PORT_NUMBER>/api'
2. On 'Postman', enter the above-mentioned endpoint and set the request to a GET request (left of where the URL is entered)
3. Select 'Send' (right of where the URL is entered) and scroll all the way down to see the result in JSON. Count should start at 0
4. To add a JSON message, switch from 'GET' to 'POST' and enter the JSON data. Successful operation results in the same data being displayed at the bottom
