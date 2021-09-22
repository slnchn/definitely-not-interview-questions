import path from 'path';

import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { readFile } from '~/utils/server.utils';

import App from '../App';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'), { index: false }));

app.get('/', (req, resp) => {
  const client = ReactDOMServer.renderToString(<App />);
  readFile(path.resolve(__dirname, './public/index.html'), 'utf8').then((data) => {
    resp.send(data.replace('<div id="root"></div>', `<div id='root'>${client}</div>`));
  });
});

app.listen(PORT, () => {
  process.stdout.write(`server started on ${PORT}`);
});
