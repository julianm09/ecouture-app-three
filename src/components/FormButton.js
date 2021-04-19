import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { colors } from "./color";

import { useRouter } from 'next/router'



//Initialize Base Styling.. this wont change//

const ButtonUI = styled.div`
  width: 90vw;
  height: 50px;
  border: 1px solid #3884ff;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0 25px 0;
  border: 1px solid white;
  font-weight: 600;
  transition: 0.3s ease-out;

`;

export const FormButton = ({
  linkTo,
  content,
  colorOne,
  colorTwo,
  height,
  page,
}) => {

  const router = useRouter()

  const [hovered, setHovered] = useState(false);
  let details = "";
  let icon = "";
  content == "cotton" ? (colorOne = colors.cyan) : (colorOne = colorOne);
  content == "animal" ? (colorOne = colors.orange) : (colorOne = colorOne);
  content == "plant" ? (colorOne = colors.green) : (colorOne = colorOne);
  content == "synthetic" ? (colorOne = colors.purple) : (colorOne = colorOne);



  if (content == "cotton" ) {
    height = "50px";
    colorOne = colors.cyan;
    content = "";
    details = "cotton, organic cotton";
    icon = '/cotton-icon-white.svg';
  } else if (content == "animal" ) {
    height = "50px";
    colorOne = colors.orange;
    content = "";
    details = "wool, fleece";
    icon = '/animal-icon-white.svg';
  } else if (content == "plant") {
    height = "50px";
    colorOne = colors.green;
    content = "";
    details = "hemp, bamboo";
    icon = '/plant-icon-white.svg';
  } else if (content == "synthetic" ) {
    height = "50px";
    colorOne = colors.purple;
    content = "";
    details = `polyester, nylon`;
    icon = 'synthetic-icon-white.svg';
  } 

  return (
    <a onClick={() => router.push(linkTo) } style={{ textDecoration: "none" }}>
      <ButtonUI
        onClick={() => {}}
        style={{
          background: colorOne,
          color: 'white',
          height: height,
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {content == "" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              position: "relative",
              overflow: 'hidden',
              height: '50px',
              justifyContent: 'space-between'
              
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'center',
                width: "20%",
                alignItems: "center",
                textAlign: "center",
                overflow: 'hidden',
                position: 'absolute',
         
                height: '100%'
                
              }}
            >
              <img
                style={{
                  width: "24px",
                  position: 'relative',
                  top: '0px',
                 
                }}
                src={icon}
              ></img>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                textAlign: "left",
                fontWeight: "600",
              }}
            >
              {details}
            </div>
          </div>
        ) : (
          (content = content)
        )}
      </ButtonUI>
    </a>
  );
};
