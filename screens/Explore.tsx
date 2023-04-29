import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <View className=" flex-1 items-center justify-center">
      <Text className="text-3xl font-bold mb-10">Explore Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

