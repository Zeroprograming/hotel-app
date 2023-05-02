import React from "react";
import { Text, View, Image, TouchableOpacity, Pressable, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonsProps {
  title: string;
  text: string;
  link: string;
}

const HostingButtons = ({ text, title,link, ...rest }: ButtonsProps) => {
  const navigation = useNavigation();

  return (
    <Pressable
    onPress={() => {
      Linking.openURL(link);
    }}
      className="active:bg-gray-200 pb-2"
      {...rest}
    >
      <View className="-mb-2 ml-3 p-2 items-center font-bold flex-row justify-between">
        <View className="flex-row items-center">
          <View>
            <LinearGradient
              colors={["#917AFD", "#6246EA"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              // className="rounded-lg p-2"
              style={{ borderRadius: 6, padding: 10 }}
            >
              {/* @ts-ignore Error de typescript al no dejar argumentos a la funcion */}
              <Ionicons name="people" size={26} color="white" />
            </LinearGradient>
          </View>
          <View>
            <Text className="font-bold text-sm ml-4 ">{title}</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-400 text-xs ml-4 ">{text}</Text>
            </View>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={32} color="black" />
      </View>
    </Pressable>
  );
};

export default HostingButtons;
