import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useRef } from "react";
import WebView from "react-native-webview";

export default function MovieDetails({ route, navigation }) {
  const [inWatchList, setInWatchList] = useState(false);
  const webviewRef = useRef(null);
  function toggleWatchList() {
    setInWatchList(!inWatchList);
  }
  navigation.setOptions({
    headerRight: () => {
      return (
        <AntDesign
          style={{ marginTop: 3 }}
          name="heart"
          size={32}
          color={inWatchList ? "red" : "white"}
          onPress={toggleWatchList}
        />
      );
    },
  });
  const data = route.params.movieData;

  return (
    <WebView
      ref={webviewRef}
      style={{ flex: 1 }}
      source={{ uri: "https://www.asianhdplay.org" + data.link }}
      onNavigationStateChange={({ url }) => {
        if (url !== "https://www.asianhdplay.org" + data.link) {
          webviewRef.current.goBack();
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#D3F3FF",
    alignItems: "center",
    padding: 20,
  },

  movieImage: {
    width: "90%",
    height: 400,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  movieDetails: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  movieDescription: {
    fontSize: 14,
    textAlign: "center",
    padding: 10,
  },
});
