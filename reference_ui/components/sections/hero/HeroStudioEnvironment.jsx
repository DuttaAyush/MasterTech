import { useLayoutEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

export default function HeroStudioEnvironment() {
  const { scene, gl } = useThree()

  useLayoutEffect(() => {
    const pmremGenerator = new THREE.PMREMGenerator(gl)
    pmremGenerator.compileEquirectangularShader()

    const environment = new RoomEnvironment()
    const texture = pmremGenerator.fromScene(environment, 0.04).texture
    scene.environment = texture

    environment.dispose?.()

    return () => {
      scene.environment = null
      texture.dispose()
      pmremGenerator.dispose()
    }
  }, [scene, gl])

  return null
}
