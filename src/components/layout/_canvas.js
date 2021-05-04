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

    let score = JSON.parse(localStorage.getItem('score'))

    const completed = () => {
      if (localStorage.getItem("completed") === null) {
        return [false, false, false]
      } else {
        return JSON.parse(localStorage.getItem('completed'))
      }
    }

    setProgress(completed)

    console.log(completed)



  },[])


  let score = JSON.parse(localStorage.getItem('score'))

  

  const handleClick = (el) => {
    if(el.target.id == 0){
    router.push('/impacts-1-1')
        progress[0] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
    } else if (el.target.id == 1){
      router.push('/impacts-1-2')
        progress[1] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
    } else if (el.target.id == 2){
      router.push('/impacts-1-3')
        progress[2] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
    } else if (el.target.id == 3){
      progress[0] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
      router.push('/impacts-2-1')
    } else if (el.target.id == 4){
      progress[1] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
      router.push('/impacts-2-2')
    } else if (el.target.id == 5){
      progress[2] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
      router.push('/impacts-2-3')
    } else if (el.target.id == 6){
      progress[0] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
      router.push('/impacts-3-1')
    } else if (el.target.id == 7){
      progress[1] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
      router.push('/impacts-3-2')
    } else if (el.target.id == 8){
      progress[2] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
      router.push('/impacts-3-3')
    } else if (el.target.id == 9){
      progress[0] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
      router.push('/impacts-4-1')
    } else if (el.target.id == 10){
      progress[1] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
      router.push('/impacts-4-2')
    } else if (el.target.id == 11){
      progress[2] = true
        console.log(progress)
        localStorage.setItem('completed', JSON.stringify(progress))
      router.push('/impacts-4-3')
    } 
    

    
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


      { score <= 30 ? (
        <>
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
      </>
      ) : score >= 30 && score <= 50 ? (
        <>
      <Html position={[0.9, 0.9, 0.9]}>
        <Point
          id='3'
          style={{
            background: progress[0] ? colors.green : 'white',
          }}
          onClick={(e) => handleClick(e)}
          
        />
      </Html>
      
      <Html position={[-0.9, 0.9, -0.9]}>
        <Point
          style={{
            background: progress[1] ? colors.green : 'white',
          }}
          onClick={(e) => handleClick(e)}
          id='4'
          
        />
      </Html>
      
      <Html position={[-0.9, -0.9, 0.9]}>
        <Point
          style={{
            background: 'white',
            background: progress[2] ? colors.green : 'white',
          }}
          onClick={(e) => handleClick(e)}
          id='5'
          
        />
      </Html>
      </>
      ) : score >= 50 && score <= 60 ? (
        <>
      <Html position={[1.1, 1.1, 1.1]}>
        <Point
          id='6'
          style={{
            background: progress[0] ? colors.green : 'white',
          }}
          onClick={(e) => handleClick(e)}
          
        />
      </Html>
      <Html position={[-1.1, 1.1, -1.1]}>
        <Point
          style={{
            background: progress[1] ? colors.green : 'white',
          }}
          id='7'
          onClick={(e) => handleClick(e)}
          
        />
      </Html>
      <Html position={[-1.1, -1.1, 1.1]}>
        <Point
          style={{
            background: 'white',
            background: progress[2] ? colors.green : 'white',
          }}
          id='8'
          onClick={(e) => handleClick(e)}
          
        />
      </Html>
      </>
) : (
  <>
      <Html position={[1.3, 1.3, 1.3]}>
        <Point
          id='9'
          style={{
            background: progress[0] ? colors.green : 'white',
          }}
          onClick={(e) => handleClick(e)}
          
        />
      </Html>
      <Html position={[-1.3, 1.3, -1.3]}>
        <Point
          style={{
            background: progress[1] ? colors.green : 'white',
          }}
          id='10'
          onClick={(e) => handleClick(e)}
          
        />
      </Html>
      <Html position={[-1.3, -1.3, 1.3]}>
        <Point
          style={{
            background: 'white',
            background: progress[2] ? colors.green : 'white',
          }}
          id='11'
          onClick={(e) => handleClick(e)}
        />
      </Html>
      </>
)
      }




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
