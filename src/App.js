import "./App.css";
import "./reset.css";
import "./scss/main.scss";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import cn from "classnames";
import { btnContainer } from "./btnContainer";
import Buttons from "./Buttons";

function App() {
  const [buttonText, setButtonText] = useState("Button");
  const [isLoaded, setIsLoaded] = useState(false);
  const inputRef = useRef(null);

  const onChange = (e) => {
    setButtonText(e.target.value);
  };

  const loadedClick = () => {
    setIsLoaded(true);
  };

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const randomMainTitle = btnContainer.filter(
    (item) => item.skill !== "SVG Filter"
  );
  const randomClass =
    randomMainTitle[Math.floor(Math.random() * randomMainTitle.length)];

  return (
    <>
      <Header
        onClick={loadedClick}
        className={cn(!isLoaded ? "notLoaded" : "")}
      >
        {randomClass.text ? (
          <MainButton className={randomClass.name.replace(/ /gi, "")}>
            {isLoaded ? "ButtonButton" : "Click Here!"}
          </MainButton>
        ) : (
          <>
            <MainButton
              className={randomClass.name.replace(/ /gi, "")}
            ></MainButton>
            <MainTextSpan>
              {isLoaded ? "ButtonButton" : "Click Here!"}
            </MainTextSpan>
          </>
        )}
      </Header>
      {isLoaded && (
        <input
          className="textInput"
          type="text"
          value={buttonText}
          onChange={onChange}
          maxLength="6"
          ref={inputRef}
        ></input>
      )}
      {isLoaded && <Buttons text={buttonText} />}
    </>
  );
}

const Header = styled.header`
  position: relative;
  width: 100%;
  margin-top: 100px;
  padding-top: 260px;
  height: 120px;
  transition: height 1s;

  &.notLoaded {
    height: 100vh;
    padding-top: 0px;
    margin-top: 0px;
  }
`;

const TitleGreet = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
`;

const MainButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
`;

const MainTextSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 1;
`;
export default App;
