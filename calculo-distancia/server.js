const express = require('express');
const routes = require('./api/router');

const app = express();

const port = process.env.PORT || 3001;



routes(app);

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});