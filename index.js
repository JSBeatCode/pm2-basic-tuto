const express = require('express');
const PORT = 5010;

const app = express();

app.get('/', (req, res) => {
    let data = 0;
    for (let i = 0; i < (1024 * 1024 * 1024 * 4); i++) {
        data += i
    }
    res.status(200).send(`<h2>hello ${data}</h2>`);
});

app.get('/test/:count', (req, res) => {
    const count = req.params.count;
    let data = 0;
    for (let i = 0; i < (1024 * 1024 * count * count); i++) {
        data += i
    }
    res.status(200).send(`<h2>hello count ${data}</h2>`);
})

app.listen(PORT, () => {
    console.log('app listening on port:', PORT);
})