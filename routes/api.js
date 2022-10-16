const router = require('express').Router();
const keygen = require('keygen');
const quick = require('quick.db');
const db = new quick.QuickDB();

router.get('/', async function(req, res) {
    const keys = await db.get("keys");

    if(keys.includes(req.headers.authorization)) {
        res.status(200).json({ message: 'API is working, you have a good API KEY !' });
    } else {
        res.status(401).json({ message: "Invalid API Key, to generate API KEY please follow: api/new" });
    }
});

router.get('/gen', async function(req, res) {
    const newKey = await keygen.url(30)
    await db.push("keys", newKey)

    res.status(200).json({ message: `API KEY generated, new key: ${newKey}` })
});


module.exports = router;