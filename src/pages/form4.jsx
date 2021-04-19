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
             title="What are your clothes made from?"
              colorOne="green"
              choices={choices}
              setChoices={setChoices}
              linkTo="/loading"
              page="form4"
              waterHeight="100"
              buttons={["cotton", "animal", "plant", "synthetic"]}
              dialogue="* or most of your clothes"
            ></SurveyPage>
   

    </>

  )

}

