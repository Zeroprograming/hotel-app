import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Colors from "../constants/Colors";

// Screens

import Home from "../screens/HomeScreen";
import CalenderScreen from "../screens/CalenderScreen";
import ExploreScreen from "../screens/Explore";
import { useColorScheme } from "react-native";
import UserStackScreen from "./GlobalStackNavigator";

// Components

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#684DEC",
          headerShown: false,
        }}
      >
        {/* Home Screen */}

        <Tab.Screen
          name="Home"
          options={{
            title: "Home",
            // unmountOnBlur: true,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              );
            },
          }}
          component={Home}
        />

        {/* Calendario */}

        <Tab.Screen
          name="Calender"
          options={{
            title: "Calendario",
            // unmountOnBlur: true,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name={focused ? "calendar" : "calendar-outline"}
                  size={size}
                  color={color}
                />
              );
            },
          }}
          component={CalenderScreen}
        />

        {/* Mapa / Explora */}

        <Tab.Screen
          name="Explore"
          options={{
            title: "Explora",
            // unmountOnBlur: true,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name={focused ? "map" : "map-outline"}
                  size={size}
                  color={color}
                />
              );
            },
          }}
          component={ExploreScreen}
        />

        {/* Usuario */}

        <Tab.Screen
          name="User"
          options={{
            title: "Usuario",
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name={focused ? "person-circle" : "person-circle-outline"}
                  size={size}
                  color={color}
                />
              );
            },
            headerShown: false,
            unmountOnBlur: true
            // notificaciones
            // tabBarBadge: 0,
          }}
          component={UserStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
