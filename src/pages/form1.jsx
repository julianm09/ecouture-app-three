import { FormButton } from "../components/FormButton";
import { SurveyPage } from "./survey";
/* import '../styles/index.module.css' */
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default function MyApp({ }) {

  const [choices, setChoices] = useState([]);

  return (

    <>

    <Router>
      <div className="App">
        <Switch>
        <Redirect exact from="/" to="/home" />
          <Route path="/home">
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
          </Route>

          <Route path="/form1">
            <SurveyPage
            colorOne="#3884ff"
              choices={choices}
              setChoices={setChoices}
              linkTo="/form2"
              page="form1"
              waterHeight="25"
              buttons={["burnaby", "vancouver", "richmond", "surrey"]}
              dialogue="or closest to"
              title="Where are you located?"
            ></SurveyPage>
          </Route>

          <Route path="/form2">
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
          </Route>

          <Route path="/form3">
            <SurveyPage
            title="What condition do you buy?"
            colorOne="#3884ff"
              choices={choices}
              setChoices={setChoices}
              linkTo="/form4"
              page="form3"
              waterHeight="75"
              buttons={["new", "used", "both"]}
              dialogue="Buying used clothing can reduce your carbon footprint."
            ></SurveyPage>
          </Route>

          <Route path="/form4">
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
          </Route>

          <Route path="/loading">
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
          </Route>
        </Switch>
      </div>
    </Router>


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

