import Koa from 'koa';
import { unprotectedRoutes } from './routes';
import errorMiddleware from './middlewares/error'
import parseResult from './middlewares/parser'
import { connect } from './config/database';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import logger from 'koa-logger';
const serve = require('koa-static');
const path = require('path');

connect(); // connecting database


const app = new Koa();
app.use(cors());
app.use(bodyParser({formLimit: '50mb'}));
app.use(logger());
app.use(errorMiddleware());
app.use(parseResult());
app.use(serve(path.join(__dirname, '/public')));
app.use(unprotectedRoutes());
app.listen(3000);
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
