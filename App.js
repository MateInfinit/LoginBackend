import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Use native-stack here
import HomeScreen from "./screens/HomeScreen"; // Your existing home screen
import RegisterScreen from "./screens/RegisterScreen"; // Your new Register screen
import WelcomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator(); // Use createNativeStackNavigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
