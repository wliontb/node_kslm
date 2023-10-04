const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send('Hehehe')
})

app.listen(port, () => {
    console.log('App listening on port '+port);
})