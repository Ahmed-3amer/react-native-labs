import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../../styles";
import Todos from "../components/Todos";

const CompletedTasks = () => {
  const todos = useSelector((state) => state.todos.todos);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 15 }}>
        Completed Tasks
      </Text>

      {completedTodos.length > 0 ? (
        <Todos
          todos={completedTodos}
          onDelete={() => {}}
          onToggle={() => {}}
          onPressItem={() => {}}
        />
      ) : (
        <Text>No completed tasks found.</Text>
      )}
    </View>
  );
};

export default CompletedTasks;
