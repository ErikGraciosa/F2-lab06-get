require('dotenv').config();
const express = require('express')
const app = express()
const port = const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pinball_machines', (req, res) => {
    const pinballList = {
        manufacturer: 'Bally',
        era: 'solid-state',
        title: 'Skateball',
        multiball: true
    }
    res.json(pinballList)
  })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})