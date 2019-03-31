import compose from 'koa-compose';
import { sign, verify } from "jsonwebtoken";
import publicKey from '../../keys/index';


const decodeJwt = async (ctx, next) => {
  const token = ctx.headers.authorization.replace(/Bearer /g, '');
  ctx.userDecoded = verify(token, publicKey);
  return next();
}

export default () => compose([
  decodeJwt,
]);