import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { colors } from "./color";

import { useRouter } from 'next/router'



//Initialize Base Styling.. this wont change//

const ButtonUI = styled.div`
  width: 90vw;
  height: 50px;

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

  

  let points = null
  let location

  const handleClick = (el) => {
    router.push(linkTo)

    const answer = el.target.innerHTML

    if (page == 'home'){

      localStorage.clear()
      /* console.log('form1' + answer) */
      
    } else if (page == 'form1'){

      
      answer == 'burnaby' ? location = 'burnaby' : answer == 'vancouver' ? location = 'vancouver' : answer == 'richmond' ? location = 'richmond' :  location = 'surrey' ;

      localStorage.setItem('location', JSON.stringify(location))
      /* console.log('form1' + answer) */
      
    } else if(page == 'form2'){
      /* console.log('form2' + answer) */
      answer == 'online' ? points += 5 : answer == 'local' ? points += 20 : answer == 'both' ? points += 10 : points+= 0;
    
    } else if (page == 'form3'){
      /* console.log('form3' + answer) */
      answer == 'new' ? points += 5 : answer == 'used' ? points += 20 : answer == 'both' ? points += 10 : points+= 0;
   
    } else if (page == 'form4'){
      /* console.log('form4' + answer) */
      answer == '1' ? points += 5 : answer == '2-3' ? points += 20 : answer == '4-5' ? points += 10 : points+= 5;
    
    } else if (page == 'form5'){
      /* console.log('form5' + answer) */
      answer == 'cotton, organic cotton' ? points += 15 : answer == 'wool, fleece' ? points += 10 : answer == 'hemp, bamboo' ? points += 20 : points+= 5;

    }
    
    let score = JSON.parse(localStorage.getItem('score'))
    /* console.log(points) */
    localStorage.setItem('score', JSON.stringify(points + score))

    console.log(JSON.parse(localStorage.getItem('score')))

    console.log(JSON.parse(localStorage.getItem('location')))


  }

  return (
    <div>
      <ButtonUI
        onClick={(e) => handleClick(e)}
        style={{
          background: hovered ? colorTwo: colorOne,
          color: hovered ? colorOne : colorTwo,
          border: hovered ? '1px solid'+ colorOne : '1px solid white',
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
    </div>
  );
};
