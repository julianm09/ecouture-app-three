import { Canvas, useThree } from '@react-three/fiber'
import { Html, OrbitControls, Preload, Sphere } from '@react-three/drei'
import { a, useSpring, PerspectiveCamera } from '@react-spring/three'
import { A11yUserPreferences } from '@react-three/a11y'
import EarthUI from '../Earth'
import styled from 'styled-components'
import { colors } from '../color'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Point = styled.div`
  width: 25px;
  height: 25px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${colors.green};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
`

// Lights
function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={10}
      height={10}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
    />
  )
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={10}
      height={10}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
    />
  )
}

function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={10}
      height={10}
      intensity={brightness}
      color={color}
      position={[-1, 4, -2]}
      rotation={[0, 180, 0]}
    />
  )
}

const Controls = OrbitControls

const ThreeCanvas = ({ hide, setHide }) => {
  const router = useRouter()

  const [progress, setProgress] = useState([false, false, false, false])


  useEffect(() => {
    console.log(progress)

    const completed = () => {
      if (localStorage.getItem("completed") === null) {
        return [false, false, false, false ]
      } else {
        return JSON.parse(localStorage.getItem('completed'))
      }
    }

    setProgress(completed)




  },[])


  

  const handleClick = (el) => {
    if(el.target.id == 0){
    router.push('/impacts-1-1')
    } else if (el.target.id == 1){
      router.push('/impacts-1-2')
    } else if (el.target.id == 2){
      router.push('/impacts-1-3')
    } else if (el.target.id == 3){
      router.push('/impacts-2-1')
    } else if (el.target.id == 4){
      router.push('/impacts-2-2')
    } else if (el.target.id == 5){
      router.push('/impacts-2-3')
    } else if (el.target.id == 6){
      router.push('/impacts-3-1')
    } else if (el.target.id == 7){
      router.push('/impacts-3-2')
    } else if (el.target.id == 8){
      router.push('/impacts-3-3')
    } else if (el.target.id == 9){
      router.push('/impacts-4-1')
    } else if (el.target.id == 10){
      router.push('/impacts-4-2')
    } else if (el.target.id == 11){
      router.push('/impacts-4-3')
    } 
    progress[el.target.id] = true
    console.log(progress)
    localStorage.setItem('completed', JSON.stringify(progress))

    
  }

 
  



  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        background: 'none',
        zIndex: hide ? -100 : 0,
      }}
    >
      <KeyLight />
      <RimLight />
      <FillLight />

      <EarthUI />

      <Html position={[0.7, 0.7, 0.7]}>
        <Point
          id='0'
          style={{
            background: progress[0] ? colors.green : 'white',
          }}
          onClick={(el) => handleClick(el)}
        />
      </Html>
      <Html position={[-0.7, 0.7, -0.7]}>
        <Point
          style={{
            background: progress[1] ? colors.green : 'white',
          }}
          id='1'
          onClick={(el) => handleClick(el)}
        />
      </Html>
      <Html position={[-0.7, -0.7, 0.7]}>
        <Point
          style={{
            background: 'white',
            background: progress[2] ? colors.green : 'white',
          }}
          id='2'
          onClick={(e) => handleClick(e)}
        />
      </Html>

      <Html position={[0.9, 0.9, 0.9]}>
        <Point
          id='3'
          style={{
            background: colors.orange
          }}
          
        />
      </Html>
      <Html position={[-0.9, 0.9, -0.9]}>
        <Point
          style={{
            background: colors.orange
          }}
          id='4'
          
        />
      </Html>
      <Html position={[-0.9, -0.9, 0.9]}>
        <Point
          style={{
            background: 'white',
            background: colors.orange
          }}
          id='5'
          
        />
      </Html>

      <Html position={[1.1, 1.1, 1.1]}>
        <Point
          id='6'
          style={{
            background: colors.cyan
          }}
          
        />
      </Html>
      <Html position={[-1.1, 1.1, -1.1]}>
        <Point
          style={{
            background: colors.cyan
          }}
          id='7'
          
        />
      </Html>
      <Html position={[-1.1, -1.1, 1.1]}>
        <Point
          style={{
            background: 'white',
            background: colors.cyan
          }}
          id='8'
          
        />
      </Html>

      <Html position={[1.3, 1.3, 1.3]}>
        <Point
          id='9'
          style={{
            background: colors.blue
          }}
          
        />
      </Html>
      <Html position={[-1.3, 1.3, -1.3]}>
        <Point
          style={{
            background: colors.blue
          }}
          id='10'
          
        />
      </Html>
      <Html position={[-1.3, -1.3, 1.3]}>
        <Point
          style={{
            background: 'white',
            background: colors.blue
          }}
          id='11'
          
        />
      </Html>




      <Controls
        enablePan={false}
        enableZoom={false}
        enableDamping={true}
        autoRotate
      />
    </Canvas>
  )
}

export default ThreeCanvas
