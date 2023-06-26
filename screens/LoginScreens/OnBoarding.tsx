import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View, TouchableOpacity } from "react-native";

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
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate("LogIn")}
        >
          <LinearGradient
            colors={["#917AFD", "#6246EA"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            // style={{
            //   height: 40,
            //   width: 150,
            //   borderRadius: 10,
            //   marginTop: 20,
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            className="items-center justify-center bg-black p-2 rounded-3xl w-[90%] mt-5 h-[50px]"
          >
            <Text className="text-white text-lg font-semibold">Log In</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <LinearGradient
            colors={["#fff", "#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            // style={{
            //   height: 50,
            //   width: 300,
            //   borderRadius: 10,
            //   marginTop: 20,
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            className="items-center justify-center p-2 rounded-3xl w-[90%] mt-3 h-[50px]"
          >
            <Text className="text-base font-normal">Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default OnBoardingScreen;
