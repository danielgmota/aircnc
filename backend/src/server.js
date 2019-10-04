const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://daniel:885522@devlabs-mzuio.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//app.use(cors({origin: 'ip'}));
app.use(cors()); //permite todos
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);