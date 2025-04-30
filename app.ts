const express = require('express');
const cors = require('cors');
const app = express();
const scrumSquadRouter = require('./routes/scrum-squad-routes.js');

app.use(express.json());
app.use(cors({origin: "*"}))
const port = 8000;

app.use('/', scrumSquadRouter);

app.listen(port, () => console.log(`Listening in port: ${port}`));