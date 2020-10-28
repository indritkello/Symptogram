import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjN7HtEIQAbpZhXmER43ZNIuL-TfTniD4',
  authDomain: 'sympto-gram.firebaseapp.com',
  databaseURL: 'https://sympto-gram.firebaseio.com',
  projectId: 'sympto-gram',
  messagingSenderId: '601966839349',
  appId: '1:601966839349:ios:f91872f026c1535143937c',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };