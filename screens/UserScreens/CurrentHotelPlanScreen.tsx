import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TextCheck from "../../components/TextCheck";
import { LinearGradient } from "expo-linear-gradient";

export default function CurrentHotelPlanScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View className=" flex-1 items-center justify-center my-5 ">
        <View className="bg-gray-200 w-11/12 rounded-xl py-1">
          <View className="flex-row items-center p-2 py-3">
            <LinearGradient
              colors={["#917AFD", "#6246EA"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              // className="rounded-lg p-2"
              style={{ borderRadius: 6, padding: 8 }}
            >
              {/* @ts-ignore Error de typescript al no dejar argumentos a la funcion */}
              <Ionicons name="business-outline" size={30} color="white" />
            </LinearGradient>
            <Text className="ml-3 text-base font-bold">Habitacion Doble</Text>
          </View>
          <View className="border-b border-b-1 border-gray-400 w-full" />
          <View className="py-3">
            <Text className="ml-4 text-sm ">
              Tu Hospedaje se vence automaticamente el 7/19/2023.
            </Text>
            <View className="flex-row items-center p-2 py-3">
              <View className="ml-2">
                <Ionicons
                  name="people-circle-outline"
                  size={24}
                  color="black"
                />
              </View>
              <View className="flex-row items-center">
                <Text className="text-gray-500 text-sm ml-2 ">Oferta •</Text>
                <Text className="font-bold text-sm ml-1 text-green-500 ">
                  Activo
                </Text>
              </View>
            </View>
            <View className="flex-row items-center px-2 -my-1">
              <View className="ml-2">
                <Ionicons name="time-outline" size={24} color="black" />
              </View>
              <View className="flex-row items-center">
                <Text className="text-gray-500 text-sm ml-2 ">
                  La oferta vence el 19/07/2023
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-gray-200 w-11/12 rounded-xl py-1 my-4">
          <View className="flex-row items-center p-2 py-3">
            <Text className="ml-2 text-base font-bold">
              Esto es lo que incluye el plan
            </Text>
          </View>
          <View className="border-b border-b-1 border-gray-400 w-full" />
          <View className="flex-wrap items-start -ml-2 py-3 px-4 w-full">
            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Alojamiento en una habitación doble con 2 camas cómodas y una superficie de 25 m²." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Baño privado con artículos de aseo gratis, bañera o ducha, toallas y papel higiénico." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Servicio de despertador/alarmas disponible en la habitación." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Equipamiento de la habitación que incluye ropa de cama, armario, productos de limpieza, escritorio, TV de pantalla plana, enchufe cerca de la cama y perchero." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Acceso a WiFi gratuito durante toda la estancia." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Política de no fumar en la habitación para garantizar un ambiente saludable y cómodo para todos los huéspedes." />
          </View>
          <View className="items-center pb-3">
            <Pressable
              className="bg-transparent rounded-full border border-black  pl-4 pr-4 mr-3 font-bold py-2 px-4 transition duration-100 transform scale-100 hover:scale-110 active:scale-90"
              onPress={
                // @ts-ignore Error de typescript al no deja dar argumentos a la funcion
                () => navigation.navigate("HostingPlans")
              }
            >
              <Text className="font-bold text-xs">Ver otros planes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
