// it's job is to open the server, let requests in, and send responses

const express = require('express'); //express is a library in node, that makes it easy to build web servers

const cors = require('cors') //cross origin resource sharing
//this is needed because frontend and backend are on different ports
//by default the browsers block requests between different ports due to security

const bodyParser = require('body-parser');
//frontend sends data in raw json or text, this converts in javascript object

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
//always use this for every request
app.use(cors());
app.use(bodyParser.json());


//testing the route

app.get('/', (req, res) => {
    res.send('Manifesta Backend is running');
});

//start server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const societyRoutes = require('./routes/societyRoutes');
app.use('/societies', societyRoutes);