import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function StackScreen() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  return (
    <View className="flex-1 items-start ml-5 mt-5">
      <View className="mt-3">
        <Text className="ml-2 text-base">Usuario</Text>
        <Text className="ml-2 text-gray-500">
          Johan Steven Jimenez Avendaño
        </Text>
      </View>
      <Pressable className=" mt-3 w-full font-bold items-center flex-row justify-between">
        <View className="mt-3">
          <Text className="ml-2 text-base">Usuario</Text>
          <Text className="ml-2 text-gray-500">johanjimenez0210@gmail.com</Text>
        </View>

        <Pressable className="bg-white mt-5 rounded-xl border border-black  pl-4 pr-4 mr-3 font-bold py-2 px-4 transition duration-100 transform scale-100 hover:scale-110 active:scale-90">
          <Text className="font-bold text-xs">Editar</Text>
        </Pressable>
      </Pressable>
      <View className=" mt-3 ">
        <TouchableOpacity
          onPress={
            // @ts-ignore Error de typescript al no deja dar argumentos a la funcion
            () => navigation.navigate("PlanHotel")
          }
          className=" -ml-1 p-2 w-full items-center font-bold flex-row justify-between"
          activeOpacity={0.6}
          // {...rest}
        >
          <View className="flex-row items-center">
            <View>
              <LinearGradient
                colors={["#917AFD", "#6246EA"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                // className="rounded-lg p-2"
                style={{ borderRadius: 8, padding: 8 }}
              >
                {/* @ts-ignore Error de typescript al no dejar argumentos a la funcion */}
                <Ionicons name="bed" size={36} color="white" />
              </LinearGradient>
            </View>
            <View>
              <Text className="font-bold text-base ml-4 ">Clasica</Text>
              <View className="flex-row items-center">
                <Text className="text-gray-400 text-base ml-4 ">Oferta •</Text>
                <Text className="font-bold text-base ml-1 text-green-500 ">
                  Activo
                </Text>
              </View>
            </View>
          </View>
          <Ionicons name="chevron-forward-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
