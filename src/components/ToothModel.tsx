import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function Tooth() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.8}>
        {/* Tooth body - rounded cylinder */}
        <group>
          {/* Crown */}
          <mesh position={[0, 0.3, 0]}>
            <sphereGeometry args={[0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
            <MeshTransmissionMaterial
              backside
              samples={6}
              thickness={0.5}
              chromaticAberration={0.15}
              anisotropy={0.3}
              distortion={0.2}
              distortionScale={0.3}
              temporalDistortion={0.1}
              ior={1.25}
              color="#E0F2FE"
              roughness={0.05}
              transmission={0.95}
            />
          </mesh>
          {/* Root */}
          <mesh position={[0, -0.35, 0]}>
            <cylinderGeometry args={[0.35, 0.15, 0.8, 16]} />
            <MeshTransmissionMaterial
              backside
              samples={6}
              thickness={0.3}
              chromaticAberration={0.1}
              anisotropy={0.2}
              distortion={0.1}
              distortionScale={0.2}
              temporalDistortion={0.05}
              ior={1.2}
              color="#BAE6FD"
              roughness={0.08}
              transmission={0.9}
            />
          </mesh>
        </group>
      </mesh>
    </Float>
  );
}

export default function ToothModel() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#E0F2FE" />
        <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#BAE6FD" />
        <pointLight position={[0, 3, 2]} intensity={1} color="#FFFFFF" />
        <Tooth />
      </Canvas>
    </div>
  );
}
