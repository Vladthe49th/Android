import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";

import { useState } from "react";

export default function App() {
  type Task = {
    id: string;
    text: string;
  };

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.trim() === "") {
      Alert.alert("Помилка", "Будь ласка, введіть текст задачі.");
      return;
    }
    const newTask: Task = {
      id: Date.now().toString(),
      text: task,
    };

    setTasks([...tasks, newTask]);

    ToastAndroid.show("Задачу успішно додано!", ToastAndroid.SHORT);

    setTask("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Мій список задач</Text>

      <TextInput
        style={styles.input}
        placeholder="Введіть нову задачу..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Додати" onPress={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.text}</Text>

            <Button
              title="Видалити"
              color="red"
              onPress={() => deleteTask(item.id)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
  },

  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  taskText: {
    flex: 1,
    fontSize: 18,
    marginRight: 10,
  },
});
