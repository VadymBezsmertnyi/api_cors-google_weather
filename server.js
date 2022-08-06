const { default: axios } = require('axios');
const express = require('express');
const app = express();

const URL_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather`;
const URL_WEATHER_DIAGRAM_API = `https://api.openweathermap.org/data/2.5/onecall`;

app.get('/', (req, res) => {
  res.send('Welcome to CORS server 😁');
});

app.get('/weather/info', async (req, res) => {
  const { query } = req;
  res.set('Access-Control-Allow-Origin', '*');

  const requestOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    redirect: 'follow',
  };

  await axios(
    `${URL_WEATHER_API}?lat=${query.lat}&lon=${query.lon}&appid=${query.appid}&units=metric`,
    requestOptions
  ).then((result) => {
    res.send(JSON.stringify({ ...result.data, place_id: query.place_id }));
  });
});

app.get('/weather/diagram', async (req, res) => {
  const { query } = req;
  res.set('Access-Control-Allow-Origin', '*');

  const requestOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    redirect: 'follow',
  };

  await axios(
    `${URL_WEATHER_DIAGRAM_API}?lat=${query.lat}&lon=${query.lon}&appid=${query.appid}&units=metric`,
    requestOptions
  ).then((result) => {
    res.send(JSON.stringify({ ...result.data, place_id: query.place_id }));
  });
});

app.get('/google/addCity', async (req, res) => {
  const { query } = req;
  res.set('Access-Control-Allow-Origin', '*');

  const requestOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    redirect: 'follow',
  };

  await axios(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${query.place_id}&key=${query.key}`,
    requestOptions
  ).then((result) => {
    res.send(JSON.stringify(result.data));
  });
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
