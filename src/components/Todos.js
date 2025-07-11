import { FlatList } from "react-native";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete, onToggle, onPressItem }) => {
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
          onPress={() => onPressItem(item)}
        />
      )}
    />
  );
};

export default Todos;
