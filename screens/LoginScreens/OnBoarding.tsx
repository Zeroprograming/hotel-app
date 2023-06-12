import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import Navigation from "../../navigation/TabNavigator";

// @ts-ignore
function OnBoardingScreen({ navigation }) {
  
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
        <TouchableOpacity className="items-center" onPress={() => navigation.navigate("HomeScreen")}>
          <LinearGradient
            colors={["#FFD600", "#FFA800"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: 50,
              width: 300,
              borderRadius: 10,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Get Started
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default OnBoardingScreen;
