import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "../../styles";

const TodoDetails = () => {
  const { params } = useRoute();
  const { todo } = params || {};

  if (!todo) return <Text>No details found.</Text>;

  return (
    <View
      style={[
        styles.container,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>
        {todo.title}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Description: {todo.description || "No description"}
      </Text>
      <Text style={{ fontSize: 18 }}>
        Status: {todo.completed ? " Completed" : " In Progress"}
      </Text>
    </View>
  );
};

export default TodoDetails;
