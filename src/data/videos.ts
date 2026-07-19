export interface VideoItem {
  id: string;

  title: string;
  date: string;

  thumbnail: string;
  video: string;
}

export const videos: VideoItem[] = [
  {
    id: "1",
    title: "Привітання Обі-Вана",
    date: "15.07.2026",
    thumbnail:
      "https://static.wikia.nocookie.net/starwars/images/2/2a/He-says-the-thing.png/revision/latest?cb=20230113022153",
    video: "../../assets/video.mp4",
  },

  {
    id: "2",
    title: "Вечеря з Доббі",
    date: "16.07.2026",
    thumbnail:
      "https://static.wikia.nocookie.net/harrypotter/images/8/82/Dobby.jpg/revision/latest?cb=20230712061949",
    video: "",
  },

  {
    id: "3",
    title: "Expo Tutorial",
    date: "17.07.2026",
    thumbnail:
      "https://cdn1.expresscomputer.in/wp-content/uploads/2016/06/24155131/Hacker.jpg",
    video: "",
  },

  {
    id: "4",
    title: "Лара Крофт",
    date: "18.07.2026",
    thumbnail:
      "https://cdna.artstation.com/p/assets/images/images/075/273/992/large/hugo-buarque-13-modellara.jpg?1714140789",
    video: "",
  },
];
