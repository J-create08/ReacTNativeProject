import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: 'https://lifephoto-49aad-default-rtdb.firebaseio.com/',
  projectId: 'lifephoto-49aad',
  storageBucket: 'https://lifephoto-49aad-default-rtdb.firebaseio.com/',
  messagingSenderId: '407716598766',
  appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };