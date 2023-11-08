import React, { useRef } from "react";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { motion as motion3d } from 'framer-motion-3d';
import { Canvas, useFrame } from "@react-three/fiber";
import { NoToneMapping } from "three";

const Render = ({ rotation }) => {
  return (
    <Canvas
      resize={{ scroll: false }}
      gl={{ toneMapping: NoToneMapping }}
    >
      <CanvasElement rotation={rotation} />
    </Canvas>
  );
}

const CanvasElement = ({ rotation }) => {
  const { nodes } = useGLTF("/renders/brands-online-logo.gltf");

  const mesh = useRef(null);
  let time = 0;
  useFrame(() => {
    time += 0.01 * 1;
    mesh.current.rotation.z = .25 * Math.sin(time);
  })

  return (
    <>
      <Stage shadows={false}>
        <group dispose={null}>
          <group scale={0.01}>
            <directionalLight
              intensity={1}
              decay={2}
              rotation={[2.199, -0.292, -1.365]}
            />
            <motion3d.group
              position={[557.396, -273.599, 76.345]}
              rotation={[-0.17, -0.59, 0.255]}
              scale={3.664}
              rotation-y={rotation}
              ref={mesh}
            >
              <group position={[-88.946, 55.988, -21]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0.geometry}
                  material={nodes.Shape_0.material}
                  position={[0.254, -0.688, 0]}
                />
              </group>
              <group position={[-51.946, 85.988, -21]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0_1.geometry}
                  material={nodes.Shape_0_1.material}
                  position={[0.19, -0.074, 0]}
                />
              </group>
            </motion3d.group>
            <directionalLight
              intensity={0.7}
              decay={2}
              rotation={[0.432, 0.969, -0.51]}
            />
          </group>
        </group>
      </Stage>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
    </>
  )
}

useGLTF.preload("/renders/brands-online-logo.gltf");

export default Render;