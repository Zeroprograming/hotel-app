import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { A } from "@expo/html-elements";

// @ts-ignore
function LogInScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center p-3">
      <Text className="font-bold text-2xl mb-2">Welcome Back!</Text>
      <Text className="text-gray-400 mb-6">
        Log in your hotel account to explore your dream city!
      </Text>
      <Text>Username</Text>
      <View className="bg-[#6146ea15] rounded-full p-3 mt-2 border-[0.5px] border-[#6246EA] flex-row">
        <Ionicons name="person-circle" size={24} color="#6246EA" />
        <TextInput
          className="ml-2"
          placeholder="Insert your username or email here"
        />
      </View>
      <Text className="mt-4">Password</Text>
      <View className="bg-[#6146ea15] rounded-full p-3 mt-2 border-[0.5px] border-[#6246EA] flex-row">
        <Ionicons name="key" size={24} color="#6246EA" />
        <TextInput className="ml-2" placeholder="Insert your password here" />
      </View>

      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigation.navigate("LogIn")}
      >
        <LinearGradient
          colors={["#917AFD", "#6246EA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="items-center bg-black p-2 rounded-3xl w-[90%] mt-5"
        >
          <Text className="text-white text-lg font-semibold">Log In</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View className="justify-center items-center">
        <Text className="text-gray-400 mt-2">
          {" "}
          <A href="https://www.google.com" target="_blank">
            Forgot your password?
          </A>
        </Text>
      </View>
    </View>
  );
}

export default LogInScreen;
