import { Menu } from '../components/Menu'
import React, { useState, useEffect } from 'react'
import { MaterialButtonSlider } from '../components/MaterialButtonSlider'
import { AboutResourcesCont } from '../components/AboutResourcesCont'
import { RecycleButton } from '../components/RecycleButton'
import { colors } from '../components/color'
import styled from 'styled-components'
import { StoreContainer } from '@/components/StoreContainer'
import { materials } from '../data/materials'

const Material = styled.div`
  display: flex;
  text-align: left;
  align-self: flex;
  margin: 150px 0 0 0;
  width: 90vw;

  color: white;
  font-size: 36px;
  font-family: Nunito;
  font-weight: bold;
`

const MaterialType = styled.div`
  display: flex;
  text-align: left;
  align-self: flex;
  margin: 25px 0 50px 0;
  width: 90vw;

  color: white;
  font-size: 18px;
  font-family: Open Sans;
`

const SubHeading = styled.div`
  display: flex;
  text-align: left;
  align-self: flex;
  margin: 25px 0 25px 0;
  width: 90vw;

  color: white;
  font-size: 24px;
  font-family: Open Sans;
`

const MaterialInfo = styled.div`
  display: flex;
  text-align: left;
  align-self: flex;
  margin: 25px 0 25px 0;
  width: 90vw;

  color: white;
  font-size: 18px;
  font-family: Open Sans;
`

const MaterialsPage = ({
  pageColor = colors.green,
  materialText = 'Bamboo',
  materialType = 'Plant',
  materialImage = '/bamboo.svg',
  materialInfo = 'Bamboo requires no need for pesticides or fertilizers',
}) => {
  const [mySwitch, setMySwitch] = useState(false)


  const [name, setName] = useState('')
  const [type, setType] = useState('')
  
  const [factOne, setFactOne] = useState('')
  const [factTwo, setFactTwo] = useState('')
  const [factThree, setFactThree] = useState('')

  useEffect(() => {


    //get score
    let currentMaterial = JSON.parse(localStorage.getItem('currentMaterial'))


  
    const displayMaterial = materials.filter((el) => {
      return el.name == currentMaterial
    })


    //set progressbar to score 
    setName(displayMaterial[0].name)
    setType(displayMaterial[0].type)

    setFactOne(displayMaterial[0].fact1)
    setFactTwo(displayMaterial[0].fact2)
    setFactThree(displayMaterial[0].fact3)

    console.log(displayMaterial[0])

  }, [])
  

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: type == 'Cotton' ? colors.cyan : type == 'Synthetic' ? colors.purple : type == 'Animal' ? colors.orange : colors.green,
        minHeight: '100vh',
      }}
    >
      <Menu />

      <Material>{name}</Material>

      <MaterialType>Type: {type} Fiber</MaterialType>

{/*       <img style={{
        width: '100px',
        margin: '25px 0 25px 0'
      }} src={materialImage}></img> */}

      <AboutResourcesCont
        margin={'0 0 25px 0'}
        bgColor={type == 'Cotton' ? colors.cyan : type == 'Synthetic' ? colors.purple : type == 'Animal' ? colors.orange : colors.green}
        buttonText={'Resources'}
        mySwitch={mySwitch}
        setMySwitch={setMySwitch}
      />

      {mySwitch ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <SubHeading>Where to Recylce</SubHeading>

          <RecycleButton bgColor={type == 'Cotton' ? colors.cyan : type == 'Synthetic' ? colors.purple : type == 'Animal' ? colors.orange : colors.green}></RecycleButton>

          <RecycleButton bgColor={type == 'Cotton' ? colors.cyan : type == 'Synthetic' ? colors.purple : type == 'Animal' ? colors.orange : colors.green} buttonText={'Vancouver Recycle'}></RecycleButton>

          <SubHeading>
            To help save the world check out these sustainable store options
            near you.
          </SubHeading>

          <StoreContainer />
        </div>
      ) : (
        <div>
          <SubHeading>About {name}</SubHeading>

          <MaterialInfo>{factOne}</MaterialInfo>

          <MaterialInfo>{factTwo}</MaterialInfo>

          <MaterialInfo>{factThree}</MaterialInfo>

          {/* <MaterialButtonSlider /> */}
        </div>
      )}
    </div>
  )
}

export default MaterialsPage
