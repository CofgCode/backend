require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(express.json());

app.get('/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item 1 from backend' },
    { id: 2, name: 'Item 2 from backend' },
    { id: 3, name: 'Item 3 from backend' },
  ];
  res.json(items);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
