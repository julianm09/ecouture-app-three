import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StoreInside } from '../components/StoreInside';
import { shops } from '../data/shops'



const StoreContainerUI = styled.div`

width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

export const StoreContainer = ({storeImage, storeName, storeLocation}) => {


//set stores as empty array to map
  const [stores, setStores] = useState([])


        
    useEffect(() => {
     


    //get user location from local sto4rage when page loads
    const myLocation = JSON.parse(localStorage.getItem('location'))


    //filter locatiosn to users location 
    var newLocations = shops.filter(function (el) {
        return el.location.toLowerCase() == myLocation 
      });

     
      //set mapped stores to users stores
      setStores(newLocations)


      //empty array so this only renders once when page loads
    }, [])


    
    const [currentStore, setCurrentStore] = useState('')


    return (
        <StoreContainerUI>
            {
       
            
            stores.map((el) => (

                <StoreInside
                
                currentStore={currentStore}
                setCurrentStore={setCurrentStore}
                storeName = {el.name}
                storeLocation = {el.address}
                
                />

            ))

      
            
            
            }
        </StoreContainerUI>
    )



}
