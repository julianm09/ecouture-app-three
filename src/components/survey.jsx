import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { FormButton } from "./FormButton";
import Wave from "react-wavify";
import { useRouter } from 'next/router'



//Initialize Base Styling.. this wont change//

const SurveyPageUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  flex-direction: column;
`;

const TitleContainerUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  flex-direction: column;
  font-size: 24px;
  text-align: left;
  font-weight: 700;
  width: 90vw;
  color: white;
  text-align: center;
  -webkit-text-stroke: 1px #3884ff;

`;

const ButtonContainerUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  flex-direction: column;
  position: fixed; 
  top: 40vh;
  
`;

export const WaterUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: #3884ff;
  position: absolute;
  z-index: -100;
  bottom: 0;
  transition: 0.5s ease;
`;

export const DialogueUI = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  color: white;
  transition: 1s ease;
  height: 10vh;
  width: 90vw;
  position: absolute;
  bottom: 1vh;
  text-align: center;

`;

const LogoUI = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
`;

const Loading = styled.div`
  height: 100vh;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: white;
`;

export const SurveyPage = ({
  linkTo,
  page,
  waterHeight,
  buttons,
  dialogue,
  dialogueColor,
  title,
  colorOne, 
  logo = '/logo-small-blue.png'
}) => {
  let history = useHistory();

  const router = useRouter()


  useEffect(() => {
    if (page == "loading") {
      setTimeout(() => {
        router.push("/results");
      }, 2000);
    }
  });

  return (
    <SurveyPageUI>
      <LogoUI>
        <img src={logo} />
      </LogoUI>

      <TitleContainerUI style={{
        justifyContent:page == "home" ? "flex-end" : "center"
      }}>{title}</TitleContainerUI>

      {page == "loading" ? (
        <Loading>calculating your score...</Loading>
      ) : (
        <>
          <ButtonContainerUI>
            {buttons.map((button) => (
              <FormButton
                linkTo={linkTo}
                content={button}
                colorOne={colorOne}
                colorTwo="white"
                height="50px"
                page={page}
              ></FormButton>
            ))}
          </ButtonContainerUI>

          <DialogueUI style={{ color: dialogueColor }}>{dialogue}</DialogueUI>
        </>
      )}

      <Wave
        style={{
          height: waterHeight + "vh",
          position: "absolute",
          zIndex: "-100",
          bottom: "0",
          transition: "1s ease",
        }}
        fill="#3884FF"
        paused={false}
        options={{
          height: 10,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />





    </SurveyPageUI>
  );
};

