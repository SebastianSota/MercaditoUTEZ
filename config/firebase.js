import { useEffect, useState } from "react";
import { initializeApp, isInitialized, getApp } from 'firebase/app';


export const firebaseConfig = {
  apiKey: "AIzaSyA3RuIbR5grEHfXIMmE8uU0xXcI4pBAfYE",
  authDomain: "mercadito-utez.firebaseapp.com",
  projectId: "mercadito-utez",
  storageBucket: "mercadito-utez.appspot.com",
  messagingSenderId: "635746990688",
  appId: "1:635746990688:web:50a0fcabb481c7f5012105",
  measurementId: "G-9JFSKGMK64"
};

export const Firebase = () => {
  const [appFirebase, setApp] = useState();
  useEffect(() => {
    // Verificar si la aplicación ya está inicializada
    if (!isInitialized) {
      // Inicializar la aplicación si aún no lo está
      const app = initializeApp(firebaseConfig);
      setApp(app);
    } else {
      // Obtener la aplicación ya inicializada
      const app = getApp(); // Utiliza la función getApp para obtener la instancia de la aplicación
      setApp(app);
    }

    // Limpieza al desmontar el componente
    return () => {
      // Puedes realizar tareas de limpieza si es necesario
    };
  }, []);  
  return { appFirebase, setApp };
}

