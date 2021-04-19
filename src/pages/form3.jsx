import { FormButton } from '../components/FormButton'
import { SurveyPage } from '../components/survey'
/* import '../styles/index.module.css' */
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

export default function MyApp({}) {
  const [choices, setChoices] = useState([])

  return (
    <>
      <SurveyPage
        title='What condition do you buy?'
        colorOne='#3884ff'
        choices={choices}
        setChoices={setChoices}
        linkTo='/form4'
        page='form3'
        waterHeight='75'
        buttons={['new', 'used', 'both']}
        dialogue='Buying used clothing can reduce your carbon footprint.'
      ></SurveyPage>
    </>
  )
}
