import { NavigationContainer } from "@react-navigation/native";
import { initializeApp } from 'firebase/app';
import { Firebase, firebaseConfig } from "./config/firebase";

import MainNavigation from "./framework/navigation/mainNavigation";


/* if (!auth().isInitialized) {
  console.log("Hola");
  auth().initializeApp(firebaseConfig);
} */



export default function App() {

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}


