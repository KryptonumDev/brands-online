import React from "react";
import { useGLTF, OrthographicCamera, Stage, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from 'framer-motion-3d';

const Render = ({ progress }) => {
  const { nodes } = useGLTF("/renders/services.gltf");
  return (
    <Canvas resize={{ scroll: false }}>
      <Stage shadows={false}>
        <group dispose={null}>
          <group scale={0.01}>
            <motion.group
              position={[-33.157, -22.782, 36.454]}
              rotation-y={progress}
            >
              <group
                position={[-1.861, -4.851, -7.144]}
                rotation={[-1.824, 1.283, 2.135]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0.geometry}
                  material={nodes.Shape_0.material}
                  position={[40.316, 61.413, 30.199]}
                  rotation={[2.967, 0.434, -3.068]}
                />
              </group>
            </motion.group>
            <directionalLight
              intensity={0.7}
              decay={2}
              rotation={[-0.342, 0.666, 0.523]}
            />
            <spotLight
              intensity={1}
              angle={Math.PI / 6}
              decay={2}
              distance={2000}
              position={[117, 115.457, 18.237]}
              rotation={[0.314, 0.247, -0.925]}
              scale={[1, 0.903, 0.796]}
            />
            <OrthographicCamera
              makeDefault={false}
              far={100000}
              near={0}
              position={[-413.789, 469.32, -783.688]}
              rotation={[-2.654, -0.368, -2.953]}
            />
          </group>
        </group>
      </Stage>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
      />
    </Canvas>
  );
}

useGLTF.preload("/renders/services.gltf");

export default Render;