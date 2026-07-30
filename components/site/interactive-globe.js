'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';

// Dynamically import react-globe.gl with SSR disabled to prevent window/WebGL hydration errors
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function InteractiveGlobe() {
  const globeRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Fetch standard world map geometry for the hollow hex continent mesh
  useEffect(() => {
    setMounted(true);
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then((res) => res.json())
      .then((data) => setCountries(data.features || []))
      .catch((err) => console.error('Globe geometry load error:', err));
  }, []);

  // Network nodes representing enterprise computing centers
  const nodes = useMemo(() => [
    { lat: 40.7128, lng: -74.006, name: 'New York', size: 0.35, color: '#e879f9' },
    { lat: 51.5074, lng: -0.1278, name: 'London', size: 0.35, color: '#d8b4fe' },
    { lat: 35.6762, lng: 139.6503, name: 'Tokyo', size: 0.35, color: '#e879f9' },
    { lat: 50.1109, lng: 8.6821, name: 'Frankfurt', size: 0.3, color: '#c084fc' },
    { lat: 1.3521, lng: 103.8198, name: 'Singapore', size: 0.35, color: '#e879f9' },
    { lat: -23.5505, lng: -46.6333, name: 'São Paulo', size: 0.3, color: '#a855f7' },
    { lat: 25.2048, lng: 55.2708, name: 'Dubai', size: 0.3, color: '#d8b4fe' }
  ], []);

  // Pulsing network communication lines between nodes
  const arcs = useMemo(() => [
    { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, color: ['#e879f9', '#c084fc'] },
    { startLat: 51.5074, startLng: -0.1278, endLat: 50.1109, endLng: 8.6821, color: ['#c084fc', '#a855f7'] },
    { startLat: 50.1109, startLng: 8.6821, endLat: 25.2048, endLng: 55.2708, color: ['#a855f7', '#d8b4fe'] },
    { startLat: 25.2048, startLng: 55.2708, endLat: 1.3521, endLng: 103.8198, color: ['#d8b4fe', '#e879f9'] },
    { startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, color: ['#e879f9', '#c084fc'] },
    { startLat: 40.7128, startLng: -74.006, endLat: -23.5505, endLng: -46.6333, color: ['#c084fc', '#e879f9'] },
  ], []);

  const handleGlobeReady = () => {
    const globe = globeRef.current;
    if (!globe) return;

    // Safely execute user material specifications if exposed as imperative methods
    if (typeof globe.globeMaterial === 'function') {
      const globeMaterial = globe.globeMaterial();
      if (globeMaterial) {
        globeMaterial.color = new THREE.Color('#1d0f2f');
        globeMaterial.emissive = new THREE.Color('#7e22ce');
        globeMaterial.emissiveIntensity = 1.5;
      }
    }

    if (typeof globe.showGlobe === 'function') globe.showGlobe(false);
    if (typeof globe.showAtmosphere === 'function') globe.showAtmosphere(false);

    // Safely configure camera & auto-rotation controls
    const controls = typeof globe.controls === 'function' ? globe.controls() : globe.controls;
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.85;
      controls.enableZoom = false;
    }

    // Access native Three.js Scene safely to inject visible 3D particle orbital rings
    const scene = typeof globe.scene === 'function' ? globe.scene() : globe.scene;
    if (!scene) return;

    const globeRadius = 100; // Standard react-globe.gl world unit radius

    /**
     * Creates high-visibility Three.js Particle Orbital Rings that bypass WebGL 1px line thickness limits.
     */
    const createParticleRing = (radiusMultiplier, tiltX, tiltY, tiltZ, colorHex, dotCount, dotSize, opacity = 0.85) => {
      const radius = globeRadius * radiusMultiplier;
      const points = [];

      for (let i = 0; i < dotCount; i++) {
        const theta = (i / dotCount) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.PointsMaterial({
        color: new THREE.Color(colorHex),
        size: dotSize,
        transparent: true,
        opacity: opacity,
        sizeAttenuation: true
      });

      const ringMesh = new THREE.Points(geometry, material);
      ringMesh.rotation.set(tiltX, tiltY, tiltZ);

      // Attach glowing solid satellite spheres directly onto the ring track
      const satAngles = [0, Math.PI];
      satAngles.forEach((angle, idx) => {
        if (idx === 0 || Math.random() > 0.3) {
          const satGeo = new THREE.SphereGeometry(idx === 0 ? 3.2 : 2.4, 24, 24);
          const satMat = new THREE.MeshBasicMaterial({
            color: new THREE.Color(idx === 0 ? '#ffffff' : '#e879f9')
          });
          const satMesh = new THREE.Mesh(satGeo, satMat);
          satMesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
          ringMesh.add(satMesh);
        }
      });

      scene.add(ringMesh);
      return ringMesh;
    };

    // Instantiate 3 bold, crystal-clear rotating particle orbital rings around Earth
    const ring1 = createParticleRing(1.3, Math.PI / 3, 0.4, 0, '#e879f9', 180, 2.6, 0.9);
    const ring2 = createParticleRing(1.5, -Math.PI / 3.2, 0.8, 0.3, '#c084fc', 220, 2.3, 0.85);
    const ring3 = createParticleRing(1.4, Math.PI / 2.1, -0.4, 0.6, '#f0abfc', 200, 2.0, 0.75);

    // Continuous smooth orbital rotation loop
    let animationFrameId;
    const animateRings = () => {
      animationFrameId = requestAnimationFrame(animateRings);
      if (ring1) {
        ring1.rotation.z += 0.004;
        ring1.rotation.x += 0.0005;
      }
      if (ring2) {
        ring2.rotation.z -= 0.0035;
      }
      if (ring3) {
        ring3.rotation.z += 0.005;
        ring3.rotation.y -= 0.0008;
      }
    };
    animateRings();
  };

  if (!mounted) {
    return <div className="w-full h-[480px] flex items-center justify-center bg-transparent" />;
  }

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none overflow-hidden">
      {/* Subtle background glow enhancement behind the 3D scene */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.22)_0%,transparent_72%)] pointer-events-none" />

      <div className="relative z-10 cursor-grab active:cursor-grabbing flex items-center justify-center w-full h-full">
        <Globe
          ref={globeRef}
          width={540}
          height={500}
          backgroundColor="rgba(0,0,0,0)"
          onGlobeReady={handleGlobeReady}
          showGlobe={false}      // Declarative React prop to hide Earth texture cleanly
          showAtmosphere={false} // Declarative React prop to hide atmosphere
          // Country Hex Polygons (Hollow Continent Mesh)
          hexPolygonsData={countries}
          hexPolygonResolution={3}
          hexPolygonMargin={0.55}
          hexPolygonColor={() => '#c084fc'}
          // Network Nodes
          pointsData={nodes}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointRadius="size"
          pointAltitude={0.015}
          // Pulsing Network Arcs
          arcsData={arcs}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor="color"
          arcDashLength={0.35}
          arcDashGap={0.15}
          arcDashAnimateTime={2200}
          arcAltitude={0.15}
        />
      </div>
    </div>
  );
}
