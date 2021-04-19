import ThreeCanvas from '../components/layout/_canvas'

import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import Wave from 'react-wavify';
import { useRouter } from 'next/router';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Score = styled.div`
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
  bottom: 5vh;
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

  let count = 0;

  const router = useRouter()
  
  const handleClick = (e) => {
    e.target.style.display = 'none'
    count++

    if (count == 4){

      router.push('/results')

    }
  }

  const [hide, setHide] = useState(false)

  

  return (
    <Container>
      <Score>
        U.S. and Canadian households release over 870 tons of plastic
        microfibers into the ocean every year from laundry alone.
      </Score>

      <Menu
        hide={hide}
        setHide={setHide}
        logo='/logo-small-blue.png'
        iconColor={colors.blue}
        three={true}
      />

      <ResultsUI>Click to pick up the microfibers from the ocean</ResultsUI>

      <Plastic
      onClick={(e)=>handleClick(e)}
        style={{
          left: '10vw',
          animationDelay: '1s',
        }}
      />

      <Plastic
      onClick={(e)=>handleClick(e)}
        style={{
          left: '30vw',
          animationDelay: '0.2s',
        }}
      />

      <Plastic
      onClick={(e)=>handleClick(e)}
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

      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap');

          @keyframes float {
            from {
              bottom: 35vh;
            }

            50% {
              bottom: 40vh;
            }

            to {
              bottom: 35vh;
            }
          }

          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            font-family: Nunito;
          }

          * {
            margin: 0;
          }

          a {
            color: white;
          }
        `}
      </style>
    </Container>
  )
}

export default Impact
