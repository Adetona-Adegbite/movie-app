import { FlatList, Text, View } from "react-native";
import MovieContainer from "../components/MovieContainer";

export default function Movies({ navigation }) {
  const movies = [
    {
      id: 0,
      title: "Brave Citizen (2023) Episode 1",
      link: "/watch/brave-citizen-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/brave-citizen/thumb-w-350.png",
    },
    {
      id: 1,
      title: "A Tour Guide (2023) Episode 1",
      link: "/watch/people-you-can-trust-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/people-you-can-trust/thumb-w-350.png",
    },
    {
      id: 2,
      title: "A Lonely Island in the Distant Sea (2021) Episode 1",
      link: "/watch/a-lonely-island-in-the-distant-sea-2021-episode-1",
      src: "https://d1.cloud-images.com/movie/a-lonely-island-in-the-distant-sea/thumb-w-350.png",
    },
    {
      id: 3,
      title: "Cobweb (2023) Episode 1",
      link: "/watch/cobweb-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/cobweb/thumb-w-350.png",
    },
    {
      id: 4,
      title: "Broken Commandment (2022) Episode 1",
      link: "/watch/broken-commandment-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/hakai/thumb-w-350.png",
    },
    {
      id: 5,
      title: "Never Say Never (2023) Episode 1",
      link: "/watch/never-say-never-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/octagonal/thumb-w-350.png",
    },
    {
      id: 6,
      title: "Sleep (2023) Episode 1",
      link: "/watch/sleep-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/sleep/thumb-w-350.png",
    },
    {
      id: 7,
      title: "Honey Sweet (2023) Episode 1",
      link: "/watch/sweet-and-warm-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/sweet-and-warm/thumb-w-350.png",
    },
    {
      id: 8,
      title: "The Limit (2022) Episode 1",
      link: "/watch/the-limit-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/the-limit/thumb-w-350.png",
    },
    {
      id: 9,
      title: "Kamen Rider: Beyond Generations (2021) Episode 1",
      link: "/watch/kamen-rider-beyond-generations-2021-episode-1",
      src: "https://d1.cloud-images.com/movie/kamen-rider-beyond-generations/thumb-w-350.png",
    },
    {
      id: 10,
      title: "For The New Emperor (2020) Episode 1",
      link: "/watch/for-the-new-emperor-2020-episode-1",
      src: "https://d1.cloud-images.com/movie/for-the-new-emperor/thumb-w-350.png",
    },
    {
      id: 11,
      title: "Ballerina (2023) Episode 1",
      link: "/watch/ballerina-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/ballerina/thumb-w-350.png",
    },
    {
      id: 12,
      title: "As Long As We Both Shall Live (2023) Episode 1",
      link: "/watch/my-happy-marriage-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/my-happy-marriage/thumb-w-350.png",
    },
    {
      id: 13,
      title: "Target (2023) Episode 1",
      link: "/watch/target-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/open-the-door/thumb-w-350.png",
    },
    {
      id: 14,
      title: "Devils (2023) Episode 1",
      link: "/watch/devils-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/after/thumb-w-350.png",
    },
    {
      id: 15,
      title: "My Precious (2023) Episode 6",
      link: "/watch/my-precious-2023-episode-6",
      src: "https://d1.cloud-images.com/movie/my-precious/thumb-w-350.png",
    },
    {
      id: 16,
      title: "This Child Is Evil (2022) Episode 1",
      link: "/watch/this-child-is-evil-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/this-child-is-evil/thumb-w-350.png",
    },
    {
      id: 17,
      title: "Concrete Utopia (2023) Episode 1",
      link: "/watch/concrete-utopia-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/concrete-utopia/thumb-w-350.png",
    },
    {
      id: 18,
      title: "Smugglers (2023) Episode 1",
      link: "/watch/smugglers-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/smugglers/thumb-w-350.png",
    },
    {
      id: 19,
      title: "Wedding High (2022) Episode 1",
      link: "/watch/wedding-high-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/wedding-high/thumb-w-350.png",
    },
    {
      id: 20,
      title: "My Tempo (2022) Episode 1",
      link: "/watch/my-tempo-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/my-tempo/thumb-w-350.png",
    },
    {
      id: 21,
      title: "On the Edge (2022) Episode 1",
      link: "/watch/devoted-to-evil-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/devoted-to-evil/thumb-w-350.png",
    },
    {
      id: 22,
      title: "Someday or One Day: The Movie (2022) Episode 1",
      link: "/watch/someday-or-one-day-the-movie-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/someday-or-one-day-the-movie/thumb-w-350.png",
    },
    {
      id: 23,
      title: "The Moon (2023) Episode 1",
      link: "/watch/the-moon-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/the-moon/thumb-w-350.png",
    },
    {
      id: 24,
      title: "The Hill of Secrets (2022) Episode 1",
      link: "/watch/the-hill-of-secrets-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/the-hill-of-secrets/thumb-w-350.png",
    },
    {
      id: 25,
      title: "Mondays (2022) Episode 1",
      link: "/watch/mondays-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/mondays/thumb-w-350.png",
    },
    {
      id: 26,
      title: "Stay With Me (2022) Episode 1",
      link: "/watch/stay-with-me-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/stay-with-me-/thumb-w-350.png",
    },
    {
      id: 27,
      title: "Sayounara Konbanwa (2022) Episode 1",
      link: "/watch/sayounara-konbanwa-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/sayounara-konbanwa/thumb-w-350.png",
    },
    {
      id: 28,
      title: "Silent Parade (2022) Episode 1",
      link: "/watch/silent-parade-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/silent-parade/thumb-w-350.png",
    },
    {
      id: 29,
      title: "Offbeat Cops (2022) Episode 1",
      link: "/watch/offbeat-cops-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/offbeat-cops/thumb-w-350.png",
    },
    {
      id: 30,
      title: "Ghost Book (2022) Episode 1",
      link: "/watch/ghost-book-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/ghost-book/thumb-w-350.png",
    },
    {
      id: 31,
      title: "Marry My Dead Body (2023) Episode 1",
      link: "/watch/marry-my-dead-body-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/marry-my-dead-body/thumb-w-350.png",
    },
    {
      id: 32,
      title: "Cicadas (2022) Episode 1",
      link: "/watch/cicadas-episode-1",
      src: "https://d1.cloud-images.com/movie/cicadas/thumb-w-350.png",
    },
    {
      id: 33,
      title: "Shin Kamen Rider (2023) Episode 1",
      link: "/watch/shin-kamen-rider-episode-1",
      src: "https://d1.cloud-images.com/movie/shin-kamen-rider/thumb-w-350.png",
    },
    {
      id: 34,
      title: "The Contorted House (2021) Episode 1",
      link: "/watch/the-contorted-house-episode-1",
      src: "https://d1.cloud-images.com/movie/the-contorted-house/thumb-w-350.png",
    },
    {
      id: 35,
      title: "The Childe (2023) Episode 1",
      link: "/watch/the-childe-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/sad-tropical/thumb-w-350.png",
    },
    {
      id: 36,
      title: "Say Yes Again (2022) Episode 1",
      link: "/watch/say-yes-again-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/say-yes-again/thumb-w-350.png",
    },
    {
      id: 37,
      title: "Goddamned Asura (2022) Episode 1",
      link: "/watch/goddamned-asura-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/goddamned-asura-2022/thumb-w-350.png",
    },
    {
      id: 38,
      title: "Phases of the Moon (2022) Episode 1",
      link: "/watch/phases-of-the-moon-2022-episode-1",
      src: "https://d1.cloud-images.com/movie/the-waxing-and-waning-of-the-moon/thumb-w-350.png",
    },
    {
      id: 39,
      title: "The Roundup: No Way Out (2023) Episode 1",
      link: "/watch/the-roundup-no-way-out-2023-episode-1",
      src: "https://d1.cloud-images.com/movie/the-outlaws-3/thumb-w-350.png",
    },
  ];
  function pressHandler(item) {
    navigation.navigate("Movie", { movieData: item });
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#D3F3FF",
        padding: 5,
        alignItems: "center",
      }}
    >
      <FlatList
        style={{ flex: 1 }}
        data={movies}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <MovieContainer
              onPress={pressHandler.bind(this, item)}
              data={item}
            />
          );
        }}
      />
    </View>
  );
}
