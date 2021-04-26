import ThreeCanvas from '../components/layout/_canvas'
import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Wave from 'react-wavify'
import { useRouter } from 'next/router'

const Container = styled.div`
  width: 100vw;
  height: 200vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Information = styled.div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  top: 25vh;
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
  bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Nunito;
  z-index: 100;
`

const Plastic = styled.div`
  width: 20px;
  height: 20px;
  background: ${colors.purple};
  z-index: 200;
  position: absolute;
  bottom: 35vh;
  animation: float 3s infinite;
  cursor: pointer;

  &:hover {
    background: white;
    border: 1px solid ${colors.purple};
  }
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

    if (count == 4) {
      router.push('/results')
      /* setInstructions('swipe up to see how you can help') */
    }
  }

  const [hide, setHide] = useState(false)

  const [instructions, setInstructions] = useState('Click to pick up the microfibers from the ocean')

  return (
    <Container>
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

      <ResultsUI>{instructions}</ResultsUI>

      <Plastic
        onClick={(e) => handleClick(e)}
        style={{
          left: '10vw',
          animationDelay: '1s',
        }}
      />

      <Plastic
        onClick={(e) => handleClick(e)}
        style={{
          left: '30vw',
          animationDelay: '0.2s',
        }}
      />

      <Plastic
        onClick={(e) => handleClick(e)}
        style={{
          left: '50vw',
          animationDelay: '0.5s',
        }}
      />

      <Plastic
        onClick={(e) => handleClick(e)}
        style={{
          left: '80vw',
          animationDelay: '0.3s',
        }}
      />

      <Wave
        style={{
          height: '45vh',
          position: 'absolute',
          zIndex: '0',
          bottom: '0',
          transition: '1s ease',
        }}
        fill='#3884FF'
        paused={false}
        options={{
          height: 10,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />




    </Container>
  )
}

export default Impact
