import { KeyboardEvent, useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PanelInput from "../../components/PanelInput/PanelInput";
import TitlePage from "../../components/Title/TitlePage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { userActions } from "../../store/user.slice";

export function Login() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const navigator = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleLoginClick = () => {
    if (input.trim()) {
      dispatch(userActions.login(input));
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
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleLoginClick();
            }
          }}
        />
        <Button ref={buttonRef} onClick={handleLoginClick}>
          {"Войти в профиль"}
        </Button>
      </PanelInput>
    </>
  );
}
