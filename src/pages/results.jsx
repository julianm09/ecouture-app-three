import ThreeCanvas from '../components/layout/_canvas'

import { Menu } from '../components/Menu'

import React, { useState } from 'react';



export const ResultsPage = () => {

  const [hide, setHide] = useState(false)

  return (
    <>

      <Menu hide={hide} setHide={setHide} />
      <ThreeCanvas r3f hide={hide} setHide={setHide} />


    </>
  )
}



