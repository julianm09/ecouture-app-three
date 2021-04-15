import React from 'react';
import './stories.css';


import { StoreText } from '../components/StoreText';

import { FiberButtonContainer } from '../components/FiberButtonContainer';
import { MaterialButtonSlider } from '../components/MaterialButtonSlider';
import { AboutResourcesCont } from '../components/AboutResourcesCont';
import { Menu } from '../components/Menu';







export default {
  title: 'Componemnts/Menu',
};


export const StoreTextUI = () => <StoreText/>;

export const FiberButtonContainerUI = () => <FiberButtonContainer/>;
export const MaterialButtonSliderUI = () => <MaterialButtonSlider/>;
export const AboutResourcesContUI = () => <AboutResourcesCont/>;


export const MenuUI = () => <Menu/>;



