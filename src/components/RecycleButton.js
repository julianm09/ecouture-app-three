import React from 'react';
import styled from 'styled-components';
import { colors } from './color'

const RecycleButtonUI = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    width: 90vw;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); 
    color: white;
    font-size: 18px; 
    font-family: Nunito;

    `

export const RecycleButton = ({ margin = '20px 0 20px 0', bgColor = colors.green, buttonText = 'Thrift' }) => {

    return (
        <RecycleButtonUI
            style={{
                background: bgColor,
                margin: margin,
            }}>
            {buttonText}
        </RecycleButtonUI>
    )
}
