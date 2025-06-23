import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTasks from "../pages/CompletedTasks";
import StackNavigator from "./StackNavigator";
// import { PATHS } from "./Router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const PATHS = {
  HOME: "Home Page",
  COMPLETED_TASKS: "Completed Tasks",
  DETAILS: "Todo Details",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
          tabBarIcon: ({ color, size }) => {
            if (route.name === PATHS.HOME) {
              return <Ionicons name="home-outline" size={size} color={color} />;
            } else if (route.name === PATHS.COMPLETED_TASKS) {
              return (
                <MaterialIcons name="done-all" size={size} color={color} />
              );
            }
          },
        })}
      >
        <Tab.Screen name={PATHS.HOME} component={StackNavigator} />
        <Tab.Screen name={PATHS.COMPLETED_TASKS} component={CompletedTasks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
