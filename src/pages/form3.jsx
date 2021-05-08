import { FormButton } from '../components/FormButton'
import { SurveyPage } from '../components/survey'
/* import '../styles/index.module.css' */
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

export default function MyApp({}) {
  const [choices, setChoices] = useState([])
  const [waterHeight, setWaterHeight] = useState(45);

  useEffect(() => {
    
      setWaterHeight(60)

  }, [])

  return (
    <>
      <SurveyPage
        title='What condition do you buy?'
        colorOne='#3884ff'
        choices={choices}
        setChoices={setChoices}
        linkTo='/form4'
        page='form3'
        waterHeight={waterHeight}
        buttons={['new', 'used', 'both']}
        dialogue='Buying used clothing can reduce your carbon footprint.'
      ></SurveyPage>
    </>
  )
}
