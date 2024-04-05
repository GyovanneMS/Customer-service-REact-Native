import React from "react";
import { useFonts } from "expó-font";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
    const [ fonteCarregada ] = useFonts({
      "Rubik": require("./assets/static/Rubik-SemiBoldItalic.ttf")
    });

    const Stack = createNativeStackNavigator();

    if(fonteCarregada)
      return <NavigationContainer>
          <Stack.Navigator initiaçRouteName="Clinica" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Clinica" component={...}/>
              <Stack.Screen name="Paciente" component={...}/>
          </Stack.Navigator>
      </NavigationContainer>

}