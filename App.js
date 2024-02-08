import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Movies from "./screens/Movies";
import Watchlist from "./screens/Watchlist";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import MovieDetails from "./screens/MovieDetails";
import { useState } from "react";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MovieStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Movies}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerBackTitle: "Back",
          headerTintColor: "black",
          headerTitle: "",
          headerStyle: { backgroundColor: "#D3F3FF" },
        }}
        name="Movie"
        component={MovieDetails}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 80 },

          tabBarLabelStyle: { fontSize: 12 },
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#20A4F3" },
          headerLeft: () => {
            return (
              <Ionicons
                style={{ marginTop: 5, marginLeft: 10 }}
                name="menu"
                size={38}
                color="black"
                onPress={toggleMenu}
              />
            );
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="local-movies"
                  size={32}
                  color={focused ? "#20A4F3" : "#cccccc"}
                />
              );
            },
          }}
          name="Movies"
          component={MovieStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Entypo
                  name="heart"
                  size={24}
                  color={focused ? "#20A4F3" : "#cccccc"}
                />
              );
            },
          }}
          name="Watchlist"
          component={Watchlist}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // <StatusBar style="auto" />
  );
}
