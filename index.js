const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request testdata")
    res.send('Yo testdata!')
})
app.listen(process.env.PORT || 3000)
