import { FormButton } from '../components/FormButton'
import { SurveyPage } from '../components/survey'
/* import '../styles/index.module.css' */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'



export default function MyApp({}) {
  const [choices, setChoices] = useState([])

  return (
    <>

      <SurveyPage
        colorOne='#3884ff'
        choices={choices}
        setChoices={setChoices}
        linkTo='/form1'
        page='home'
        waterHeight='5'
        buttons={['get started']}
        dialogue='Check to see if your future clothing purchase is sustainable.'
        dialogueColor='#3884ff'
        title='Eco Calculator'
      ></SurveyPage>
    </>
  )
}
