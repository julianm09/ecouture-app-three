import ThreeCanvas from '../components/layout/_canvas'

import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState, useEffect } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import * as Icon from 'react-feather'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  z-index: 0;
  display: flex;
  justify-content: center;
`

const Score = styled.div`
  text-align: center;
  position: absolute;
  left: 5vw;
  bottom: 12.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-size: 24px;
  font-weight: 700;
  font-family: Nunito;

  z-index: 0;
`

const Space = styled.div`
  width: 10px;
`

const ResultsUI = styled.div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.green};
  font-family: Nunito;
  font-size: 14px;
  animation: 5s ease blink infinite;
`

const Progress = styled.div`
  width: 90vw;

  position: absolute;
  bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: left;
  background: white;
  border: 1px solid ${colors.blue};
  font-family: Nunito;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

const ProgressBlue = styled.div`
  width: 10vw;
  min-height: 5vh;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.blue};
  transition: 1s ease;

  font-family: Nunito;
`

const Results = () => {
  /*   const checkLocal = () => {
    if (localStorage.getItem("completed") === null) {
      return [false, false, false, false ]
    } else {
      return JSON.parse(localStorage.getItem('completed'))
    }
  }

  useEffect(() => {
    console.log(progress)
  })

  const [progress, setProgress] = useState(checkLocal) 

  const progressGreen = progress.filter(Boolean).length * 5;

  */

  const [progress, setProgress] = useState([false, false, false, false])

  const [progressBar, setProgressBar] = useState(0)

  useEffect(() => {

    //get score
    let score = JSON.parse(localStorage.getItem('score'))

    let completed = () => {
            if (localStorage.getItem('completed') === null) {
              return [false, false, false, false]
            } else {
              return JSON.parse(localStorage.getItem('completed'))
            }
          }

    //check if points are complete and add increment to score
    let count = progress.filter(Boolean).length

    setProgressBar(score + ((100 - score) / 2 * count))

    setProgress(completed)


    console.log('rendered')
    

  },[])

  const props = useSpring({
    config: { duration: 2000 },
    number: progressBar/* + progressGreen */,
    from: { number: 0 },
  })

  const [hide, setHide] = useState(false)

  return (
    <Container>
      <Menu
        hide={hide}
        setHide={setHide}
        logo='/logo-small-blue.png'
        iconColor={colors.blue}
        three={true}
        backButton={false}
      />

      <ResultsUI>click the points to see your impact on the earth</ResultsUI>
      <ThreeCanvas r3f hide={hide} setHide={setHide} progress={progress} setProgress={setProgress}/>

      <Score>
        Eco Score:
        <Space></Space>
        <animated.div>
          {props.number.interpolate((val) => Math.floor(val))}
        </animated.div>
        <Space></Space>
        {/* progressGreen + progressBlue < 40 ? <Icon.Frown/> : progressGreen + progressBlue >= 40 && progressGreen + progressBlue <= 70 ? <Icon.Meh/> : <Icon.Smile/> */}
      </Score>

      <Progress>

        <div
        
          style={{
            width: progressBar + 'vw',
            minHeight: '5vh',
            bottom: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: colors.blue,
            transition: '2s ease',
          }}
        />

{/*         <div
          style={{
            width: progressBar[1]+ 'vw',
            minHeight: '5vh',
            bottom: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: colors.green,
            transition: '2s ease',
          }}
        /> */}

      </Progress>
    </Container>
  )
}

export default Results
