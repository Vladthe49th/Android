import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { VideoItem } from "../data/videos";

interface Props {
  item: VideoItem;
  onPress: () => void;
}

export default function VideoCard({ item, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.playOverlay}>
          <Text style={styles.playIcon}>▶</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <Text style={styles.date}>{item.date}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    overflow: "hidden",

    marginBottom: 18,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 220,
  },

  playOverlay: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    justifyContent: "center",
    alignItems: "center",
  },

  playIcon: {
    fontSize: 56,
    color: "rgba(255,255,255,0.92)",

    textShadowColor: "rgba(0,0,0,0.45)",
    textShadowRadius: 8,
  },

  info: {
    padding: 14,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },

  date: {
    marginTop: 6,
    fontSize: 14,
    color: "#777",
  },
});
