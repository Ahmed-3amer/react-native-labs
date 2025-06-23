import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Todos from "../components/Todos";

const STORAGE_KEY = "@todos";

const CompletedTasks = () => {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const loadCompleted = async () => {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        if (data) {
          const allTodos = JSON.parse(data);
          const completed = allTodos.filter((todo) => todo.completed);
          setCompletedTodos(completed);
        }
      } catch (err) {
        console.log("Error loading completed todos:", err);
      }
    };

    const unsubscribe = loadCompleted();

    return () => unsubscribe;
  }, []);

  const handleDelete = (id) => {
    const updated = completedTodos.filter((todo) => todo.id !== id);
    setCompletedTodos(updated);

    // Remove also from AsyncStorage
    AsyncStorage.getItem(STORAGE_KEY).then((data) => {
      if (data) {
        const all = JSON.parse(data);
        const updatedAll = all.filter((todo) => todo.id !== id);
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAll));
      }
    });
  };

  const handleToggle = (id) => {
    const updated = completedTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setCompletedTodos(updated);

    // Update AsyncStorage
    AsyncStorage.getItem(STORAGE_KEY).then((data) => {
      if (data) {
        const all = JSON.parse(data);
        const updatedAll = all.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAll));
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 15 }}>
        Completed Tasks
      </Text>
      {completedTodos.length > 0 ? (
        <Todos
          todos={completedTodos}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onPressItem={() => {}}
        />
      ) : (
        <Text>No completed tasks found.</Text>
      )}
    </View>
  );
};

export default CompletedTasks;
