import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.trafficLight}>
        <View style={[styles.light, { backgroundColor: "red" }]}>
          <Text style={styles.lightText}>STOP</Text>
        </View>

        <View style={[styles.light, { backgroundColor: "yellow" }]}>
          <Text style={styles.lightText}>READY</Text>
        </View>

        <View style={[styles.light, { backgroundColor: "green" }]}>
          <Text style={styles.lightText}>GO</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  trafficLight: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 15,
  },

  light: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },

  lightText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
