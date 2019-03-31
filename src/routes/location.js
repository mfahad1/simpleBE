import Router from 'koa-router';
import * as locationCtrl from '../controller/location';

const routerLocation = new Router();

routerLocation.get('/locations', locationCtrl.getAll);
routerLocation.post('/location', locationCtrl.post);
routerLocation.delete('/location/:id', locationCtrl.deleteLocation);
routerLocation.put('/location/:id', locationCtrl.upsert);

export default routerLocation.routes();