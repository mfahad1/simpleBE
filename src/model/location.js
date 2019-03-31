import mongoose from '../config/database';

const schema = mongoose.Schema({
  lng: Number,
  lat: Number,
  address: String,
  title: String,
})

schema.set('toJSON', {
  transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
});
export default mongoose.model('location', schema);