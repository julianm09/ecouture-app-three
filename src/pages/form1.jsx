import { FormButton } from "../components/FormButton";
import { SurveyPage } from "../components/survey";
/* import '../styles/index.module.css' */
import React, { useState } from "react";



export default function MyApp({ }) {

  const [choices, setChoices] = useState([]);

  return (

    <>



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

