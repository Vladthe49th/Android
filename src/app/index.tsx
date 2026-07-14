import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Sound from "react-native-sound";
import Video from "react-native-video";

export default function Index() {
  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);

  const [showVideo, setShowVideo] = useState(false);

  const playSuccessSound = () => {
    const successSound = new Sound(
      "../../assets/success.mp3",
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log("Не вдалося завантажити звук:", error);
          return;
        }

        successSound.play((success) => {
          if (!success) {
            console.log("Помилка під час відтворення звуку.");
          }

          successSound.release();
        });
      },
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Демонстрація відеоплеєра</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setLoading(true);

          setProgress(0);

          const interval = setInterval(() => {
            setProgress((previous) => {
              if (previous >= 100) {
                clearInterval(interval);

                setLoading(false);

                playSuccessSound();

                setShowVideo(true);

                return 100;
              }

              return previous + 1;
            });
          }, 40);
        }}
      >
        <Text style={styles.buttonText}>Включити відео</Text>
      </TouchableOpacity>

      {loading && (
        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${progress}%`,
              },
            ]}
          />
        </View>
      )}

      {loading && (
        <Text style={styles.progressText}>Завантаження... {progress}%</Text>
      )}

      {showVideo && (
        <Video
          source={require("../../assets/video.mp4")}
          style={styles.video}
          resizeMode="contain"
          controls={true}
          paused={false}
          repeat={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",

    justifyContent: "center",
    alignItems: "center",

    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",

    marginBottom: 50,
  },

  button: {
    backgroundColor: "#1976D2",

    paddingVertical: 16,
    paddingHorizontal: 35,

    borderRadius: 10,

    elevation: 5,
  },

  buttonText: {
    color: "white",

    fontSize: 20,
    fontWeight: "bold",
  },

  progressContainer: {
    width: "90%",

    height: 20,

    backgroundColor: "#d9d9d9",

    borderRadius: 12,

    marginTop: 35,

    overflow: "hidden",
  },

  progressFill: {
    height: "100%",

    backgroundColor: "#4CAF50",
  },

  progressText: {
    marginTop: 12,

    fontSize: 18,

    fontWeight: "600",
  },

  video: {
    width: 340,

    height: 220,

    marginTop: 35,

    borderRadius: 12,
  },
});
