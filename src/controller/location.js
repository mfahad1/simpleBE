import * as serviceLocation from '../services/location';

export const getAll = async (ctx) => {
  const promise = await serviceLocation.getAll(ctx.request.query);
  promise.id = promise._id;
  console.log('promis::', promise)
  ctx.body = promise;
};

export const post = async (ctx) => {
  const payload = {
    lng: (ctx.request.body.lng),
    lat: (ctx.request.body.lat),
    address: (ctx.request.body.address),
    title: (ctx.request.body.title),
    geolocationId: (ctx.request.body.geolocationId),
  }
  let promise = await serviceLocation.post(payload);
  ctx.body = promise;
};

export const deleteLocation = async (ctx) => {
  let promise = await serviceLocation.deleteLocation(ctx.params.id);
  ctx.body = promise;
}

export const upsert = async (ctx) => {
  let promise = await serviceLocation.upsert({
    locationId: ctx.params.id,
    location: ctx.request.body
  });
  ctx.body = promise;
}