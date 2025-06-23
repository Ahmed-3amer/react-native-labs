import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles";
import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@todos";

const Home = () => {
  const { navigate } = useNavigation();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.log("Error loading todos:", error);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      } catch (error) {
        console.log("Error saving todos:", error);
      }
    };

    saveTodos();
  }, [todos]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
        Todo App
      </Text>

      <TodoForm onSubmit={handleAddTodo} />

      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => navigate(PATHS.COMPLETED_TASKS)}
        >
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>In Progress</Text>
        </TouchableOpacity>
      </View>

      {todos.length > 0 && (
        <Todos todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
      )}
    </View>
  );
};

export default Home;
