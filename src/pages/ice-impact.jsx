import ThreeCanvas from '../components/layout/_canvas'
import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Wave from 'react-wavify'
import { useRouter } from 'next/router'
import '../styles/animation.module.css'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Information = styled.div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-size: 18px;
  font-weight: 700;
  font-family: Nunito;
`

const Space = styled.div`
  width: 10px;
`

const ResultsUI = styled.div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Nunito;
  z-index: 100;
`

const CitySkyline = styled.div`

    width: 90vw;
    max-width: 500px;
    min-height: 400px;
    position: absolute;
    top: 15vh;
    z-index: 0;
   
    // animation-name: cityDown;
    // animation-duration: 3s;
    // animtaion-iteration-count: infinite;

    // animation: cityDown 30s ease infinite
    
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
    e.target.style.height = '45vh'
    count++

    // if (count == 4) {
    //   router.push('/results')
    // }
  }

  const [hide, setHide] = useState(false)

  return (
    <Container>
      <Information>
      Sea levels are currently rising at a rate of 1/8 inch every year.
      </Information>

      <Menu
        hide={hide}
        setHide={setHide}
        logo='/logo-small-blue.png'
        iconColor={colors.blue}
        three={true}
      />

      <ResultsUI></ResultsUI>

      <CitySkyline
      onClick={(e) => handleClick(e)}>
          <img src='/skyline.svg'></img>
      </CitySkyline>

      
      <Wave
        style={{
          height: '50vh',
          position: 'absolute',
          zIndex: '0',
          bottom: '0',
          transition: '1s ease',
          animation: 'waterUp 60s ease infinite'
        }}
        fill='#3884FF'
        paused={false}
        options={{
          height: 10,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
        onClick={(e) => handleClick(e)}
      />




    </Container>
  )
}

export default Impact
