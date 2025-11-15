import { Redirect } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Redirect href="/(tabs)" />
        <Text>Click me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;
