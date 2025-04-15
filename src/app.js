const express = require('express');
const path = require('path');
const { eggForDev, phrases, getRandomPhrase } = require('./utils/response');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlware aplicado apenas em rotas GET
app.use((req, res, next) => {
  if (req.method === 'GET') {
    return eggForDev(req, res, next);
  }
  next();
});

app.get('/', (req, res) => {
  res.send(':)');
});

app.get('/egg', (req, res) => {
  const receivedPhrase = req.query['x-egg-for-dev'];
  
  if (phrases.includes(receivedPhrase)) {
    return res.render('response_view', { phrase: getRandomPhrase() });
  }
  res.status(400).send('--');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
