import compose from 'koa-compose';

const parseResult = async (ctx, next) => {
  try {
    await next();
    ctx.status = 200;
    ctx.body = {
      success: true,
      data: ctx.body
    }
  } catch (err) {
    ctx.status = err.status || 401;
    ctx.body = {
      success: false,
      error: err.message
    }
  }
}

export default () => compose([
  parseResult,
]);