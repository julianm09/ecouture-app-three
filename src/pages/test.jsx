import { Menu } from '../components/Menu'
import React, { useState } from 'react';
import { colors } from '../components/color'
import { RecycleButton } from '@/components/RecycleButton';
import { StartButton } from '@/components/StartButton'

export const TestPage = ({ pageColor }) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: pageColor,
            minHeight: '100vh',
        }}>

            <Menu />

            <RecycleButton margin={'200px'} bgColor={colors.green} buttonText={'Thrift'} />

            <StartButton />






        </div>
    )
}