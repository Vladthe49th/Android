import { Drawer } from "expo-router/drawer";

import CustomDrawer from "../components/CustomDrawer";

export default function RootLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5D8CB8",
        },

        headerTintColor: "#fff",

        headerTitleStyle: {
          fontWeight: "bold",
        },

        drawerStyle: {
          width: 290,
        },

        drawerActiveTintColor: "#5D8CB8",

        drawerInactiveTintColor: "#444",

        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />

      <Drawer.Screen
        name="about"
        options={{
          title: "About",
        }}
      />
    </Drawer>
  );
}
