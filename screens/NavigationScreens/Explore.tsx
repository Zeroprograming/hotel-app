import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

export default function ExploreScreen() {
  const [location, setLocation] = useState({
    latitude: 4.67844268018827,
    longitude: -74.13897940263301,
  });

  const [destination, setDestination] = useState({
    latitude: 7.851259,
    longitude: -72.473375,
  });

  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(current);
  }

  useEffect(() => {
    // getLocationPermission();
  }, []);

  return (
    <View className=" flex-1 items-center justify-center">
      <MapView
        className="flex-1 w-full h-full"
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
        {/* Marcar un punto */}
        <Marker
          // Que lo pueda arrastrar
          draggable
          // Establecer la ubicacion del pin
          coordinate={location}
          // obtener direccion de la ubicacion donde se deja despues de arrastrar
          onDragEnd={(direccion) => {
            setDestination(direccion.nativeEvent.coordinate);
          }}
          // Imagen icono del marquet
          // image={require("../assets/images/marker.png")}
        />
      </MapView>
    </View>
  );
}
