import { useState } from "react";
import {
  Button,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

interface Character {
  id: string;
  name: string;
  class: string;
  power: number;
  image: ImageSourcePropType;
}

const images = {
  homelander: require("../../assets/images/homelander.jpg"),
  maeve: require("../../assets/images/maeve.jpg"),
  starlight: require("../../assets/images/starlight.jpg"),
  deep: require("../../assets/images/deep.jpg"),
  butcher: require("../../assets/images/butcher.jpg"),
  hughie: require("../../assets/images/hughie.jpg"),
  kimiko: require("../../assets/images/kimiko.jpg"),
  soldierboy: require("../../assets/images/soldierboy.jpg"),
};

const initialCharacters: Character[] = [
  {
    id: "1",
    name: "Homelander",
    class: "The Seven",
    power: 100,
    image: images.homelander,
  },
  {
    id: "2",
    name: "Queen Maeve",
    class: "The Seven",
    power: 90,
    image: images.maeve,
  },
  {
    id: "3",
    name: "Starlight",
    class: "The Seven",
    power: 75,
    image: images.starlight,
  },
  {
    id: "4",
    name: "The Deep",
    class: "The Seven",
    power: 45,
    image: images.deep,
  },
  {
    id: "5",
    name: "Billy Butcher",
    class: "The Boys",
    power: 92,
    image: images.butcher,
  },
  {
    id: "6",
    name: "Hughie Campbell",
    class: "The Boys",
    power: 35,
    image: images.hughie,
  },
  {
    id: "7",
    name: "Kimiko",
    class: "The Boys",
    power: 88,
    image: images.kimiko,
  },
  {
    id: "8",
    name: "Soldier Boy",
    class: "Supes",
    power: 97,
    image: images.soldierboy,
  },
];

export default function Index() {
  const [characters, setCharacters] = useState(initialCharacters);

  const [name, setName] = useState("");

  const [heroClass, setHeroClass] = useState("The Seven");

  const [power, setPower] = useState("");

  const [selectedImage, setSelectedImage] =
    useState<keyof typeof images>("homelander");

  const addCharacter = () => {
    if (!name.trim() || !power.trim()) {
      return;
    }

    const newCharacter: Character = {
      id: Date.now().toString(),
      name,
      class: heroClass,
      power: Number(power),
      image: images[selectedImage],
    };

    setCharacters((prev) => [...prev, newCharacter]);

    setName("");
    setPower("");
    setHeroClass("The Seven");
    setSelectedImage("homelander");
  };

  const classOrder = ["The Seven", "The Boys", "Supes"];

  const sections = Object.values(
    characters.reduce(
      (groups, character) => {
        if (!groups[character.class]) {
          groups[character.class] = {
            title: character.class,
            data: [],
          };
        }

        groups[character.class].data.push(character);

        return groups;
      },
      {} as Record<string, { title: string; data: Character[] }>,
    ),
  ).sort((a, b) => classOrder.indexOf(a.title) - classOrder.indexOf(b.title));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>The Boys Character Database</Text>

        <Text style={styles.headerSubtitle}>Vought International Registry</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Character Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter name..."
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Power Level</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter power..."
          keyboardType="numeric"
          value={power}
          onChangeText={setPower}
        />

        <Text style={styles.label}>Character Class</Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={heroClass}
            onValueChange={(value) => setHeroClass(value)}
          >
            <Picker.Item label="The Seven" value="The Seven" />

            <Picker.Item label="The Boys" value="The Boys" />

            <Picker.Item label="Supes" value="Supes" />
          </Picker>
        </View>

        <Text style={styles.label}>Character Image</Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedImage}
            onValueChange={(value) => setSelectedImage(value)}
          >
            <Picker.Item label="Homelander" value="homelander" />

            <Picker.Item label="Queen Maeve" value="maeve" />

            <Picker.Item label="Starlight" value="starlight" />

            <Picker.Item label="The Deep" value="deep" />

            <Picker.Item label="Billy Butcher" value="butcher" />

            <Picker.Item label="Hughie" value="hughie" />

            <Picker.Item label="Kimiko" value="kimiko" />

            <Picker.Item label="Soldier Boy" value="soldierboy" />
          </Picker>
        </View>

        <Button title="Add Character" onPress={addCharacter} />
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>

            <Text>Class: {item.class}</Text>

            <Text style={styles.power}>⚡ Power: {item.power}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },

  header: {
    backgroundColor: "#111",
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  headerSubtitle: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 5,
  },

  form: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#fafafa",
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    color: "#222",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 18,
    overflow: "hidden",

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  image: {
    width: "100%",
    height: 230,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 12,
    marginHorizontal: 15,
  },

  power: {
    color: "#d32f2f",
    fontSize: 18,
    fontWeight: "700",
    margin: 15,
  },
});
