const express = require('express');
const app = express();
const session = require('express-session')

const sessionOptions = { secret:'not a secret', resave: false, saveUninitialized: false  }
app.use(session( sessionOptions ));

app.get('/viewcount', (req, res)=> {
   if(req.session.count){
    req.session.count +=1;
   } else{
    req.session.count = 1;
   }
   res.send(` U have viewd this page ${req.session.count} times`)
})

app.get('/register', (req,res)=> {
    const { username = 'Manco' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res)=> {
    const {username} = req.session;
    res.send(`HEY THERE ${username}`)
})

app.listen(3000, ()=> {
    console.log('listening')
})