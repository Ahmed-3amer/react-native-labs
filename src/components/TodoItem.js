import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const TodoItem = ({ todo, onDelete, onToggle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.todoItem}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            ...(todo.completed && styles.doneTodo),
          }}
        >
          {todo.title}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity onPress={() => onDelete(todo.id)}>
            <Feather name="trash" size={20} color="red" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onToggle(todo.id)}>
            <AntDesign name="checkcircleo" size={20} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
