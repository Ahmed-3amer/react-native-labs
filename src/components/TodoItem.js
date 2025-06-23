import { View, Text } from "react-native";
import { styles } from "../../styles";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <View style={styles.todoItem}>
      <Text
        style={[
          { fontSize: 20, fontWeight: "500" },
          todo.completed && styles.doneTodo,
        ]}
      >
        {todo.title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Feather
          name="trash"
          size={20}
          color="red"
          onPress={() => onDelete(todo.id)}
        />
        <AntDesign
          name="checkcircleo"
          size={20}
          color="green"
          onPress={() => onToggle(todo.id)}
        />
      </View>
    </View>
  );
};

export default TodoItem;
