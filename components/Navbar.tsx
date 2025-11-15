import { Feather } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NavBar() {
  const pathname = usePathname();
  const isActive = (r: string) => pathname === r;

  return (
    <View className="absolute bottom-0 left-0 right-0" style={{ zIndex: 999 }}>
      <SafeAreaView edges={["bottom"]}>
        <View className="relative">
          <View
            style={[
              Platform.OS === "ios" && {
                shadowColor: "#F3722C",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.25,
                shadowRadius: 13.3,
              },
              Platform.OS === "android" && {
                elevation: 15,
                shadowColor: "#F3722C",
                overflow: "visible",
              },
              Platform.OS === "web" && {
                boxShadow: "0px 0px 26.6px 5px #F3722C40",
              },
            ]}
            className="mx-auto w-[90%] h-16 bg-white rounded-full flex-row items-center justify-between px-10"
          >
            <TabItem
              label="Home"
              icon="home"
              active={isActive("/")}
              onPress={() => router.push("/")}
            />

            <TabItem
              label="Favorite"
              icon="heart"
              active={isActive("/favorite")}
              onPress={() => router.push("/favorite")}
            />

            <TouchableOpacity
              onPress={() => router.push("/add")}
              className="bg-[#F3722C] w-16 h-16 rounded-full items-center justify-center"
            >
              <Feather name="plus" size={28} color="white" />
            </TouchableOpacity>

            <TabItem
              label="Trending"
              icon="trending-up"
              active={isActive("/trending")}
              onPress={() => router.push("/trending")}
            />

            <TabItem
              label="Profile"
              icon="user"
              active={isActive("/profile")}
              onPress={() => router.push("/profile")}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

function TabItem({ label, icon, active, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} className="items-center">
      <Feather name={icon} size={22} color={active ? "#F3722C" : "black"} />
      <Text className={`text-xs ${active ? "text-[#F3722C]" : "text-black"}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
