const express = require('express');
const cors = require('cors'); 



const app = express();
app.use(express.json());
const {connection}=require("./db")
const {userRouter} =require("./routes/userRoute")
const {criticalRouter} = require("./routes/CriticalRoute")
const {majorRouter} = require("./routes/MajorRoute")
const {lowRouter}=require("./routes/LowRoute")
const {mediumRouter}= require("./routes/MediumRoute")
const {auth} =require("./middleware/authenticationMiddleware")
 
require('dotenv').config
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRouter);

app.use(auth)

app.use('/critical', criticalRouter);
app.use('/low', lowRouter);
app.use('/medium', mediumRouter);
app.use('/major', majorRouter);



app.listen(3000, async() => {
    try {
        await connection
        console.log(' to db');
    } catch (error) {
        console.log(error)
    }
    console.log(' on port 3000!');
});
