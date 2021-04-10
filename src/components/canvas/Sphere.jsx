import { Suspense } from 'react'
import { Environment, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import useStore from '@/helpers/store'
import { A11y, useA11y, useUserPreferences } from '@react-three/a11y'
import Model from '../Earth'


const SphereComponent = () => {
  const router = useStore((s) => s.router)

  return (
    <Suspense fallback={null}>

        <Model />

      <Environment preset={'studio'} />
    </Suspense>
  )
}

export default SphereComponent
