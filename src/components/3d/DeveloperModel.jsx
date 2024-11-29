import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function DeveloperModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/developer_scene.glb');

  // Add floating animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) * 0.3;
    group.current.position.y = Math.sin(t / 2) * 0.1;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* We'll replace this placeholder with the actual model once imported */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#64ffda" />
      </mesh>
    </group>
  );
}

useGLTF.preload('/developer_scene.glb');
