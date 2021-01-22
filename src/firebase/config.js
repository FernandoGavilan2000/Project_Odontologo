import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyB3wrutgF44dfMBnU3Ks0JIGQFGE4XjKiU',
	authDomain: 'dental-health-ca355.firebaseapp.com',
	projectId: 'dental-health-ca355',
	storageBucket: 'dental-health-ca355.appspot.com',
	messagingSenderId: '964453656388',
	appId: '1:964453656388:web:0e3de3dbf73b5094371911',
};
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
