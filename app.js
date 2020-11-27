const express = require('express')
const port = 5000
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes')

const dbURI = 'mongodb+srv://users:cleancartel123@cluster0.tfjqc.mongodb.net/users?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT || port)
        console.log('db connected');
    })
    .catch(err => console.log(err))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.use(userRoute);
// app.listen(process.env.PORT, () => {
//     console.log('Listening to ' + process.env.PORT)
// })
// app.listen(port)