import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TextCheck from "../TextCheck";

export default function CurrentHotelPlanScreen() {
  return (
    <ScrollView className="my-5">
      <View className=" flex-1 items-center justify-center ">
        <View className="bg-gray-200 w-11/12 rounded-xl py-1">
          <View className="flex-row items-center p-2 py-3">
            <View className="bg-gray-800 p-2 rounded-lg ml-2">
              <Ionicons name="business-outline" size={30} color="white" />
            </View>
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
          <View className="flex-wrap items-start py-3 px-4">
            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Alojamiento en una habitación doble con 2 camas cómodas y una superficie de 25 m²." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Baño privado equipado con artículos de aseo gratuitos, toallas, papel higiénico y bañera o ducha." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Servicio de despertador/alarmas disponible en la habitación." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Equipamiento de la habitación que incluye ropa de cama, armario, productos de limpieza, escritorio, TV de pantalla plana, enchufe cerca de la cama y perchero." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Acceso a WiFi gratuito durante toda la estancia." />

            {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
            <TextCheck text="Política de no fumar en la habitación para garantizar un ambiente saludable y cómodo para todos los huéspedes." />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
