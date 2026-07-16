import { Image, StyleSheet, Text, View } from "react-native";

import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/butcher.png")}
            style={styles.avatar}
          />

          <Text style={styles.name}>Vladislav</Text>

          <Text style={styles.username}>@myfirstapp</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>MyFirstApp</Text>

        <Text style={styles.footerVersion}>Version 1.0</Text>

        <Text style={styles.footerYear}>© 2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#5D8CB8",
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
  },

  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  username: {
    color: "#E8EEF4",
    fontSize: 14,
    marginTop: 4,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingVertical: 20,
    alignItems: "center",
  },

  footerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  footerVersion: {
    color: "#777",
    marginTop: 4,
  },
  footerYear: {
    color: "#999",
    marginTop: 2,
    fontSize: 12,
  },
});
