import { Menu } from '../components/Menu'
import React, { useState, useEffect } from 'react'
import { AboutResourcesCont } from '../components/AboutResourcesCont'
import { colors } from '../components/color'
import { RecycleButton } from '../components/RecycleButton'
import styled from 'styled-components'
import { ContactUsContainer } from '../components/ContactContainer'

import { shops } from '../data/shops'


const StoreName = styled.div`
  display: flex;
  text-align: left;
  align-self: flex;
  margin: 150px 0 25px 0;
  width: 90vw;

  color: white;
  font-size: 36px;
  font-family: Nunito;
  font-weight: bold;
`

const StoreImage = styled.div`
  
  object-fit: cover;
  overflow: hidden;




`

const SubHead = styled.div`
  display: flex;
  text-align: left;
  align-self: flex;
  margin: 25px 0 25px 0;
  width: 90vw;

  color: white;
  font-size: 24px;
  font-family: Open Sans;
`

const BodyText = styled.div`
  display: flex;
  text-align: left;
  align-self: flex;
  margin: 25px 0 100px 0;
  width: 90vw;

  color: white;
  font-size: 18px;
  font-family: Open Sans;
`

const StorePage = ({
  pageColor,
  storeText = 'Wildlife Thrift Store',
  storeImg = 'store-wildlife.jpeg',
  bodytext = 'We are a for-profit business that donates to local, neighborhood charities quarterly. We have been serving the people of Vancouver, with pride, since 1997 a legend here on The Granville Strip. Family-owned operated, we believe in one single, simple concept: by recycling we are not only able to preserve our environment, but we are granted the privilege of giving back to our community.  What began supporting The Wildlife Rescue Association now solely supports people-oriented charities with a focus on helping those dealing with Homelessness Mental Health issues. Each charity holds a special place in our heart: Coast Mental Health, The Gathering Place and Covenant House  Through your ongoing and generous support, we have been able to donate hundreds of thousands of dollars to these Charities.  Thank you Vancouver and to our donors and shoppers everywhere! You are not only helping to preserve our planet, you enable us to recycle give back.',
}) => {

  const [storeName, setStoreName] = useState('')
  const [storeAbout, setStoreAbout] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [website, setWebsite] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [facebook, setFacebook] = useState('')

  const [offset, setOffset] = useState(0)



        
    useEffect(() => {
     

    //get user location from local sto4rage when page loads
    const currentStore = JSON.parse(localStorage.getItem('currentStore'))


    //filter locatiosn to users location 
    var showStore = shops.filter(function (el) {
        return el.name == currentStore 
      });


      let myStore = showStore[0]

      setStoreName(myStore.name)

      setContact(myStore.contact)

      setStoreAbout(myStore.about)

      setAddress(myStore.address)

      setWebsite(myStore.website)

      setInstagram(myStore.instagram)

      setTwitter(myStore.twitter)

      setFacebook(myStore.facebook)

      



      //empty array so this only renders once when page loads
    }, [])


    useEffect(() => {
      document.body.addEventListener('scroll', handleScroll)
      return () => document.body.removeEventListener('scroll', handleScroll)
    })
  
  const handleScroll = () => {
      console.log('scroll event', document.body.scrollTop)

      setOffset(document.body.scrollTop)
    }




    
    const [currentStore, setCurrentStore] = useState('')



  const [mySwitch, setMySwitch] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: colors.blue,
        minHeight: '100vh',
      }}
    >
      <Menu />

      <StoreName
              style={{
              
                transform: `translateY(${offset * 0.5}px`
              }}
              >{storeName}</StoreName>

      <StoreImage>
        <img
        style={{

          transform: `translateY(${offset * 0.5}px`
        }}
    
           src={storeImg}></img>
      </StoreImage>

      <RecycleButton
        bgColor={colors.blue}
        buttonText={'Visit Site'}
      ></RecycleButton>

      <AboutResourcesCont
        margin={''}
        bgColor={colors.blue}
        buttonText={'Contact'}
        mySwitch={mySwitch}
        setMySwitch={setMySwitch}
      />

      {mySwitch ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <SubHead>Contact</SubHead>

          <ContactUsContainer contact={contact} address={address} instagram={instagram} twitter={twitter} facebook={facebook}></ContactUsContainer>
        </div>
      ) : (
        <div>
          <SubHead>About {storeName}</SubHead>

          <BodyText>{storeAbout}</BodyText>
        </div>
      )}




      
    </div>
  )
}

export default StorePage
