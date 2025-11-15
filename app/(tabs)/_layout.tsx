import { Tabs } from "expo-router";
import Navbar from "../../components/Navbar";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: "none" }, // hide expo tabs bar
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="favorite" />
        <Tabs.Screen name="add" />
        <Tabs.Screen name="trending" />
        <Tabs.Screen name="profile" />
      </Tabs>

      <Navbar />
    </>
  );
}
