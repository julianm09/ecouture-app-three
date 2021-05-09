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
  overflow-x: hidden;
  overflow-y: hidden;
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
  color: white;
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

    if (count == 6) {
      
      setCompleteTask(true)
      /* setInstructions('swipe up to see how you can help') */
    }
  }

  const [completeTask, setCompleteTask] = useState(false)

  const [hide, setHide] = useState(false)

  const [instructions, setInstructions] = useState(
    'click to pick up the microfibers from the ocean'
  )

  return (
    <>
      <Container>

      {/* change image here  */}

      <CompletionCard completeImage="/garbage.png" completeTask={completeTask} completeMessage="You've unlocked a tip!" completeFact="To lessen the amount of textiles populating landfills try donating your clothes to thrift stores, where they can be reused and recycled instead."/>

        <Information>
        The average American throws out about 82 pounds of textile waste per year. Textiles can take up to 200+ years to decompose in landfills.
        </Information>

        <Menu
          hide={hide}
          setHide={setHide}
          logo='/logo-small-blue.png'
          iconColor={colors.blue}
          three={true}
        />

        <ResultsUI>click to clear the landfill</ResultsUI>

        <img
          src='/grass.png'
          style={{
            position: 'absolute',
            bottom: '0vh',
            width: '100%',
            height: '50vh',
            zIndex: '0',
            
          }}
        />

        <img 
          src='/garbage.png'
          onClick={(e) => handleClick(e)}
          style={{
            position: 'absolute',
            width:'250px',
            marginLeft: '-70px',
            marginTop: '25px',
            zIndex: '1',
          }}
        />

        <img 
          src='/garbage.png'
          onClick={(e) => handleClick(e)}
          style={{
            position: 'absolute',
            width:'250px',
            marginLeft: '70px',
            marginTop: '30px',
            zIndex: '1',
          }}
        />

        <img 
          src='/garbage.png'
          onClick={(e) => handleClick(e)}
          style={{
            position: 'absolute',
            width:'250px',
            marginTop: '15px',
            zIndex: '1',
          }}
        />

        <img 
          src='/garbage.png'
          onClick={(e) => handleClick(e)}
          style={{
            position: 'absolute',
            marginTop: '125px',
            marginLeft: '-100px',
            width:'250px',
            zIndex: '1',
          }}
        />

        <img 
          src='/garbage.png'
          onClick={(e) => handleClick(e)}
          style={{
            position: 'absolute',
            marginTop: '125px',
            marginLeft: '100px',
            width:'250px',
            zIndex: '1',
          }}
        />

        <img 
          src='/garbage.png'
          onClick={(e) => handleClick(e)}
          style={{
            position: 'absolute',
            marginTop: '155px',
            width:'250px',
            zIndex: '1',
          }}
        />

        <img
          src='/stinky-two.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'-100px',
            animation: 'stinkyFloatTwo 10s linear',
            animationDelay: '1s',
          }}
        />

        <img
          src='/stinky.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'50px',
            animation:  'stinkyFloatTwo 10s linear',
            animationDelay: '2s',
          }}
        />

        <img
          src='/stinky-two.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'-100px',
            animation: 'stinkyFloatTwo 10s linear',
            animationDelay: '3s',
            
          }}
        />

        <img
          src='/stinky.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'50px',
            animation:  'stinkyFloatTwo 10s linear',
            animationDelay: '4s',
          }}
        />

        <img
          src='/stinky-two.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'-100px',
            animation: 'stinkyFloatTwo 10s linear',
            animationDelay: '5s',           
          }}
        />

        <img
          src='/stinky.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'50px',          
            animation:  'stinkyFloatTwo 10s linear',
            animationDelay: '6s',            
          }}
        />

      <img
          src='/stinky-two.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'-100px',
            animation: 'stinkyFloatTwo 10s linear',
            animationDelay: '7s',            
          }}
        />

        <img
          src='/stinky.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'50px',          
            animation:  'stinkyFloatTwo 10s linear',
            animationDelay: '8s',           
          }}
        />

        <img
          src='/stinky-two.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'-100px',
            animation: 'stinkyFloatTwo 10s linear',
            animationDelay: '9s',            
          }}
        />

        <img
          src='/stinky.png'
          style={{
            opacity: '0%',
            position: 'absolute',
            width:'150px',
            marginLeft:'50px',          
            animation:  'stinkyFloatTwo 10s linear',
            animationDelay: '10s',          
          }}
        />
        

      </Container>
    </>
  )
}

export default Impact
