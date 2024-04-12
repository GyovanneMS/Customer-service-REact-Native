import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Paciente from "./src/screens/Paciente";
import Clinica from "./src/screens/Clinica";

const Stack = createNativeStackNavigator();

export default function App() {
    const [ fonteCarregada ] = useFonts({
      "Rubik": require("./assets/static/Rubik-SemiBoldItalic.ttf")
    });

    if(fonteCarregada)
      return <NavigationContainer>
          <Stack.Navigator initiaçRouteName="Clinica" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Clinica" component={Clinica}/>
              <Stack.Screen name="Paciente" component={Paciente}/>
          </Stack.Navigator>
      </NavigationContainer>

}