import * as React from "react";

import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TextProp extends Text {
    text: string;
}

const TextCheck = ({text}: TextProp) => {
  return (
    <View className="flex-row justify-center items-center my-1 max-w-sm">
      <Ionicons name="checkmark-outline" size={22} color="#48bb78"></Ionicons>
      <Text className="ml-1 truncate">{text}</Text>
    </View>
  );
}

export default TextCheck;
