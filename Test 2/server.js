const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movieBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Authentication logic will go here
    res.send('Login API - To be implemented');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    // Registration logic will go here
    res.send('Register API - To be implemented');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
