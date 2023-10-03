import React, { useEffect } from "react";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from 'framer-motion-3d';

const Render = ({ setIsLoading }) => {
  const { nodes } = useGLTF("/renders/about.gltf");

  const options = {
    damping: 20
  }
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }

  const mesh = {
    0: {
      x: useTransform(mouse.x, [0, 1], [-1, 2]),
      y: useTransform(mouse.y, [0, 1], [-1, 2]),
    },
    1: {
      x: useTransform(mouse.x, [0, 1], [-1, 1]),
      y: useTransform(mouse.y, [0, 1], [-1, 1]),
    },
  };

  const handleMouseMove = ({ clientX, clientY }) => {
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth);
    const y = (clientY / innerHeight);
    mouse.y.set(x);
    mouse.x.set(y);
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Canvas
      resize={{ scroll: false }}
      onCreated={() => setIsLoading(false)}
    >
      <Stage shadows={false}>
        <group dispose={null} rotation-y={-600}>
          <group scale={0.01}>
            <motion.group
              position={[-312.591, -217.432, 202.151]}
              rotation-x={mesh[0].x}
              rotation-y={mesh[0].y}
            >
              <group
                position={[-47.612, 100.845, -34.037]}
                rotation={[-0.242, 0.198, -0.397]}
                scale={0.53}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0.geometry}
                  material={nodes.Shape_0.material}
                  position={[0, -0.5, 0]}
                />
              </group>
            </motion.group>
            <spotLight
              intensity={1}
              angle={Math.PI / 6}
              decay={2}
              distance={2000}
              position={[90.237, 167.119, 154.947]}
              rotation={[-3.096, -0.445, -2.297]}
              scale={[1, 0.903, 0.796]}
            />
            <motion.group
              position={[-565.417, -316.778, 322.479]}
              rotation-x={mesh[1].x}
              rotation-y={mesh[1].y}
            >
              <group
                position={[115.417, 257.85, -10.479]}
                rotation={[0.206, -0.154, 0.349]}
                scale={0.625}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0_1.geometry}
                  material={nodes.Shape_0_1.material}
                  position={[-588, -128, 188]}
                />
              </group>
            </motion.group>
            <directionalLight
              intensity={1}
              decay={2}
              rotation={[-0.342, 0.666, 0.523]}
            />
          </group>
        </group>
      </Stage>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={5}
      />
    </Canvas>
  );
}

useGLTF.preload("/renders/about.gltf");

export default Render;