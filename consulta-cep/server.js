const express = require('express');
const router = require('./api/router');
const app = express();

const port = process.env.PORT || 3002;

router.build(app);

app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});