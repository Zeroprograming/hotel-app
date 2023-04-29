import React from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  Animated,
} from "react-native";
import Buttons from "../components/Buttons";

export default function UserScreen() {
  return (
      <View className="flex-1 items-center justify-center ">
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/fe/f8/c4/fef8c4583d249e6c8330f97c5619fd65.jpg",
          }}
          className="w-40 h-40 rounded-full mb-5"
        />
        <Text className="text-xl font-bold mb-1">Zeroprograming</Text>
        <Text className="text-gray-300 text-sm font-bold mb-1">
          johanjimenez357@gmail.com
        </Text>
        <View className="my-4 border-b border-b-1 border-gray-300 w-11/12" />
        {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
        <Buttons text="Personal details" screenName="Stack" nameIcon="person" />
        {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
        <Buttons text="Settings" screenName="Stack" nameIcon="settings" />
        {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
        <Buttons text="Payment details" screenName="Stack" nameIcon="card" />
        {/* @ts-ignore Error de typescript al no dejar dar argumentos a la funcion */}
        <Buttons text="FAQ" screenName="Calender" nameIcon="chatbox-ellipses" />
        <View className="my-3 border-b border-b-1 border-gray-300 w-11/12" />
      </View>
  );
}
