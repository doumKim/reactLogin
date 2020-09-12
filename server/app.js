const express = require('express');

const morgan = require('morgan');
const cors = require('cors');

// app.use(router('/',))

const usersRouter = require('./routes/users');

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

app.set('port', port);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
