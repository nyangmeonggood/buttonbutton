import React, { useEffect } from "react";
import styled from "styled-components";
import { btnContainer } from "./btnContainer.js";
import { createElem } from "./createElem.js";
import SVGfilter from "./SVGfilter.js";
import "./scss/style.scss";
import { setText } from "./setText.js";

export default function Buttons({ text }) {
  useEffect(() => {
    createElem(text);
    console.log(btnContainer.length);
  }, []);

  useEffect(() => {
    setText(text);
  }, [text]);

  return (
    <Container>
      {btnContainer.map((item) => {
        return (
          <Box key={item.name.replace(/ /gi, "")}>
            <ButtonArea>
              {item.text ? (
                <Button className={item.name.replace(/ /gi, "")}>{text}</Button>
              ) : (
                <>
                  <Button className={item.name.replace(/ /gi, "")}>
                    {!item.posCenter && (
                      <>
                        <span></span>
                      </>
                    )}
                  </Button>
                  {item.posCenter && <TextSpan>{text}</TextSpan>}
                </>
              )}
            </ButtonArea>
            <InfoArea>
              <Type>
                {item.duration ? `${item.duration} ` : ""}
                {item.type} | {item.skill}
              </Type>
              <Name>{item.name}</Name>
            </InfoArea>
          </Box>
        );
      })}
      <SVGfilter />
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-rows: repeat(${Math.floor(btnContainer.length / 3)}, 300px);
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Box = styled.div`
  border: 1px dotted #111;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    padding-bottom: 4px;
  }
`;

const ButtonArea = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  @media screen and (max-width: 900px) {
    height: 190px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: bold;
`;

const TextSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-weight: bold;
  text-align: center;
`;

const InfoArea = styled.div`
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    height: 66px;
  }
`;

const Type = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-bottom: 4px;
  color: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 900px) {
    font-size: 0.6em;
    margin-bottom: 8px;
  }
`;

const Name = styled.h2`
  font-weight: bold;
  font-size: 22px;

  @media screen and (max-width: 900px) {
    font-size: 1.2em;
  }
`;
