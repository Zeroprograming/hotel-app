import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { A } from "@expo/html-elements";

export default function PersonalDeatilsScreen() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  return (
    <View className="flex-1 ">
      <View className="mt-3 ml-3">
        <Text className="ml-2 text-base">Usuario</Text>
        <Text className="ml-2 text-sm text-gray-500">
          Johan Steven Jimenez Avendaño
        </Text>
      </View>
      <Pressable className=" mt-1 ml-3 w-full font-bold items-center flex-row justify-between">
        <View className="mt-3">
          <Text className="ml-2 text-base">Usuario</Text>
          <Text className="ml-2 text-sm text-gray-500">
            johanjimenez0210@gmail.com
          </Text>
        </View>

        <Pressable className="bg-white mt-5 rounded-full border border-black  pl-4 pr-4 mr-6 font-bold py-2 px-4 transition duration-100 transform scale-100 hover:scale-110 active:scale-90">
          <Text className="font-bold text-xs">Editar</Text>
        </Pressable>
      </Pressable>
      <Pressable
        onPress={
          // @ts-ignore Error de typescript al no deja dar argumentos a la funcion
          () => navigation.navigate("PlanHotel")
        }
        className="active:bg-gray-200 mt-2"
        // {...rest}
      >
        <View className="p-2 ml-3 items-center font-bold flex-row justify-between active:bg-black">
          <View className="flex-row items-center">
            <View>
              <LinearGradient
                colors={["#917AFD", "#6246EA"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                // className="rounded-lg p-2"
                style={{ borderRadius: 6, padding: 8 }}
              >
                {/* @ts-ignore Error de typescript al no dejar argumentos a la funcion */}
                <Ionicons name="bed" size={28} color="white" />
              </LinearGradient>
            </View>
            <View className="ml-2">
              <Text className="font-bold text-sm ">Clasica</Text>
              <View className="flex-row items-center">
                <Text className="text-gray-400 text-xs">Oferta •</Text>
                <Text className="font-bold text-xs ml-1 text-green-500 ">
                  Activo
                </Text>
              </View>
            </View>
          </View>
          <Ionicons name="chevron-forward-outline" size={28} color="black" />
        </View>
      </Pressable>
      <Pressable
        onPress={
          // @ts-ignore Error de typescript al no deja dar argumentos a la funcion
          () => navigation.navigate("HostingPlans")
        }
        className="active:bg-gray-200"
      >
        <View className="ml-2 p-2 items-center font-bold flex-row justify-between">
          <View className="flex-row items-center">
            <View>
              <Text className="font-bold text-sm ml-1 ">
                Ver planes de Hospedaje
              </Text>
              <Text className="text-gray-400 text-xs ml-1 ">
                Indivual, Doble, Familiar
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward-outline" size={28} color="black" />
        </View>
      </Pressable>
      <View className="ml-5 mt-3">
        <Text className="text-sm">
          Para cerrar la cuenta y eliminar tus datos de forma permanente,{" "}
          <Text className="underline font-bold">
            <A href="https://www.google.com" target="_blank">
              haz click aqui.
            </A>
          </Text>
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
