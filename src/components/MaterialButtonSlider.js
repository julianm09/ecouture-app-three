import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from './color'
import * as Icon from 'react-feather';




const ContainerUI = styled.div`

width: 90vw;

`

const HeaderUI = styled.div`

font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 24px;
color: white;
padding: 0 0 50px 0;


`

const ScrollContainerUI = styled.div`


overflow-x: scroll;


&::-webkit-scrollbar {
    display: none;
    
  }


`
const Scroll = styled.div`

-webkit-overflow-scrolling: touch;
width: 200vw;
display: flex;
flex-direction: row;


`

const MaterialCardUI = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
font-family: nunito;
width: 200px;
height: 200px;
border: 1px solid rgba(255, 255, 255, 0.5);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
margin: 0 50px 0 0;

`

const MaterialIconUI = styled.img`

margin: 0 0 25px 0;

`

export const MaterialButtonSlider = ({ materialType="Plant", materialColor=colors.green, materialIcon='/plant-icon.png'}) => {

    const materials = [

        {'type': 'Hemp'},
        {'type': 'Bamboo'},
        {'type': 'Lyocell'}

    ]


    const [menuActive, setMenuActive] = useState(false)

  return (
    <>

    <ContainerUI>

        <HeaderUI>Other {materialType} Fibers</HeaderUI>

        <ScrollContainerUI>

            <Scroll>

            {materials.map(el => {
                return(
                    <MaterialCardUI

                    style={{
                        background: materialColor
                    }}>
                        <MaterialIconUI src={materialIcon}/>
                        {el.type}
                    </MaterialCardUI>
                )
            })}

</Scroll>

        </ScrollContainerUI>

    </ContainerUI>



    </>
    );
};

