import * as React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CurrentHotelPlanScreen from "../../components/UserScreens/CurrentHotelPlanScreen";
import StackScreen from "../../screens/UserScreens/PersonalDetailsScreen";

const PersonalDetailsStack = createNativeStackNavigator();

export default function PersonalDetailsStackScreen() {
  return (
    <PersonalDetailsStack.Navigator initialRouteName="AcountScreen">
      <PersonalDetailsStack.Screen
        name="AcountScreen"
        component={StackScreen}
        options={{
          headerBackTitleVisible: false,
          // Elimina el título de la pantalla
          headerShown: false,
        }}
      />
      <PersonalDetailsStack.Screen
        name="PlanHotel"
        component={CurrentHotelPlanScreen}
        options={{
          headerBackTitleVisible: false,
          // Elimina el título de la pantalla
          headerShown: true,
          headerTitle: () => (
            <Text className="font-bold text-2xl">Preferencias</Text>
          ),
          headerTitleAlign: "center",
        }}
      />
    </PersonalDetailsStack.Navigator>
  );
}
