import * as React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserScreen from "../../screens/UserScreen";
import StackScreen from "../../screens/UserScreens/PersonalDetailsScreen";
import CalenderScreen from "../../screens/CalenderScreen";
import PersonalDetailsStackScreen from "./PersonalDetails";

const UserStack = createNativeStackNavigator();

export default function UserStackScreen() {
  return (
    <UserStack.Navigator initialRouteName="UserScreen">
      <UserStack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerBackTitleVisible: false,
          // Elimina el título de la pantalla
          headerShown: true,
          headerTitle: () => (
            <Text className="font-bold text-2xl">
              Preferencias
            </Text> ),
          headerTitleAlign: 'center',

        }}
      />
      <UserStack.Screen
        name="Stack"
        component={PersonalDetailsStackScreen}
        options={{
          headerBackTitleVisible: true,
          // Elimina el título de la pantalla
          headerShown: true,
          headerTitle: () => (
            <Text className="font-bold text-2xl">
              Datos Personales stack
            </Text> ),
          headerTitleAlign: 'center',
        }}
      />
      <UserStack.Screen name="Calender" component={CalenderScreen} />
    </UserStack.Navigator>
  );
}
