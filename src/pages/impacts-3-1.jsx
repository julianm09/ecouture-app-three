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

const Tree = styled.img`
  height: 45%;
  right: 40vw;
  position:absolute;
  top: -50vh;
  z-index: 1;
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
    document.getElementById('tree1').style.animation = 'treedrop 4s ease forwards'
    document.getElementById('tree2').style.animation = 'treedrop 4s ease forwards 2s'
    count++

    setTimeout(() => {
      setCompleteTask(true)
    }, 5500)
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

      <CompletionCard completeImage="/tree.png" completeTask={completeTask} completeMessage="You've unlocked a task!" completeFact="Try not to buy clothing made from rayon or viscose, as these fibers are almost completely constucted from wood pulp."/>

        <Information>
          70 million trees are cut down each year to make our clothes.
        </Information>

        <Menu
          hide={hide}
          setHide={setHide}
          logo='/logo-small-blue.png'
          iconColor={colors.blue}
          three={true}
        />

        <ResultsUI>click to plant more trees</ResultsUI>

        {/* do animations here  */}

        <img style={{
          position:'absolute',
          bottom:'0vh',
          width:'100%',
          height:'100%'
        }}
        onClick={(e) => handleClick(e)}
        src='/grass.png'
        />

        <img style={{
          position:'absolute',
          bottom:'20vh',
          height:'40%',
          zIndex:'1'
        }}
        onClick={(e) => handleClick(e)}
        src='/tree.png'
        />

        <img style={{
          position:'absolute',
          bottom:'30vh',
          height:'30%',
          left:'50vw',
          zIndex:'0'
        }}
        onClick={(e) => handleClick(e)}
        src='/tree.png'
        />

        <img style={{
          position:'absolute',
          bottom:'35vh',
          height:'28%',
          right:'50vw',
          zIndex:'0'
        }}
        onClick={(e) => handleClick(e)}
        src='/tree.png'
        />

        <Tree
        src='/tree.png'
        id='tree1'
        />

        <Tree style={{
          left:'50vw',
          height:'35%'
        }}
        src='/tree.png'
        id='tree2'
        />







        {/* do animations here  */}


      </Container>
    </>
  )
}

export default Impact
