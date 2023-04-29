import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

interface ButtonsProps extends TouchableOpacity {
  text: string;
  screenName: string;
  nameIcon: string;
}

const Buttons = ({ text, screenName, nameIcon, ...rest }: ButtonsProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={
        // @ts-ignore Error de typescript al no deja dar argumentos a la funcion
        () => navigation.navigate(screenName)
      }
      className=" p-3 w-11/12 font-bold self-center flex-row justify-between"
      activeOpacity={0.6}
      {...rest}
    >
      <View className="flex-row">
        <View className="bg-white rounded-2xl p-2">
          {/* @ts-ignore Error de typescript al no dejar argumentos a la funcion */}
          <Ionicons name={nameIcon} size={24} color="black" />
        </View>
        <Text className="font-bold text-base ml-4 p-2">{text}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="gray" />
    </TouchableOpacity>
  );
};

export default Buttons;
