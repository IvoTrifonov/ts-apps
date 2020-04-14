import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';

const characterCollection = new CharacterCollection('zyahapombq');
characterCollection.sort();
console.log(characterCollection.data);

const numbersCollection = new NumbersCollection([3, 2, -12, 5, -5000, 23])
numbersCollection.sort();
console.log(numbersCollection.data);

