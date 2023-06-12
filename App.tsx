import { Text, View } from "react-native";
import Navigation from "./navigation/TabNavigator";
import OnBoardingScreen from "./screens/LoginScreens/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import SignInAndOn from "./navigation/LoginStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <SignInAndOn />
    </NavigationContainer>
  );
}
