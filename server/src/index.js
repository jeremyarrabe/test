const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(morgan('common'));
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const { Users, Histories } = require('./models/');

app.post('/save', async (req, res) => {
  try {
    const body = req.body;
    const data = await Histories.create({ userId: 1, ...body });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.post('/getHistory', async (req, res) => {
  try {
    const { id } = req.body;
    const data = await Histories.findAll({
      where: {
        userId: id,
      },
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await Users.findOne({
      where: {
        email,
        password,
      },
    });
    if (!data) {
      res.json({
        message: 'no user exist',
      });
    } else {
      res.json({ message: data });
    }
  } catch (error) {
    res.json(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
