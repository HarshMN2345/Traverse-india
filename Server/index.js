const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();
const app = express();
const cors = require('cors');
const port = 4000;
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
const bcryptsalt=bcrypt.genSaltSync(10);
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
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
