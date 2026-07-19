import { useEffect } from "react";

import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { useVideoPlayer, VideoView } from "expo-video";

import { VideoItem } from "../data/videos";

interface Props {
  visible: boolean;
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoPlayerModal({ visible, video, onClose }: Props) {
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;

  const player = useVideoPlayer(video?.video ?? null, (player) => {
    player.loop = false;
    player.play();
  });

  useEffect(() => {
    if (!visible) {
      player.pause();
    }
  }, [visible]);

  if (!video) {
    return null;
  }

  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={styles.container}>
        <VideoView
          player={player}
          style={isLandscape ? styles.fullscreenVideo : styles.video}
          nativeControls
        />

        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "black",

    justifyContent: "center",
    alignItems: "center",
  },

  video: {
    width: "100%",

    aspectRatio: 16 / 9,
  },

  fullscreenVideo: {
    width: "100%",

    height: "100%",
  },

  closeButton: {
    position: "absolute",

    top: 45,

    right: 20,

    width: 44,

    height: 44,

    borderRadius: 22,

    backgroundColor: "rgba(0,0,0,0.6)",

    justifyContent: "center",

    alignItems: "center",

    zIndex: 10,
  },

  closeText: {
    color: "white",

    fontSize: 25,

    fontWeight: "bold",
  },
});
