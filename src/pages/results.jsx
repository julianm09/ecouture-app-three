import ThreeCanvas from '../components/layout/_canvas'

import { Menu } from '../components/Menu'
/* import '../styles/index.module.css'*/
import React, { useState } from 'react';
import { colors } from '@/components/color';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring'



const Container = styled.div`

width: 100vw;
min-height: 100vh;
background: white;
z-index: 0;

`

const Score = styled.div`

width: 100vw;
min-height: 100px;
position: relative;
top: 15vh;
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

width: 100vw;
min-height: 100px;
position: absolute;
bottom: 5vh;
display: flex;
align-items: center;
justify-content: center;
color: ${colors.blue};
font-family: Nunito;

`





const Results = () => {

  const props = useSpring({ 
  config: { duration: 2250 }, 
  number: 70, from: { number: 0 },
  })


  const [hide, setHide] = useState(false)

  return (

    <Container>
    
    <Menu hide={hide} setHide={setHide} logo='/logo-small-blue.png' iconColor={colors.blue} three={true} />
    <ThreeCanvas r3f hide={hide} setHide={setHide}/>

    <Score>
    {`Your Eco Score`}<Space></Space><animated.span>{props.number.interpolate(val => Math.floor(val))}</animated.span>
    </Score>

      
      <ResultsUI>Click the points to see your impact on the earth</ResultsUI>


      <style jsx global>{`

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap');


html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: Nunito;
  
}

* {

margin: 0
}

a{
color: white;
}
`}
</style>
    
    </Container>

  )
}



export default Results