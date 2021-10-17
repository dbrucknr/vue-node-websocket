const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
// const bodyParser = require("body-parser");

const app = express();
dotenv.config();

// middleware
app.use(cors({
    origin: 'http://localhost:8080'
}));
app.use(express.json({
    type: "*/*"
}))
app.use(helmet());
app.use(morgan("common"));


// routes
require('./routes/user.routes')(app);
require('./routes/auth.routes')(app);
require('./routes/message.routes')(app);
require('./routes/conversation.routes')(app);

app.listen(8000, () => {
    console.log('API Active')
});
