import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = ({ color, size, count, speed, spread }) => {
  const ref = useRef();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * spread;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count, spread]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * speed.x;
      ref.current.rotation.y -= delta * speed.y;
    }
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        dpr={[1, 2]}
      >
        <group rotation={[0, 0, Math.PI / 4]}>
          {/* Main teal particles */}
          <ParticleField
            color="#64ffda"
            size={0.002}
            count={3000}
            speed={{ x: 0.1, y: 0.15 }}
            spread={1.5}
          />
          
          {/* Purple accent particles */}
          <ParticleField
            color="#9d4edd"
            size={0.0015}
            count={2000}
            speed={{ x: 0.08, y: 0.12 }}
            spread={1.8}
          />
          
          {/* Blue accent particles */}
          <ParticleField
            color="#48bfe3"
            size={0.001}
            count={2500}
            speed={{ x: 0.06, y: 0.1 }}
            spread={2}
          />
          
          {/* Pink accent particles */}
          <ParticleField
            color="#ff6b97"
            size={0.001}
            count={1500}
            speed={{ x: 0.12, y: 0.18 }}
            spread={1.6}
          />
          
          {/* Distant white stars */}
          <ParticleField
            color="#ffffff"
            size={0.0008}
            count={2000}
            speed={{ x: 0.03, y: 0.05 }}
            spread={2.2}
          />
        </group>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
