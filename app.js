const express = require('express');
const app = express();
const port = 3000;

// app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/work', (req, res) => {
    res.sendFile(__dirname + '/views/work.html');
})

app.get('/photogallery', (req, res) => {
    res.sendFile(__dirname + '/views/photogallery.html');
})


app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
})