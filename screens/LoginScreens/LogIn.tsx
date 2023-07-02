import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  BackHandler,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { A } from "@expo/html-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect, useState } from "react";

// @ts-ignore
function LogInScreen({ navigation }) {
  useLayoutEffect(() => {
    // Deshabilitar el botón de retroceso en el header de la pantalla
    navigation.setOptions({
      headerLeft: null,
    });

    // Deshabilitar la navegación hacia atrás en Android
    const backAction = () => {
      return true;
    };

    const backButtonHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backButtonHandler.remove();
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const usernameBackgroundColor = isUsernameFocused ? "#6146ea15" : "#0000";
  const passwordBackgroundColor = isPasswordFocused ? "#6146ea15" : "#0000";

  const borderUsernameColor = isUsernameFocused ? "#6246EA" : "gray";
  const borderPasswordColor = isPasswordFocused ? "#6246EA" : "gray";

  return (
    <SafeAreaView className="p-2 mx-2">
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => navigation.navigate("OnBoarding")}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="font-bold text-2xl mt-4 mb-1">Welcome Back!</Text>
      <Text className="text-gray-400 mb-6">
        Log in your hotel account to explore your dream city!
      </Text>
      <Text>Username</Text>
      <View
        className="bg-[#6146ea15] rounded-full p-3 mt-2 border-[0.5px] flex-row"
        style={{
          backgroundColor: usernameBackgroundColor,
          borderColor: borderUsernameColor,
        }}
      >
        <Ionicons name="person-circle" size={24} color="#6246EA" />
        <TextInput
          className="ml-2"
          placeholder="Insert your username or email here"
          onFocus={handleUsernameFocus}
          onBlur={handleUsernameBlur}
        />
      </View>
      <Text className="mt-4">Password</Text>
      <View
        className="rounded-full p-3 mt-2 border-[0.5px] flex-row"
        style={{
          backgroundColor: passwordBackgroundColor,
          borderColor: borderPasswordColor,
        }}
      >
        <Ionicons name="key" size={24} color="#6246EA" />
        <TextInput
          className="ml-2"
          placeholder="Insert your password here"
          onChangeText={(text) => setPassword(text)}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />
      </View>

      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigation.navigate("HomeScreen")}
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
      <View className="justify-center items-center mt-12">
        <View className="bg-gray-400 border-gray-400 w-11.5/12 border-[0.2px]" />
        <View className="bg-gray-400 text-gray- absolute px-2 rounded-full">
          <Text className="text-[#646161]">Or</Text>
        </View>
      </View>
      <View className="mt-6">
        <TouchableOpacity
          className="items-center justify-center"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <LinearGradient
            colors={["#000", "#000"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="items-center bg-black p-2 rounded-3xl w-[90%] h-12 mt-5 flex-row"
          >
            <View className="mx-1">
              <Ionicons name="md-logo-apple" size={24} color="#fff" />
            </View>
            <Text className="ml-[20%] text-white text-base font-light text-center">
              Sign In with Apple
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center justify-center"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <LinearGradient
            colors={["#fff", "#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="items-center bg-white p-2 rounded-3xl w-[90%] h-12 mt-5 flex-row"
          >
            <View className="mx-1">
              <Image
                source={require("../../assets/google.png")}
                className="w-7 h-7"
              />
            </View>
            <Text className="ml-[18%] text-black text-base font-light text-center">
              Sign In with Google
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LogInScreen;
