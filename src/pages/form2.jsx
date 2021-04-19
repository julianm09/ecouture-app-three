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



    </>

  )

}

