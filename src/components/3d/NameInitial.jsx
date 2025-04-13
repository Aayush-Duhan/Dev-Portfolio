import { useRef, useEffect, useMemo } from 'react';
import { Text3D, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NameInitial = ({ initial = 'A', castShadow = true, receiveShadow = true }) => {
  const textRef = useRef();
  const meshRef = useRef();
  const outlineRef = useRef();
  const glowRef = useRef();
  const innerLineRef = useRef();
  
  // Main material for the letter - using MeshStandardMaterial instead of MatcapMaterial
  const mainMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f0f0f0'),
      metalness: 0.6,
      roughness: 0.3,
      transparent: false,
      opacity: 1.0,
    });
  }, []);
  
  // Edge material with glow effect
  const edgeMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color('#64ffda'),
      transparent: true,
      opacity: 0.8,
      linewidth: 1,
      linecap: 'round',
      linejoin: 'round'
    });
  }, []);
  
  // Inner line material for detail
  const innerLineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color('#64ffda'),
      transparent: true,
      opacity: 0.4,
    });
  }, []);
  
  // Glow material
  const glowMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color('#64ffda'),
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (textRef.current) {
      // More subtle rotation and floating for thinner model
      textRef.current.rotation.y = Math.sin(time * 0.3) * 0.08; 
      textRef.current.rotation.x = Math.sin(time * 0.2) * 0.02; // Slight tilt
      textRef.current.position.y = Math.sin(time * 0.6) * 0.03;
    }

    // Animate outline with more subtle effects
    if (outlineRef.current) {
      outlineRef.current.material.opacity = 0.7 + Math.sin(time * 1.5) * 0.15;
    }
    
    // Animate inner lines for subtle detail
    if (innerLineRef.current) {
      innerLineRef.current.material.opacity = 0.35 + Math.sin(time * 2.2) * 0.08;
    }
    
    // Animate glow effect - more subtle for thinner model
    if (glowRef.current) {
      glowRef.current.material.opacity = 0.05 + Math.sin(time * 1.0) * 0.02;
      glowRef.current.scale.setScalar(1.02 + Math.sin(time * 0.8) * 0.005);
    }
    
    if (meshRef.current) {
      // Add subtle color shifts only
      const hue = 0.5 + Math.sin(time * 0.2) * 0.01;
      meshRef.current.material.color.setHSL(hue, 0.05, 0.95);
    }
  });

  // Create all geometries and effects
  useEffect(() => {
    if (meshRef.current && textRef.current) {
      // Set material for main mesh
      meshRef.current.material = mainMaterial;
      meshRef.current.castShadow = castShadow;
      meshRef.current.receiveShadow = receiveShadow;
      
      // Create outer edge lines
      const edges = new THREE.EdgesGeometry(meshRef.current.geometry, 15); // 15 degree threshold
      const outlineLines = new THREE.LineSegments(edges, edgeMaterial);
      outlineLines.renderOrder = 1;
      outlineRef.current = outlineLines;
      textRef.current.add(outlineLines);
      
      // Create inner detail lines 
      const innerGeometry = new THREE.EdgesGeometry(meshRef.current.geometry, 30); // Different angle threshold
      const innerLines = new THREE.LineSegments(innerGeometry, innerLineMaterial);
      innerLines.scale.setScalar(0.97);
      innerLines.renderOrder = 2;
      innerLineRef.current = innerLines;
      textRef.current.add(innerLines);
      
      // Create glow effect mesh
      const glowGeometry = meshRef.current.geometry.clone();
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      glowMesh.scale.setScalar(1.03);
      glowMesh.renderOrder = 0;
      glowRef.current = glowMesh;
      textRef.current.add(glowMesh);
    }
  }, [meshRef.current, mainMaterial, edgeMaterial, innerLineMaterial, glowMaterial, castShadow, receiveShadow]);

  return (
    <Center scale={[0.75, 0.75, 0.75]}>
      <group ref={textRef} rotation={[0.05, -0.1, 0]}>
        <Text3D
          ref={meshRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={4}
          height={0.4}
          curveSegments={10}
          bevelEnabled={true}
          bevelThickness={0.08}
          bevelSize={0.04}
          bevelOffset={0}
          bevelSegments={8}
        >
          {initial}
        </Text3D>
      </group>
    </Center>
  );
};

export default NameInitial;
