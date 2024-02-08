import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function MovieContainer({ data, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.movieContainer}>
      <View style={styles.movieImage}>
        <Image
          source={{ uri: data.src }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <Text style={{ fontSize: 20, textAlign: "center" }}>{data.title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  movieContainer: {
    width: "45%",
    backgroundColor: "white",
    alignItems: "center",
    padding: 5,
    margin: 10,
  },
  movieImage: {
    width: "100%",
    height: 250,
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
    fontSize: 12,
    textAlign: "center",
  },
});
