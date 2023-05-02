import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import HostingButtons from "../../components/UserScreens/HostingButtons";

const HostingPlansScreen = function () {
  const navigation = useNavigation();

  return (
    <View className="flex-1 my-3">
      <HostingButtons
        title="Habitacion Doble"
        text="1 Cama doble"
        link="https://www.google.com"
      />
      <HostingButtons
        title="Habitacion Doble"
        text="2 Camas individuales"
        link="https://www.youtube.com"
      />
      <HostingButtons
        title="Habitacion Triple"
        text="1 Cama individual y 1 Cama doble"
        link="https://www.lectortmo.com"
      />
      <HostingButtons
        title="Habitacion Doble Premium"
        text="1 Cama doble"
        link="https://www.facebook.com"
      />
      <HostingButtons
        title="Habitacion Triple Premium"
        text="3 Camas individuales"
        link="https://www3.animeflv.net/"
      />
      <HostingButtons
        title="Habitacion Cuadruple"
        text="2 Camas individuales y 1 Cama doble"
        link="https://www3.animeflv.net/ver/oshi-no-ko-1"
      />
      <View className="border-b border-b-1 border-gray-400 w-full mt-5" />
      <Text className="ml-4 my-3 w-10/12">
        No se puede cambiar tu plan desde la aplicacion. Si, sabemos que no es
        lo ideal.
      </Text>
    </View>
  );
};

export default HostingPlansScreen;
