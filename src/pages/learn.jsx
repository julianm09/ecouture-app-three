import { Menu } from '../components/Menu';
import React, {useState} from 'react';
import { colors } from '../components/color';
import { FiberButtonContainer } from '../components/FiberButtonContainer';
import { StoreContainer } from '../components/StoreContainer'
import { MaterialButtonSlider } from '../components/MaterialButtonSlider'
import { StoreText } from '@/components/StoreText';

const LearnFibersPage = ({
    pageColor=colors.teal,
    fiberName='Cotton',
    
}) => {

const [changePage, setChangePage] = useState('cotton')

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: changePage == 'cotton' ? colors.teal : changePage == 'plant' ? colors.green : changePage == 'synthetic' ? colors.purple : colors.orange,
            minHeight: '100vh',
            

        }}>
            <Menu/>

            <div id="spacer" style={{height: '120px'}}></div>

            <div style={{
                width: '90vw',
                fontSize: '36px',
                fontFamily: 'Nunito',
                fontWeight: 'Bold',
                color: 'white',
                margin: '0 0 20px 0',
                setChangePage
            
            }}>
                {fiberName = changePage == 'cotton' ? 'Cotton' : changePage == 'plant' ? 'Plant' : changePage == 'animal' ? 'Animal' : 'Synthetic'}
            </div>

            <div style={{
                height: '70vh',
                width: '90vw',
                backgroundColor: 'lightgrey'
            }}>
                placeholder
            </div>

            <MaterialButtonSlider/>

            <StoreText/>

            <StoreContainer/>

            <div style={{
                width:'90vw',
                fontSize:'24px',
                fontWeight:'bold',
                fontFamily: 'Nunito',
                color:'black',
                margin: '50px 0 40px 0'
            }}>
                Learn More About
            </div>

            <FiberButtonContainer setChangePage={setChangePage}/>
            
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


        </div>
    )
}

export default LearnFibersPage