import * as React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserScreen from "../screens/UserScreen";
import PersonalDeatilsScreen from "../screens/UserScreens/PersonalDetailsScreen";
import CalenderScreen from "../screens/CalenderScreen";
import CurrentHotelPlanScreen from "../screens/UserScreens/CurrentHotelPlanScreen";
import HostingPlansScreen from "../screens/UserScreens/HostingPlans";
import { fas } from "@fortawesome/free-solid-svg-icons";

const StackNavigation = createNativeStackNavigator();

const UserStackScreen = function () {
  return (
    <StackNavigation.Navigator initialRouteName="UserScreen">
      {/* Navigation in Usuario Screen */}
      <StackNavigation.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ 
          headerTitle: 'Usuario', 
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerShown: false
        }}
      />

      {/* Navigation in Personal Details Screen */}
      <StackNavigation.Screen
        name="PersonalDetails"
        component={PersonalDeatilsScreen}
        options={{ 
          headerTitle: 'Planes de alojamiento', 
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerShown: true 
        }}
      />
      <StackNavigation.Screen
        name="PlanHotel"
        component={CurrentHotelPlanScreen}
        options={{ 
          headerTitle: 'Planes de alojamiento', 
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerShown: true 
        }}
      />
      <StackNavigation.Screen 
        name="HostingPlans"
        component={HostingPlansScreen}
        options={{ 
          headerTitle: 'Planes de alojamiento', 
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerShown: true 
        }}
      />

      <StackNavigation.Screen name="Calender" component={CalenderScreen} />

    </StackNavigation.Navigator>
  );
};

export default UserStackScreen;
