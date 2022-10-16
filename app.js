const quick = require('quick.db');
const db = new quick.QuickDB();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));

app.listen(3000, () => {
    console.log('[API] Port: 3000')
})


module.exports.db = db