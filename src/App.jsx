import { useRef, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import MovieItem from "./components/MovieItem/MovieItem";
import TitlePage from "./components/Title/TitlePage";
import BottomPanel from "./layouts/BottomPanel/BottomPanel";
import TopPanel from "./layouts/TopPanel/TopPanel";
import PanelInput from "./components/PanelInput/PanelInput";
import { useLocalStorage } from "./hooks/use-localStorage.hook";
import { BASE_PAGE_MOVIES } from "./constants/Constants";
import { UserContext } from "./context/UserContext";

function App() {
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  const [userNameData, setUserNameData] = useLocalStorage("data");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleLogin = () => {
    if (input.trim()) {
      setUserNameData((prevData) => {
        const updatedData = prevData.map((user) =>
          user.name === input ? { ...user, isLogined: true } : user
        );

        if (!prevData.some((user) => user.name === input)) {
          updatedData.push({ name: input, isLogined: true });
        }

        return updatedData;
      });
    }
    setInput("");
  };

  const handleLogout = () => {
    setUserNameData((prevData) =>
      prevData.map((user) => ({ ...user, isLogined: false }))
    );
  };

  return (
    <>
      <UserContext.Provider value={{ userNameData, handleLogout }}>
        <Header />
        <TopPanel>
          <TitlePage
            title={"Поиск"}
            text={
              "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
            }
          />
          <PanelInput isBasedPage={true}>
            <Input
              placeholder={(inputRef.current = "Введите название")}
              isBasePage={true}
              ref={inputRef}
            />
            <Button ref={buttonRef} text={(buttonRef.current = "Искать")} />
          </PanelInput>
        </TopPanel>
        <BottomPanel>
          {BASE_PAGE_MOVIES.map((el) => (
            <CardButton key={el.id}>
              <MovieItem img={el.img} rating={el.rating} title={el.title} />
            </CardButton>
          ))}
        </BottomPanel>
        <TopPanel>
          <TitlePage title={"Вход"} />
          <PanelInput isBasedPage={false}>
            <Input
              placeholder={(inputRef.current = "Ваше имя")}
              isBasePage={false}
              ref={inputRef}
              value={input}
              onChange={handleChange}
            />
            <Button
              ref={buttonRef}
              text={(buttonRef.current = "Войти в профиль")}
              onClick={handleLogin}
            />
          </PanelInput>
        </TopPanel>
      </UserContext.Provider>
    </>
  );
}

export default App;
