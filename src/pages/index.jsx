

import { FormButton } from "../components/FormButton";
import { SurveyPage } from "../components/survey";
/* import '../styles/index.module.css' */
import React, { useState } from "react";
import Results from './results'

import { useRouter } from 'next/router'


export default function MyApp () {

    const [choices, setChoices] = useState([]);

    return (
  
      <>

  
        <SurveyPage
              colorOne="#3884ff"
              choices={choices}
              setChoices={setChoices}
              linkTo="/form1"
              page="home"
              waterHeight="5"
              buttons={["get started"]}
              dialogue="Check to see if your future clothing purchase is sustainable."
              dialogueColor="#3884ff"
              title="Eco Calculator"
            ></SurveyPage>

      <style jsx global>{`

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap');

  
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            font-family: Nunito;
            
          }
  
          * {
        
          margin: 0
        }
  
        a{
          color: white;
        }
      `}
      </style>
  
      </>
    )
}



