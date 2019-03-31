import locationModel from '../model/location';


export const getAll = async () => {
	return locationModel.find({});
}

export const post = async (payload) => {
  const newLocation = new locationModel(payload);
  return newLocation.save();
}

export const deleteLocation = async (id) => {
  return  locationModel.remove(
    { _id: id },
  );
}

export const upsert = async (data) => {
  return locationModel.update(
    { _id: data.locationId },
     (data.location)
  );
}
