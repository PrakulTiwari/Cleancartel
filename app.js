const express = require('express')
const port = 5000
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(process.env.PORT, () => {
    console.log('Listening to ' + process.env.PORT)
})