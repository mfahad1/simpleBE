
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
export const connect = () => {
  mongoose.connect('mongodb://fokalapp-be:fokal123@ds111885.mlab.com:11885/fokal-app-sandbox' , { useMongoClient: true })
    .then(() => {
      console.log('connected');
    }, err => {
      console.log('some error occured', err);
    });
}

export default mongoose;
