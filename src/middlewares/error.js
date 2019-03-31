import compose from 'koa-compose';

const errorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 402;
    ctx.body = {
      success: false,
      error: err.message
    }
    ctx.app.emit('error', ctx);
  }
}

export default () => compose([
  errorMiddleware,
]);