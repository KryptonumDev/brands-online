import React from "react";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { motion } from 'framer-motion-3d';
import { Canvas } from "@react-three/fiber";

const Render = ({ rotation }) => {
  const { nodes } = useGLTF("/renders/brands-online-logo-homepage.gltf");
  return (
    <Canvas resize={{ scroll: false }}>
      <Stage shadows={false}>
        <group dispose={null}>
          <group scale={0.01}>
            <spotLight
              intensity={1}
              angle={Math.PI / 6}
              decay={2}
              distance={2000}
              position={[-3.337, 1.932, 3.099]}
              rotation={[0.895, 0.205, 0.443]}
            />
            <directionalLight
              intensity={1.2}
              decay={2}
              rotation={[-0.172, 0.295, 0.537]}
            />
            <motion.group
              position={[121.842, -32.198, 104.76]}
              rotation-y={rotation}
            >
              <group
                position={[-0.731, 1.617, -1.232]}
                rotation={[-0.272, -0.237, -0.139]}
                scale={[0.88, 0.84, 0.88]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0.geometry}
                  material={nodes.Shape_0.material}
                  position={[-23.067, 16.115, 7.695]}
                  rotation={[0.489, Math.PI / 10, 0]}
                />
              </group>
            </motion.group>
          </group>
        </group>
      </Stage>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

useGLTF.preload("/renders/brands-online-logo-homepage.gltf");

export default Render;