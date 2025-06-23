import { FlatList } from "react-native";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete, onToggle }) => {
  return (
    <FlatList
      data={todos}
      style={styles.todosContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TodoItem
          todo={item}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      )}
    />
  );
};

export default Todos;
