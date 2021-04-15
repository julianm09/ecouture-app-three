import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from './color'
import * as Icon from 'react-feather';




const ContainerUI = styled.div`


`

const HeaderUI = styled.div`

font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 24px;
color: grey;
padding: 0 0 50px 0;


`

const ScrollContainerUI = styled.div`

display: flex;
flex-direction: row;
overflow: scroll;
width: 200vw;

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

export const MaterialButtonSlider = ({ materialType="plant", materialColor="#51B27E"}) => {

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

            {materials.map(el => {
                return(
                    <MaterialCardUI
                    style={{
                        background: materialColor
                    }}>
                        <MaterialIconUI src='/plant-icon.png'/>
                        {el.type}
                    </MaterialCardUI>
                )
            })}

        </ScrollContainerUI>

    </ContainerUI>



    </>
    );
};

