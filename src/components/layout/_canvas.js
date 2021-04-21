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

/*   const checkLocal = () => {
    if (localStorage.getItem("completed") === null) {
      return [false, false, false, false ]
    } else {
      return JSON.parse(localStorage.getItem('completed'))
    }
  }

  useEffect(() => {
    console.log(progress)
  })

  const [progress, setProgress] = useState(checkLocal)

  const handleClick = (el) => {
    router.push('/impacts')
    progress[el.target.id] = true
    console.log(progress)
    localStorage.setItem('completed', JSON.stringify(progress))

    
  } */



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

      <Html position={[-0.7, 0.7, 0.7]}>
        <Point
          id='0'
          style={{
            background: /* progress[0] ? colors.green : */ 'white',
          }}
          onClick={(e) => router.push('/impacts')}
        />
      </Html>
      <Html position={[-0.7, -0.7, -0.7]}>
        <Point
          style={{
            background: /* progress[1] ? colors.green : */ 'white',
          }}
          id='1'
          onClick={(e) => router.push('/ice-impact')}
        />
      </Html>
 {/*      <Html position={[0.7, -0.7, 0.7]}>
        <Point
          style={{
            background: 'white',
          }}
          id='2'
          onClick={(e) => handleClick(e)}
        />
      </Html>
      <Html position={[-0.7, -0.7, -0.7]}>
        <Point
          style={{
            background: 'white',
          }}
          id='3'
          onClick={(e) => handleClick(e)}
        />
      </Html>

      <Html position={[-1.2, -1.2, -1.2]}>
        <Point
          style={{
            background: 'red'
          }}
          id='4'
          onClick={(e) => {localStorage.clear()}}
        />
      </Html> */}

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
