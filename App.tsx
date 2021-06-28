/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { SafeAreaView, Text } from 'react-native';
import HomeNavigator from './src/Routes/Home';
import { NavigationContainer } from '@react-navigation/native';

// var firebaseConfig = {
//   apiKey: "AIzaSyAQuVY95ZuXS4wROrj6t_zwDWE6xZrxByU",
//   authDomain: "lifephoto-49aad.firebaseapp.com",
//   databaseURL: "https://lifephoto-49aad-default-rtdb.firebaseio.com",
//   projectId: "lifephoto-49aad",
//   storageBucket: "lifephoto-49aad.appspot.com",
//   messagingSenderId: "407716598766",
//   appId: "1:407716598766:web:6b32b4f0dfea2d33da34ff"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


 const App = () => {

   return (
     <NavigationContainer>
        <HomeNavigator/>
     </NavigationContainer>
   );
 };



 export default App;
