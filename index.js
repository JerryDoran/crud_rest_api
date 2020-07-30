const express = require('express');
const bodyParser = require('body-parser');
const color = require('colors');
const userRoutes = require('./routes/users');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.use(express.static('public'));

app.set('views', 'views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello from express');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.yellow));
