import { useRef, useEffect } from 'react';
import { Text3D, Float, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NameInitial = () => {
  const textRef = useRef();
  const meshRef = useRef();
  const linesRef = useRef();
  
  // Create edge material with glow effect
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: "#64ffda",
    transparent: true,
    opacity: 0.8,
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (textRef.current) {
      // Smooth rotation
      textRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
      // Subtle floating
      textRef.current.position.y = Math.sin(time * 0.8) * 0.1;
    }

    // Animate edge opacity for glow effect
    if (linesRef.current) {
      linesRef.current.material.opacity = 0.5 + Math.sin(time * 2) * 0.3;
    }
  });

  useEffect(() => {
    if (meshRef.current && !linesRef.current) {
      // Create edges with thicker lines for glow effect
      const edges = new THREE.EdgesGeometry(meshRef.current.geometry);
      const lines = new THREE.LineSegments(edges, edgeMaterial);
      linesRef.current = lines;
      
      if (textRef.current) {
        textRef.current.add(lines);
        meshRef.current.material.visible = false;
      }

      // Add particles
      const particlesCount = 100; // Increased particle count
      const positions = new Float32Array(particlesCount * 3);
      
      for(let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 5;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      }
      
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        color: "#64ffda",
        size: 0.02,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true
      });
      
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      textRef.current.add(particles);
    }
  }, [meshRef.current]);

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.4}
    >
      <Center scale={[0.75, 0.75, 0.75]}>
        <group ref={textRef}>
          <Text3D
            ref={meshRef}
            font="/fonts/helvetiker_regular.typeface.json"
            size={4}
            height={0.5}
            curveSegments={1}
            bevelEnabled={true}
            bevelThickness={0.05}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            A
          </Text3D>
        </group>
      </Center>
    </Float>
  );
};

export default NameInitial;
