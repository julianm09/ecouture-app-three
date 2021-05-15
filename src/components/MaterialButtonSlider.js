import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from './color'
import * as Icon from 'react-feather';
import { materials } from '../data/materials'
import { useRouter } from 'next/router';




const ContainerUI = styled.div`

width: 100vw;

`

const HeaderUI = styled.div`

font-family: Nunito;
font-weight: 700;
font-size: 24px;
color: white;
padding: 0 0 50px 0;
margin: 0 0 0 5vw;


`

const ScrollContainerUI = styled.div`

padding: 0 0 0 5vw;
overflow-x: scroll;
height: 300px;



&::-webkit-scrollbar {
    display: none;
    
  }


`
const Scroll = styled.div`


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
min-width: 200px;
height: 200px;
border: 1px solid rgba(255, 255, 255, 0.5);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
margin: 0 50px 0 0;
cursor: pointer;

`

const MaterialIconUI = styled.img`

margin: 0 0 25px 0;
width: 50px;

`

export const MaterialButtonSlider = ({ changePage, materialType="Plant", materialColor=colors.green, materialIcon='/plant-icon.png'}) => {

    const router = useRouter()

    const [menuActive, setMenuActive] = useState(false)

    const [currentMaterial, setCurrentMaterial] = useState('')

    var showMaterials = materials.filter(function (el) {
        return el.type.toLowerCase() == changePage 
      });

      const handleClick = (el) => {

        localStorage.setItem('currentMaterial', JSON.stringify(el.target.lastChild.innerHTML))

        router.push('/material')
    /*     localStorage.setItem('currentStore', JSON.stringify(storeName))
     */

        /* router.push('/material') */

      }

  return (
    <>

    <ContainerUI>

        <HeaderUI>Learn About {changePage.charAt(0).toUpperCase() +changePage.slice(1)} Fibers</HeaderUI>

        <ScrollContainerUI>

            <Scroll>

            {showMaterials.map(el => {
                return(
                    <MaterialCardUI
                    onClick={(el => handleClick(el))}

                    

                    style={{
                        background: 
                        changePage == 'cotton'
                        ? colors.cyan
                        : changePage == 'plant'
                        ? colors.green
                        : changePage == 'synthetic'
                        ? colors.purple
                        : colors.orange,
                    }}>
                        <MaterialIconUI src={'/' + changePage + '-icon-white.svg'}/>
                        <div>{el.name}</div>
                    </MaterialCardUI>
                )
            })}

</Scroll>

        </ScrollContainerUI>

    </ContainerUI>



    </>
    );
};

