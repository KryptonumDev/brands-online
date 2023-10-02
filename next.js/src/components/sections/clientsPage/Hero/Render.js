import React from "react";
import { useGLTF, OrthographicCamera, Stage, OrbitControls } from "@react-three/drei";
import { motion } from 'framer-motion-3d';
import { Canvas } from "@react-three/fiber";

const Render = ({ progress }) => {
  const { nodes } = useGLTF("/renders/logo-brands-online.gltf");
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
              intensity={0.7}
              decay={2}
              rotation={[-0.166, 0.259, 0.58]}
            />
            <motion.group
              position={[97.705, -28.857, 83.781]}
              scale={[1, 1.002, 1]}
              rotation-y={progress}
            >
              <group
                position={[3.42, 8.178, 10.802]}
                rotation={[-0.309, -0.214, -0.096]}
                scale={[0.973, 0.928, 0.973]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0.geometry}
                  material={nodes.Shape_0.material}
                  position={[-22.407, 18.88, -13.047]}
                  rotation={[0.074, 0.398, -0.269]}
                />
              </group>
            </motion.group>
            <OrthographicCamera
              makeDefault={false}
              far={100000}
              near={0}
              position={[95.38, -24.756, 1092.293]}
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
        autoRotateSpeed={5}
      />
    </Canvas>
  );
}

useGLTF.preload("/renders/logo-brands-online.gltf");

export default Render;