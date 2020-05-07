import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log('change');
});

collection.fetch();
console.log(collection.models);
