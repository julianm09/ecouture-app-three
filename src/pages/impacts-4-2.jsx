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
import { Loader } from '@/components/Loader'

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
  animation: 5s blink-1 infinite;
  text-align: center;
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
    document.getElementById('drip').style.display = 'none'
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
    <Loader/>
      <Container>

      {/* change image here  */}

      <CompletionCard completeImage="/water-drop.png" completeTask={completeTask} completeMessage="You've unlocked a tip!" completeFact="Avoid purchasing clothing made of cotton as cotton requires more water to dye than other textiles."/>

        <Information>
        The dyeing process used to dye textiles is enough water to fill 2 million Olympic-sized swimming pools each year.
        </Information>

        <Menu
          hide={hide}
          setHide={setHide}
          logo='/logo-small-blue.png'
          iconColor={colors.blue}
          three={true}
        />

        <ResultsUI>Click to turn off the tap.</ResultsUI>

        {/* do animations here  */}



<div
style={{
            
            
  position: 'relative'
}}>
        <img

onClick={handleClick}
          
          style={{
            
            
            height: '25vh',
            zIndex: '300',
            cursor: 'pointer',
          }}
          src='/sink.png'
        />

        <img
        id="drip"
          onClick={handleClick}
          style={{
            position: 'absolute',
            animation: '1s water-drop ease-in infinite', 
            height: '10vh',
            zIndex: '300',
            cursor: 'pointer',
            top: '100px',
            left: '16vh',
            
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
