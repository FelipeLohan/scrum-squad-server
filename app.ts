const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({origin: "*"}))

const port = 8000;



app.listen(port, () => console.log(`Listening in port: ${port}`));