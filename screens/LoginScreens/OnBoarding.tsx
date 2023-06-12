import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import Navigation from "../../navigation/TabNavigator";


export default function OnBoardingScreen() {
  const navigation = useNavigation();

  return (
    <View className=" flex-1 items-center justify-center  ">
      <View className="mb-10">
        <Text className="text-xl font-bold text-center text-ellipsis my-1">
          New Travel, New Place!
        </Text>
        <Text className="text-sm font-light text-gray-600 text-center text-ellipsis mx-8 ">
          Are you ready to uproot and start over in a new area? Placoo will help
          you on your journey!
        </Text>
      </View>

        <Text className="text-sm font-bold text-center text-ellipsis mx-8 ">
          Iniciar sesión
        </Text>
    
      <StatusBar style="auto" />
    </View>
  );
}
