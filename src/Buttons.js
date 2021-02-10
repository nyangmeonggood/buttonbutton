import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import cn from "classnames";
import { btnContainer } from "./btnContainer.js";
import { createElem } from "./createElem.js";
import SVGfilter from "./SVGfilter.js";
import { setText } from "./setText.js";
import "./scss/style.scss";

export default function Buttons({ text }) {
  const [filter, setFilter] = useState("");
  const containerRef = useRef(null),
    filterRef = useRef(null);

  const setFilterAll = () => {
    containerRef.current.classList.remove("setFilter");
    setFilter("");
  };

  const setFilterHover = () => {
    containerRef.current.classList.add("setFilter");
    setFilter("Hover");
  };

  const setFilterClick = () => {
    containerRef.current.classList.add("setFilter");
    setFilter("Click");
  };

  const setFilterMotion = () => {
    containerRef.current.classList.add("setFilter");
    setFilter("Motion");
  };

  const setFilterSelect = () => {
    containerRef.current.classList.add("setFilter");
    setFilter("Select");
  };

  const scrollEvent = () => {
    if (window.scrollY > 300) {
      document.querySelector("#root").classList.add("fixed");
    } else {
      document.querySelector("#root").classList.remove("fixed");
    }
  };

  useEffect(() => {
    createElem(text);

    Object.values(filterRef.current.children).map((item) => {
      item.addEventListener("click", () => {
        Object.values(filterRef.current.children).map((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  }, []);

  useEffect(() => {
    setText(text);
    document.querySelector(".Jiggle").dataset.jiggle = text;
  }, [text]);

  return (
    <>
      <div className="filter">
        {/* <div className="ham" ref={filterRef}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <ul ref={filterRef}>
          <li onClick={setFilterAll} className="active">
            All
          </li>
          <li onClick={setFilterHover}>Hover</li>
          <li onClick={setFilterClick}>Click</li>
          <li onClick={setFilterMotion}>Motion</li>
          <li onClick={setFilterSelect}>Select</li>
        </ul>
      </div>
      <Container ref={containerRef}>
        {btnContainer.map((item, index) => {
          return (
            <Box
              key={item.name.replace(/ /gi, "")}
              className={cn(item.type === filter ? "isFiltered" : "")}
            >
              <ButtonArea>
                {item.text ? (
                  <Button className={item.name.replace(/ /gi, "")}>
                    {text}
                  </Button>
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
                  {item.modal ? `${item.modal}&` : ""}
                  {item.type}
                  {item.duration ? `&${item.duration} ` : ""} | {item.skill}
                </Type>
                <Name>{`${index < 9 ? "0" + (index + 1) : index + 1}. ${
                  item.name
                }`}</Name>
              </InfoArea>
            </Box>
          );
        })}
        <SVGfilter />
      </Container>
    </>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-rows: repeat(${Math.floor(btnContainer.length / 4)}, 300px);
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &.setFilter {
    > div {
      display: none;
    }
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

  &.isFiltered {
    display: block !important;
  }
`;

const ButtonArea = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

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
