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
        title='What makes up most of your wardrobe?'
        colorOne='green'
        choices={choices}
        setChoices={setChoices}
        linkTo='/loading'
        page='form5'
        waterHeight='100'
        buttons={['cotton', 'animal', 'plant', 'synthetic']}
        dialogue=''
        logo='/logo-small.png'
      ></SurveyPage>
    </>
  )
}
