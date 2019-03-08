const express = require('express')
const app = express()

const hostname = '0.0.0.0'    // allows access from remote computers
const port = 3002
app.get('/', function (req, res) {
  res.send('<h1>Horizons 83 girls are beautiful</h1>'.fontcolor("darkpink").link("https://media1.tenor.com/images/49849103a4f1007156243448bcc9c2c7/tenor.gif?itemid=11405628"))
})

app.get('/roomate1', (req, res) => {
  res.send('<h1>Mental Nandu!</h1>'.link("https://media.tenor.com/images/76ae26d687b0044c0d19000fbdfca484/tenor.gif"))
})

app.get('/roomate2.',  (req, res) =>{
  res.send('<h1>Rowdy Nikitha!</h1>'.link("https://media0.giphy.com/media/1AeP4BuiSr3li1smJF/giphy.gif?cid=3640f6095c82d8f847715344515fc79e"))
})

app.get('/roomate3',  (req, res) =>{
    res.send('<h1>Laughing kavya</h1>'.fontcolor("purple").link("https://media.tenor.com/images/5418f54dcd58cbd5487d0dec9e644d1a/tenor.gif"))
    })

app.get('/roomate4',  (req, res) =>{
  res.send('<h1>silent Mayuri</h1>'.fontcolor("black").link("https://media.tenor.com/images/29f06d943d6288ddd5814b4ccf134a00/tenor.gif"))
})


// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})
