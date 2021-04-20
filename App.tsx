import React from "react";
import Confirmation from "./src/pages/Confirmation";
import  AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
function App() {
  const [fontesLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });
  if(!fontesLoaded){
    return <AppLoading />
  }
  return <Routes />;
}

export default App;
