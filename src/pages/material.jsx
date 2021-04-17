import { Menu } from '../components/Menu'
import React, { useState } from 'react';
import { AboutResourcesCont } from '../components/AboutResourcesCont';
import { colors } from '../components/color'

export const MaterialsPage = ({ pageColor }) => {

    const [mySwitch, setMySwitch] = useState(false)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: pageColor,
                minHeight: '100vh',
            }}>
            <Menu />

            <h2 style={{

            }}>Bamboo</h2>

            <AboutResourcesCont margin={'200px'} bgColor={colors.green} buttonText={'Resources'} mySwitch={mySwitch} setMySwitch={setMySwitch} />

            {mySwitch ? <div> hello world </div> : <div>goodbye world</div>}

        </div>
    )
}



