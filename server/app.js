import express from 'express';
import request from './lib/request';
import cors from 'cors';

const app = express();
const port = 3200;

app.use(cors());

app.get('/businesses/search', async (req, res) => {
  const { longitude, latitude } = req.query;
  try {
    const response = await request.get('/businesses/search', {
      params: {
        longitude,
        latitude,
      },
    });
    res.status(200).json(response.data);
  } catch (e) {
    res.status(400).json(e.response.data);
  }
});

app.get('/businesses/:id', async (req, res) => {
  try {
    const response = await request.get(`/businesses/${req.params.id}`);
    res.status(200).json(response.data);
  } catch (e) {
    res.status(400).json(e.response.data);
  }
});

app.listen(port, () => console.log(`API Server - listening on port ${port}!`));
