const express = require('express');
const cors = require("cors");
const connectdb = require('./config/config');
const app = express();


const userrg = require('./router/userrouter');


//connect database
connectdb();

app.use(express.json());
app.use(cors());


app.use('/', userrg);
app.get('/', (req, res) => res.send('api run....'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server port is ${PORT}`))