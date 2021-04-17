import { colors } from '@/components/color';
import { RecycleButton } from '@/components/RecycleButton';
import { StoreInside } from '@/components/StoreInside';
import { useRouter } from 'next/router'
import { useEffect, Children } from 'react'
import ThreeCanvas from '../components/layout/_canvas';
import { Menu } from '../components/Menu';
import '../styles/index.css';
import { MaterialsPage } from './material';
import { ResultsPage } from './results';
import { TestPage } from './Test';




function MyApp({ }) {

  return (

    <>

    <MaterialsPage pageColor={colors.green}/>



    </>

  )

}

export default MyApp
