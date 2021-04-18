import React, { useState } from 'react';
import styled from 'styled-components';

const StoreDescriptionUI = styled.div`
display: flex;
text-align: left;
align-self: flex;
margin: 15px 0 100px 0;
width: 90vw;

color: white;
font-size: 18px; 
font-family: Open Sans;

`

export const StoreDescription = ({}) =>

{

  return (

    <StoreDescription>We are a for-profit business that donates to local, neighborhood charities quarterly. We have been serving the people of Vancouver, with pride, since 1997–a legend here on The Granville Strip.

    Family-owned &amp; operated, we believe in one single, simple concept: by recycling ♻ we are not only able to preserve our environment, but we are granted the privilege of giving back to our community.
    
    What began supporting The Wildlife Rescue Association now solely supports people-oriented charities with a focus on helping those dealing with Homelessness &amp; Mental Health issues. Each charity holds a special place in our heart: Coast Mental Health, The Gathering Place and Covenant House
    
    Through your ongoing and generous support, we have been able to donate hundreds of thousands of dollars to these Charities.
    
    Thank you Vancouver and to our donors and shoppers everywhere! You are not only helping to preserve our planet, you enable us to recycle &amp; give back!
    </StoreDescription>



  )
}
