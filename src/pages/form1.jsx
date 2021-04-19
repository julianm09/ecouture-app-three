import { FormButton } from '../components/FormButton'
import { SurveyPage } from '../components/survey'
/* import '../styles/index.module.css' */
import React, { useState } from 'react'

export default function MyApp({}) {
  const [choices, setChoices] = useState([])

  return (
    <>
      <SurveyPage
        colorOne='#3884ff'
        choices={choices}
        setChoices={setChoices}
        linkTo='/form2'
        page='form1'
        waterHeight='25'
        buttons={['burnaby', 'vancouver', 'richmond', 'surrey']}
        dialogue='or closest to'
        title='Where are you located?'
        logo='/logo-small-blue.png'
      ></SurveyPage>
    </>
  )
}
