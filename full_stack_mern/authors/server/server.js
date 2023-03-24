require('dotenv').config();

const express = require('express');
const cors = require('cors'); 

const { authorRouter } = require('./routes/author.routes')

const port = process.env.PORT;

require('./config/mongoose.config');

const app = express();

app.use(cors());

app.use(express.json());

// app.use(express.urlencoded({extended:true}));

app.use('/api/authors', authorRouter);

app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));