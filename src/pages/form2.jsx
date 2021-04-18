import { FormButton } from "../components/FormButton";
import { SurveyPage } from "../components/survey";
/* import '../styles/index.module.css' */
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default function MyApp({ }) {

  const [choices, setChoices] = useState([]);

  return (

    <>




            <SurveyPage
            colorOne="#3884ff"
              choices={choices}
              setChoices={setChoices}
              linkTo="/form3"
              page="form2"
              waterHeight="65"
              buttons={["on-line", "in-store", "both"]}
              dialogue="Shopping online contributes significantly more waste than in store."
              title="Where do you shop?"
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

