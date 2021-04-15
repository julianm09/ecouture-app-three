import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { a, useSpring, PerspectiveCamera } from '@react-spring/three'
import { A11yUserPreferences } from '@react-three/a11y';
import EarthUI from '../Earth'

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
  );
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
  );
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
  );
}


const Controls = OrbitControls;


const ThreeCanvas = ({ hide, setHide }) => {


  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        background: 'none',
        zIndex: hide ? -100 : 0
      }}

    >
      <KeyLight/>
      <RimLight/>
      <FillLight/>

      <EarthUI/>

        <Controls enablePan = {false} enableZoom = {false} enableDamping={true} autoRotate/>
     

    </Canvas>
  )
}

export default ThreeCanvas
