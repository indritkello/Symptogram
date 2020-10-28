import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD8XlzdW5jjjhL88A9vqYnmcnzA3lb6DEA',
  authDomain: 'symptogram.firebaseapp.com',
  databaseURL: 'https://symptogram.firebaseio.com',
  projectId: 'symptogram',
  messagingSenderId: '118633347729',
  appId: '1:118633347729:ios:defd64bfb5fc6ab99d1d30',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };