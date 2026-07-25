import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import HeroStudioEnvironment from './HeroStudioEnvironment';
const BALL_RADIUS = 0.55;
const DROP_START_SCROLL = 0.12;
const HIT_SCROLL = 0.4;
const BASE_X = 2.8;
const CONTACT_BLEND_START = 0.4;
const SLIDE_LIFT_MAX = 1.2; //0.06
const DROP_DEPTH = 7.2;
const CONTINUITY_BLEND = 0.45;
const EDGE_CLEARANCE = 0.03;

function Scene({ scrollProgress, quality }) {
  const groupRef = useRef();
  const sphereRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const light1Ref = useRef();
  const light2Ref = useRef();

  useFrame((state) => {
    let targetScroll = scrollProgress ? scrollProgress.get() : 0;
    if (isNaN(targetScroll) || targetScroll == null) targetScroll = 0;
    const s = targetScroll;
    const t = state.clock.elapsedTime;
    const viewW = state.viewport.width;
    const viewH = state.viewport.height;
    const baseX = state.size.width <= 768 ? 0 : BASE_X;
    const slideAngle = Math.atan(viewH / (0.88 * viewW));
    const slideDx = Math.cos(slideAngle);
    const camYAtHit = -DROP_DEPTH;
    const triangleLeftX = -viewW / 2 + viewW * 0.12;

    const getEdgeContactY = (x, camBaseY) => {
      const u = (x - triangleLeftX) / (viewW * 0.88);
      const clampedU = Math.max(0, Math.min(1, u));
      const surfaceY = (camBaseY - viewH / 2) + clampedU * viewH;
      return surfaceY + BALL_RADIUS / Math.cos(slideAngle);
    };

    if (groupRef.current) {
      groupRef.current.position.x = baseX;
      groupRef.current.rotation.y = s * Math.PI * 2;
      groupRef.current.rotation.x = s * Math.PI / 4;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.x = s * Math.PI * 6 + t * 1.2;
      sphereRef.current.rotation.y = s * Math.PI * 8 + t * 1.8;
      sphereRef.current.rotation.z = s * Math.PI * 4 + t * 0.6;

      let posX = baseX;
      let posY = 0;
      let camY = 0;

      if (s > DROP_START_SCROLL && s <= HIT_SCROLL) {
        const tCam = Math.min((s - DROP_START_SCROLL) / (HIT_SCROLL - DROP_START_SCROLL), 1);
        camY = -tCam * tCam * DROP_DEPTH;
      } else if (s > HIT_SCROLL) {
        camY = -DROP_DEPTH;
      }

      if (s <= DROP_START_SCROLL) {
        posX = baseX;
        posY = 0;
      } else if (s <= CONTACT_BLEND_START) {
        // Phase 1: ball exits rings and drops on -Y while staying centered on X.
        posX = baseX;
        const edgeAtBase = getEdgeContactY(baseX, camYAtHit) + EDGE_CLEARANCE;
        posY = Math.max(camY, edgeAtBase);
      } else {
        // Phase 2: once dropped, continue by sliding along the triangular wall.
        const slideT = (s - CONTACT_BLEND_START) / (1 - CONTACT_BLEND_START);
        const dist = slideT * 40;
        posX = baseX - dist * slideDx;
        // Keep continuity with the drop position, then follow the triangular wall.
        const triggerCamY = -DROP_DEPTH;
        const edgeAtTrigger = getEdgeContactY(baseX, camYAtHit);
        const continuityOffset = (triggerCamY - edgeAtTrigger) * CONTINUITY_BLEND;
        const edgeY = getEdgeContactY(posX, camYAtHit);
        const rawY = edgeY + continuityOffset + slideT * SLIDE_LIFT_MAX;
        posY = Math.max(rawY, edgeY + EDGE_CLEARANCE);
      }

      sphereRef.current.position.set(posX, posY, 0);

      state.camera.position.x = 0;
      state.camera.position.y = camY;

      if (light1Ref.current) light1Ref.current.position.set(0, -3 + camY, 2);
      if (light2Ref.current) light2Ref.current.position.set(5, 4 + camY, 5);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 4 + s * Math.PI * 4;
      ring1Ref.current.rotation.z = -Math.PI / 6 + s * Math.PI * 2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = Math.PI / 3 - s * Math.PI * 4;
      ring2Ref.current.rotation.z = Math.PI / 8 - s * Math.PI * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight ref={light1Ref} position={[0, -3, 2]} intensity={12} color="#c85000" angle={1.5} penumbra={1} />
      <pointLight position={[0, -1, 0]} intensity={6} color="#b84a00" distance={12} />
      <spotLight ref={light2Ref} position={[5, 4, 5]} intensity={2.4} color="#ffffff" penumbra={1} />
      {!quality.low && <HeroStudioEnvironment />}

      <group ref={groupRef} scale={0.65}>
        <mesh ref={ring1Ref}>
          <torusGeometry args={[1.8, 0.13, 16, quality.torusSegments]} />
          <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.85} />
        </mesh>
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.2, 0.1, 16, quality.torusSegments]} />
          <meshPhysicalMaterial color="#ffffff" transmission={1} opacity={1} metalness={0} roughness={0} ior={1.5} thickness={0.5} />
        </mesh>
      </group>

      <mesh ref={sphereRef}>
        <sphereGeometry args={[BALL_RADIUS, quality.sphereSegments, quality.sphereSegments]} />
        <meshPhysicalMaterial
          color="#7a5318"
          roughness={0.12}
          metalness={0.96}
          clearcoat={1}
          clearcoatRoughness={0.04}
          emissive="#2a1505"
          emissiveIntensity={0.35}
        />
      </mesh>

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={quality.low ? 0.18 : 0.26}
        scale={8}
        blur={quality.low ? 1.1 : 1.35}
        far={3.4}
        resolution={quality.shadowResolution}
      />
    </>
  );
}

export default function Hero3DVisual({ scrollProgress }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const updateDeviceProfile = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      const cpu = navigator.hardwareConcurrency || 8;
      const memory = navigator.deviceMemory || 8;
      setIsMobile(mobile);
      setIsLowPower(mobile || cpu <= 4 || memory <= 4);
    };

    updateDeviceProfile();
    window.addEventListener('resize', updateDeviceProfile);
    return () => window.removeEventListener('resize', updateDeviceProfile);
  }, []);

  const quality = useMemo(
    () => ({
      low: isLowPower,
      dpr: isLowPower ? [0.75, 1] : [1, 1.5],
      sphereSegments: isLowPower ? 28 : 52,
      torusSegments: isLowPower ? 34 : 64,
      shadowResolution: isLowPower ? 128 : 256
    }),
    [isLowPower]
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 28.5], fov: 10 }}
        dpr={quality.dpr}
        performance={{ min: 0.6 }}
        gl={{ antialias: false, alpha: true, premultipliedAlpha: false, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene scrollProgress={scrollProgress} quality={quality} />
      </Canvas>
    </div>
  );
}
