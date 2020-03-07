const express = require('express')
const app = express();
const port = 8080;
const HOST = '0.0.0.0';

const path = require("path");
app.use("/ogg", express.static(path.join(__dirname, "ogg")));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get('/dict.json', (req, res) => res.sendFile(path.join(__dirname, "dict.json")));
app.get('/shaxx.json', (req, res) => res.sendFile(path.join(__dirname, "shaxx.json")));
app.get('/saladin.json', (req, res) => res.sendFile(path.join(__dirname, "saladin.json")));
app.get('/calus.json', (req, res) => res.sendFile(path.join(__dirname, "calus.json")));
app.get('/cayde.json', (req, res) => res.sendFile(path.join(__dirname, "cayde.json")));
app.get('/drifter.json', (req, res) => res.sendFile(path.join(__dirname, "drifter.json")));

app.listen(port, HOST, () => console.log(`Example app listening on port ${HOST}:${port}!`))
