import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAca__n5i0knmU2bn-wFe5pmOz3KaFFfBg",
	authDomain: "clone-tutorial-video-78b31.firebaseapp.com",
	projectId: "clone-tutorial-video-78b31",
	storageBucket: "clone-tutorial-video-78b31.appspot.com",
	messagingSenderId: "837644244438",
	appId: "1:837644244438:web:f7c398d744cac534348077",
	measurementId: "G-4N10THC7GT"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);