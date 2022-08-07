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
  //res.set('Access-Control-Allow-Origin', '*');
  res.set('access-control-allow-credentials', true);
  res.set(
    'Access-Control-Allow-Headers',
    'access-control-allow-origin,content-type'
  );
  res.set('access-control-allow-methods', '*');
  res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.set(
    'allow',
    'GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK'
  );
  res.set('Connection', 'keep-alive');
  res.set('Content-Length', 8);
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.set('ETag', 'W/"8-ZRAf8oNBS3Bjb/SU2GYZCmbtmXg"');
  res.set('Keep-Alive', 'timeout=5');
  res.set('X-Powered-By', 'Express');

  res.set('mode', 'no-cors');

  const requestOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    redirect: 'follow',
  };

  await axios(
    `https://maps.googleapis.com/maps/api/place/details/json?language=ukr&place_id=${query.place_id}&key=${query.key}`,
    requestOptions
  )
    .then((result) => {
      res.send(JSON.stringify(result.data));
    })
    .catch((error) => res.send(JSON.stringify(error)));
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
