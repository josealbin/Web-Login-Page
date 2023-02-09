const { text } = require('express')
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('views'))

const dbName = 'pup'
const dbEmail = 'pup@stubite.com'
const dbPassword = '123'

app.post('/login', (req, res) => {
    console.log(req.body);
    const{name, email, password} = req.body
    if( name === dbName && email === dbEmail && password === dbPassword){
        res.send('You have successfully logged in')
    }else{
        res.send('Login error');
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('Server Started');
})