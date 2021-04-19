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
              colorOne="green"
              choices={choices}
              setChoices={setChoices}
              linkTo="/home"
              page="loading"
              waterHeight="110"
              buttons={["cotton", "animal", "plant", "synthetic"]}
              dialogue=""
            ></SurveyPage>


    </>

  )

}

