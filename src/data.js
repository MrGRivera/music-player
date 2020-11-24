import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
  return [
    {
      name: "Jazz Cabbage",
      artist: "Ian Ewing, Strehlow",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#ba4a46", "#fdf0dd"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
    },
    {
      name: "Maple Leaf Pt.2",
      artist: "Philanthrope",
      cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#414628", "#dd8361"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
    },
  ];
};

export default chillHop