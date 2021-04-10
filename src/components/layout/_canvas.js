import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import useStore from '@/helpers/store'
import { OrbitControls, Preload } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import { A11yUserPreferences } from '@react-three/a11y'

const Bg = () => {
  const router = useStore((state) => state.router)
  const { bg } = useSpring({
    bg: router && router.route !== '/box' ? 0 : 0x17 / 255,
  })
  return <a.color attach='background' r={bg} g={bg} b={bg} />
}
const LCanvas = ({ children }) => {


  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        background: 'none'
      }}
      onCreated={({ events }) => {
        useStore.setState({ events })
      }}
    >

        <OrbitControls enablePan = {false} enableZoom = {false} enableDamping={true} autoRotate/>
        {children}

    </Canvas>
  )
}

export default LCanvas
