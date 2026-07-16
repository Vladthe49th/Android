import * as SplashScreen from "expo-splash-screen";

import { Drawer } from "expo-router/drawer";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Drawer>
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

    headerStyle: {
      backgroundColor: "#5D8CB8",
    },

    headerTintColor: "#fff",

    headerTitleStyle: {
      fontWeight: "bold",
    },

    drawerActiveTintColor: "#5D8CB8",

    drawerLabelStyle: {
      fontSize: 16,
    },
  }}
></Drawer>;
