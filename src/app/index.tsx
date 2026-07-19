import { useState } from "react";

import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import VideoCard from "../components/VideoCard";
import VideoPlayerModal from "../components/VideoPlayerModal";

import { VideoItem, videos } from "../data/videos";

export default function Index() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>YouTube Clone</Text>
      </View>

      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VideoCard item={item} onPress={() => openVideo(item)} />
        )}
        showsVerticalScrollIndicator={false}
      />

      <VideoPlayerModal
        visible={selectedVideo !== null}
        video={selectedVideo}
        onClose={closeVideo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f3f3f3",
  },

  header: {
    paddingVertical: 18,

    paddingHorizontal: 16,

    backgroundColor: "#ffffff",

    elevation: 4,
  },

  headerText: {
    fontSize: 28,

    fontWeight: "bold",

    color: "#ff0000",
  },
});
