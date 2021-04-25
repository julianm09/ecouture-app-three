import ThreeCanvas from '../components/layout/_canvas'

import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState, useEffect } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  z-index: 0;
  display: flex;
  justify-content: center;
`

const Score = styled.div`

 
  position: absolute;
  text-align: left;
  left: 5vw;
  bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-size: 18px;
  font-weight: 700;
  font-family: Nunito;

  z-index: 0;
`

const Space = styled.div`
  width: 10px;
`

const ResultsUI = styled.div`
  width: 100vw;
  min-height: 100px;
  position: absolute;
  top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-family: Nunito;
`

const Progress = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: left;
  background: white;
  border: 1px solid ${colors.blue};
  font-family: Nunito;
`

const ProgressBar = styled.div`
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

  const completion = progress.filter(Boolean).length * 5;

  */





  
  const [completion, setCompletion] = useState(0)

  const [progress, setProgress] = useState(0)

  const props = useSpring({
    config: { duration: 2000 },
    number: progress /* + completion */,
    from: { number: 0 },
  })


  useEffect(() => {


    //get score
    let score = JSON.parse(localStorage.getItem('score'))


    //calculate added score increments 
    setCompletion((100 - score) / 4)

    //check if points are complete and add increment to score 
    


    //set progressbar to score 
    setProgress(score)

    

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
      <ThreeCanvas r3f hide={hide} setHide={setHide} />



      <ResultsUI>Click the points to see your impact on the earth</ResultsUI>
    
    <Progress>
      <animated.div style={{
        width: progress + 'vw',
        minHeight: '5vh',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: colors.blue,
        transition: '2s ease'
      }}/>

<animated.div style={{
        width: completion + 'vw',
        minHeight: '5vh',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: colors.green,
        transition: '2s ease'
      }}/>

      <Score>
        Your Eco Score 
        <Space></Space>
        <animated.div>
          {props.number.interpolate((val) => Math.floor(val))}
        </animated.div>
      </Score>
    </Progress>
    
    </Container>
  )
}

export default Results
