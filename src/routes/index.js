import compose from 'koa-compose';
import routerLocation from './location';


const protectedRoutes = () => compose([
]);

const unprotectedRoutes = () => compose([
    routerLocation
]);

export {
    unprotectedRoutes,
    protectedRoutes
}