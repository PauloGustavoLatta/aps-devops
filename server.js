const express = require('express');
const app = express();

app.use('/', express.static('./dist'));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log('Tudo funcionando');
  }
});
