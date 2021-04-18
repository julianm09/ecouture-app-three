import ThreeCanvas from '../components/layout/_canvas'

import { Menu } from '../components/Menu'

import React, { useState } from 'react';
import { colors } from '@/components/color';
import styled from 'styled-components';

const Container = styled.div`

width: 100vw;
min-height: 100vh;
background: white;

`

const Score = styled.div`

width: 100vw;
min-height: 100px;
position: absolute;
top: 15vh;
display: flex;
align-items: center;
justify-content: center;
color: ${colors.blue};
font-size: 24px;
font-weight: 700;
font-family: Nunito;

`

const ResultsUI = styled.div`

width: 100vw;
min-height: 100px;
position: absolute;
bottom: 10vh;
display: flex;
align-items: center;
justify-content: center;
color: ${colors.blue};
font-family: Nunito;

`





const Results = () => {

  const [hide, setHide] = useState(false)

  return (

    <Container>
    
    <Menu hide={hide} setHide={setHide} logo='/logo-small-blue.png' iconColor={colors.blue} />
    <ThreeCanvas r3f hide={hide} setHide={setHide}/>

    <Score>Eco Score: 70%</Score>
      
      <ResultsUI>Click the points to see your impact on the earth</ResultsUI>
    
    </Container>

  )
}



export default Results