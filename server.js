import express from 'express';
import { resolve } from 'path';

app.use('/',
  express.static(
    resolve(
      --dirname,
      './dist'
    )
  )
)

app.listen(process.env.PORT ||  3000, (err) => {
  if(err) {
    return console.log(err)
  };

  console.log('Tudo funcionando como deveria.')
});
