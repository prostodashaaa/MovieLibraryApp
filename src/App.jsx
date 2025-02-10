import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import MovieItem from "./components/MovieItem/MovieItem";
import TitlePage from "./components/Title/TitlePage";
import BottomPanel from "./layouts/BottomPanel/BottomPanel";
import TopPanel from "./layouts/TopPanel/TopPanel";

const BASE_PAGE_MOVIES = [
  {
    id: 1,
    img: "/public/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png",
    rating: 324,
    title: "Black Widow",
  },
  {
    id: 2,
    img: "/public/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png",
    rating: 576,
    title: "Shang Chi",
  },
  {
    id: 3,
    img: "/public/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png",
    rating: 678,
    title: "Loki",
  },
  {
    id: 4,
    img: "/public/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png",
    rating: 678,
    title: "Loki",
  },
  {
    id: 5,
    img: "/public/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png",
    rating: 678,
    title: "Loki",
  },
  {
    id: 6,
    img: "/public/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png",
    rating: 678,
    title: "Loki",
  },
  {
    id: 7,
    img: "/public/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png",
    rating: 678,
    title: "Loki",
  },
  {
    id: 8,
    img: "/public/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png",
    rating: 678,
    title: "Loki",
  },
  {
    id: 9,
    img: "/public/Shang-Chi-and-the-Legend-of-the-Ten-Rings-Releases-New 1.png",
    rating: 678,
    title: "Loki",
  },
];

function App() {
  const data = [
    {
      title: "Поиск",
      text: "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.",
    },
  ];

  return (
    <>
      <Header />
      <TopPanel>
        <TitlePage title={data[0].title} text={data[0].text} />
        <div className="top-panel__search">
          <Input
            placeholder={"Введите название"}
            className="input-field__wrapper"
          />
          <Button text={"Искать"} />
        </div>
      </TopPanel>
      <BottomPanel>
        {BASE_PAGE_MOVIES.map((el) => (
          <CardButton key={el.id}>
            <MovieItem img={el.img} rating={el.rating} title={el.title} />
          </CardButton>
        ))}
      </BottomPanel>
    </>
  );
}

export default App;
