const express = require("express")
const app = express()

//Middleware used to parse request information into JSON. Works like body-parser
app.use(express.json())

//The arrray that will act as a storage for request data
const info = []

//The endpoint GET request, used to get the number of words inside each message property of each respective object from the storage array
app.get('/api', (req, res) => {
    let count = 0
    for(var i = 0; i < info.length; i++){
        count += info[i].message.split(' ').length //takes the message attribute from each object and splits it using space as a delimiter... 
                                                    //This gives back an array of only words and taking the length of that array gives us...
                                                    //the amount of words in that message and that number is added to "count" to get the total number of words
    }
    res.send({ "count" : count })
})

//The endpoint POST request, used to update the storage array,only if the id is not already in use
app.post('/api', (req,res) => {
    const newObject = {
        "id": req.body.id, 
        "message": req.body.message
    }

    //extracting a list of ids inside each object in the storage array
    const idArray = info.map(obj => {
        return String(obj.id)
    })

    //checking if the id of the new request object already exists in the id list. If not, the new request gets through and a new object is added
    idArray.includes(String(newObject.id)) ? null : info.push(newObject)
    res.send(newObject)
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Server running on port ${port}...`))