import OnBoardingScreen from "./screens/LoginScreens/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import ExploreScreen from "./screens/NavigationScreens/Explore";
import Home from "./screens/NavigationScreens/HomeScreen";

const StackNavigation = createNativeStackNavigator();
const TabNavigation = createBottomTabNavigator();

function HomeScreen() {
  return (
    <TabNavigation.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <TabNavigation.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <TabNavigation.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
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
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export default Auth;