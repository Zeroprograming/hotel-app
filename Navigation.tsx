import OnBoardingScreen from "./screens/LoginScreens/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import ExploreScreen from "./screens/NavigationScreens/Explore";
import Home from "./screens/NavigationScreens/HomeScreen";
import CalenderScreen from "./screens/NavigationScreens/CalenderScreen";
import UserStackScreen from "./navigation/GlobalStackNavigator";
import LogInScreen from "./screens/LoginScreens/LogIn";

const StackNavigation = createNativeStackNavigator();
const TabNavigation = createBottomTabNavigator();

function HomeScreen() {
  return (
    <TabNavigation.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#684DEC",
        headerShown: false,
      }}
    >
      {/* Home Screen */}

      <TabNavigation.Screen
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

      <TabNavigation.Screen
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

      {/* Explore */}

      <TabNavigation.Screen
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

      <TabNavigation.Screen
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
          unmountOnBlur: true,
          // notificaciones
          // tabBarBadge: 0,
        }}
        component={UserStackScreen}
      />
    </TabNavigation.Navigator>
  );
}

function Auth(props: any) {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigation.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
        />
        <StackNavigation.Screen name="HomeScreen" component={HomeScreen} />
        <StackNavigation.Screen name="LogIn" component={LogInScreen} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export default Auth;
