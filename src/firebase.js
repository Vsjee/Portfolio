import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyC1ya5jjRjRTxAV6eK_xwRhwvGUumI5tas",
    authDomain: "portfolio-6b65e.firebaseapp.com",
    projectId: "portfolio-6b65e",
    storageBucket: "portfolio-6b65e.appspot.com",
    messagingSenderId: "875603446736",
    appId: "1:875603446736:web:36ac3f4d03079f8bb807d5",
    measurementId: "G-BDP0NG8FJ4"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)