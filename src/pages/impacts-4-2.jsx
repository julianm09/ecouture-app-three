import ThreeCanvas from '../components/layout/_canvas'
import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Wave from 'react-wavify'
import { useRouter } from 'next/router'
import { RoundBlueButton } from '@/components/RoundBlueButton'
import {CompletionCard} from '../components/CompletionCard'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: ${colors.blue};
  position: relative

`


const Information = styled.div`
  width: 80vw;
  min-height: 100px;
  position: absolute;
  top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
`


const ResultsUI = styled.div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-family: Nunito;
  z-index: 500;
  animation: 3s blink infinite;
`


const Impact = () => {
  const props = useSpring({
    config: { duration: 2250 },
    number: 70,
    from: { number: 0 },
  })

  let count = 0

  const router = useRouter()

  const handleClick = (e) => {
    e.target.style.display = 'none'
    count++

    if (count == 1) {
      setCompleteTask(true)
      /* setInstructions('swipe up to see how you can help') */
    }
  }

  const [completeTask, setCompleteTask] = useState(false)

  const [hide, setHide] = useState(false)

  const [instructions, setInstructions] = useState(
    'Click to pick up the microfibers from the ocean'
  )

  return (
    <>
      <Container>

      {/* change image here  */}

      <CompletionCard completeImage="/water-drop.png" completeTask={completeTask} completeMessage="You've unlocked a task!" completeFact="To reduce the microfibers you produce, buy natural textiles and try washing less with cool water."/>

        <Information>
          U.S. and Canadian households release over 870 tons of plastic
          microfibers into the ocean every year from laundry alone.
        </Information>

        <Menu
          hide={hide}
          setHide={setHide}
          logo='/logo-small-blue.png'
          iconColor={colors.blue}
          three={true}
        />

        <ResultsUI>Click to pick up the microfibers from the ocean</ResultsUI>

        {/* do animations here  */}



<div
style={{
            
            
  position: 'relative'
}}>
        <img
          
          style={{
            
            
            height: '25vh',
            zIndex: '300',
            cursor: 'pointer',
          }}
          src='/sink.png'
        />

        <img
          onClick={handleClick}
          style={{
            position: 'absolute',
            animation: '1s water-drop ease-in infinite', 
            height: '10vh',
            zIndex: '300',
            cursor: 'pointer',
            top: '100px',
            left: '150px',
            
          }}
          src='/water-drop.png'
        />

</div>







        {/* do animations here  */}


      </Container>
    </>
  )
}

export default Impact
