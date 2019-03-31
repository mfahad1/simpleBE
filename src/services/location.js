import * as repoLocation from '../repositories/location';

export const getAll = async (type = {}) => {
  return repoLocation.getAll(type);
}

export const post = async (data) => {
  return repoLocation.post(data);
}


export const deleteLocation = async (id) => {
  return repoLocation.deleteLocation(id);
}


export const upsert = async (data) => {
  return repoLocation.upsert(data);
}

