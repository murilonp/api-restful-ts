/* ENV variables */
require('dotenv').config();

import express from 'express';
import config from 'config';
import router from './router';
import db from '../config/db';
import Logger from '../config/logger';
import morganMiddleware from './middleware/morgan-middleware';

const app = express();

/* JSON middleware */
app.use(express.json());

/* Middleware */
app.use(morganMiddleware);

/* Routes */
app.use('/api/', router);

/* app port */
const port = config.get<number>('port');

app.listen(port, async () => {
  await db();

  Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
