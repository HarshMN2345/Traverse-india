const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Place = require('./models/Places');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = 4000;
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(cookieParser());
const bcryptsalt=bcrypt.genSaltSync(10);
const jwtsecret='gbfgvdjfbyourfatherisharshmahajandhfjdhfd'
mongoose.connect(process.env.MONGO_URL);
app.get('/test', (req, res) => res.json('Hello World!'));
app.post('/register', async (req, res) => {
    const { username,email, password } = req.body;
    try {
        const user = await User.create({ username,email,password: bcrypt.hashSync(password, bcryptsalt), });
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});
app.get('/user', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtsecret, {}, async (err, decoded) => {
            if (err) throw err;
            const { username, email, id } = await User.findById(decoded.id);
            res.json({ username, email, id }); // Wrap the properties in an object
        });
    } else {
        res.json(null);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    userfind=await User.findOne({ email });
    if(userfind){
        const passok=bcrypt.compareSync(password,userfind.password);
        if(passok){
            jwt.sign({email:userfind.email,id:userfind._id},jwtsecret,(err,token)=>{   
                if(err) throw err; 
                res.cookie('token',token).json(userfind);
            });  
        }else{
            res.status(500).json('password incorrect');
        }}

});
app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
  });
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
