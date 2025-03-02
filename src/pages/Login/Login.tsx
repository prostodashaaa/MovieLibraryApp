import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PanelInput from "../../components/PanelInput/PanelInput";
import TitlePage from "../../components/Title/TitlePage";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const { handleLogin } = useUser();
  const navigator = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleLoginClick = () => {
    if (input.trim()) {
      handleLogin(input);
      setInput("");
      navigator("/");
    }
  };

  return (
    <>
      <TitlePage title={"Вход"} />
      <PanelInput isBasedPage={false}>
        <Input
          placeholder={"Ваше имя"}
          isBasePage={false}
          ref={inputRef}
          value={input}
          onChange={handleChange}
        />
        <Button ref={buttonRef} onClick={handleLoginClick}>
          {"Войти в профиль"}
        </Button>
      </PanelInput>
    </>
  );
}
