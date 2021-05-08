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

  const [waterHeight, setWaterHeight] = useState(100);

  useEffect(() => {
    
      setWaterHeight(120)

  }, [])

  

  return (
    <>
      <SurveyPage
        colorOne='green'
        choices={choices}
        setChoices={setChoices}
        linkTo='/home'
        page='loading'
        waterHeight= {waterHeight}
        buttons={['cotton', 'animal', 'plant', 'synthetic']}
        dialogue=''
        logo='/logo-small.png'
      ></SurveyPage>
    </>
  )
}
