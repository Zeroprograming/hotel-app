import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoardingScreen from "../screens/LoginScreens/OnBoarding";

const StackNavigation = createNativeStackNavigator();

const SignInAndOn = function () {
  return (
    <StackNavigation.Navigator initialRouteName="OnBoardingScreen">
      {/* Navigation in Usuario Screen */}
      <StackNavigation.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{
            headerTitle: "Usuario",
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerShown: false,
            }}

        />
      {/* <StackNavigation.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerTitle: "Usuario",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      /> */}

      {/* Navigation in Personal Details Screen */}
      {/* <StackNavigation.Screen
        name="PersonalDetails"
        component={PersonalDeatilsScreen}
        options={{
          headerTitle: "Planes de alojamiento",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerShown: true,
        }}
      /> */}
 
    </StackNavigation.Navigator>
  );
};

export default SignInAndOn;
