import { FormButton } from '../components/FormButton'
import { SurveyPage } from '../components/survey'
/* import '../styles/index.module.css' */
import React, { useState, useEffect } from 'react'

export default function MyApp({}) {
  const [choices, setChoices] = useState([]);
  const [waterHeight, setWaterHeight] = useState(5);

  useEffect(() => {
    
      setWaterHeight(25)

  }, [])


  return (
    <>
      <SurveyPage
        colorOne='#3884ff'
        choices={choices}
        setChoices={setChoices}
        linkTo='/form2'
        page='form1'
        waterHeight={waterHeight}
        buttons={['burnaby', 'vancouver', 'richmond', 'surrey']}
        dialogue=''
        title='Where are you located?'
        logo='/logo-small-blue.png'
      ></SurveyPage>
    </>
  )
}
