import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import db from './utils/db.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express, PostgreSQL and Sequalize Application.' });
});

const PORT = process.env.PORT || 8080;
db.sequelize
  .sync()
  .then(() => {
    console.log('DB Synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.log('Failed to sync db: ' + error.message);
  });
