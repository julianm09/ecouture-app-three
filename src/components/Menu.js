import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from './color'
import * as Icon from 'react-feather';
import { useRouter } from 'next/router'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'



const MenuUI = styled.div`

width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;
color: white;
flex-direction: column;
transition: 1s ease-out;
z-index: 1000;
position: fixed;
top: 0;



`

const LinkUI = styled.a`

font-family: nunito;
margin: 25px 0;
text-decoration: none;
cursor: pointer;
font-size: 18px;

`

const NavBarUI = styled.a`

display: flex;
height: 100px;
width: 100vw;
justify-content: center;
align-items: center;
z-index: 100;
font-size: 18px;
z-index: 1500;
position: absolute;
top: 0;






`

const SocialUI = styled.a`

display: flex;
height: 30vh;
width: 100vw;
justify-content: center;
align-items: center;
position: absolute;
bottom: 0;
z-index: 100;
font-size: 24px;

`

const SocialLinkUI = styled.a`

margin: 0 25px;
cursor: pointer;

`

const IconUI = styled.div`

position: absolute;
right: 10vw;
color: white;
cursor: pointer;

`

const BackIconUI = styled.div`

position: absolute;
left: 10vw;

cursor: pointer;

`



export const Menu = ({ hideMenu = false, hide=false, setHide=false, menuColor='transparent', logo='/logo-small.png', iconColor='white', three=false, backButton=true }) => {


    const router = useRouter()
    
    const [menuActive, setMenuActive] = useState(false)
    const handleClick = () => {
        setMenuActive(!menuActive)
        
        if (three){
            setHide(!hide)
        }
     
    }

  return (
    <>



    <NavBarUI>
{(backButton && !menuActive) ? (
    <BackIconUI   
    onClick={() => router.back()}>
            <Icon.ArrowLeft
              style={{
                color:iconColor
            }}></Icon.ArrowLeft>
        </BackIconUI>

) : (
    <></>
)}


        {menuActive ? <img onClick={() => router.push('/results')} src='/logo-small-blue.png'/> : <img onClick={() => router.push('/results')} src={logo}/>}

        <IconUI>

          
            {menuActive && !hideMenu ? (  
            <Icon.X 
            style={{
                color:colors.blue
            }}
            
            onClick={handleClick}/>
            ) : !menuActive && !hideMenu ? (            
            <Icon.Menu 
            style={{
                color:iconColor
            }}
            onClick={handleClick}/>
            ) : <></>}

        </IconUI>
    </NavBarUI>
                {menuActive ? (
                
    <MenuUI
    style={{
        background: 'white'
    }}>

        <LinkUI style={{ color: colors.blue}} onClick={()=> router.push('/results')}>back to earth</LinkUI>
        <LinkUI style={{ color: colors.green}} onClick={()=> router.push('/shops')}>sustainable stores</LinkUI>
        <LinkUI style={{ color: colors.orange}} onClick={()=> router.push('/materials')}>learn about materials</LinkUI>
        <LinkUI style={{ color: colors.cyan}} target="_blank" href="https://taigomayes.github.io/ecouture-infographic/pages/nav.html">check out our infographic</LinkUI>
        <LinkUI style={{ color: colors.purple}} onClick={()=> router.push('/home')}>retake eco test</LinkUI>
{/*         <LinkUI onClick={()=> router.push('/learn')}>Learn</LinkUI>
 
        <SocialUI>
            <SocialLinkUI>
                <Icon.Instagram />
            </SocialLinkUI>
            <SocialLinkUI>
                <Icon.Facebook />
            </SocialLinkUI>
        </SocialUI>

        */}

        <style jsx global>{`

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap');


        html, body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow-y: hidden;
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

    </MenuUI>

    

) : <div></div>
}

</>
    );
};

