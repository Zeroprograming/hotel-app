import { Text, View } from "react-native";
import Navigation from "./navigation/TabNavigator";
import OnBoardingScreen from "./screens/LoginScreens/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import SignInAndOn from "./navigation/LoginStackNavigator";
import Auth from "./Navigation";

export default function App() {
  return (
    <Auth />
  );
}
