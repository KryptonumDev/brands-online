import React, { useEffect, useRef } from "react";
import { useGLTF, Stage } from "@react-three/drei";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from 'framer-motion-3d';
import { Canvas, useFrame } from "@react-three/fiber";
import { NoToneMapping } from "three";

const Render = ({ setIsLoading }) => {
  return (
    <Canvas
      resize={{ scroll: false }}
      onCreated={() => setIsLoading(false)}
      gl={{ toneMapping: NoToneMapping }}
    >
      <CanvasElement />
    </Canvas>
  );
}

const CanvasElement = () => {
  const { nodes } = useGLTF("/renders/homepage.gltf");

  const options = {
    damping: 20
  }
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }
  const mesh = {
    0: {
      x: useTransform(mouse.x, [0, 1], [-3, 1]),
      y: useTransform(mouse.y, [0, 1], [-1, 0]),
    },
    1: {
      x: useTransform(mouse.x, [0, 1], [1, -1]),
      y: useTransform(mouse.y, [0, 1], [1, -1]),
    },
    2: {
      x: useTransform(mouse.x, [0, 1], [0, 3]),
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
  }, []);

  const mesh0 = useRef(null);
  const mesh1 = useRef(null);
  const mesh2 = useRef(null);
  let time = 0;
  useFrame(() => {
    time += 0.02;
    mesh0.current.position.y = 3 * Math.sin(time);
    mesh1.current.position.y = -8 * Math.sin(time);
    mesh2.current.position.y = 5 * Math.sin(time);
  })

  return (
    <>
      <Stage shadows={false}>
        <group dispose={null}>
          <group scale={0.01}>
            <motion.group
              position={[80.087, 35.76, 67.906]}
              rotation-x={mesh[0].x}
              rotation-y={mesh[0].y}
              ref={mesh0}
            >
              <group
                position={[6.048, 46.004, -10.375]}
                rotation={[0.107, 0.447, -0.679]}
                scale={[0.482, 0.428, 0.428]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0.geometry}
                  material={nodes.Shape_0.material}
                  position={[-86.74, 85.5, -8]}
                />
              </group>
            </motion.group>
            <motion.group
              position={[-2.296, -136.045, 169.386]}
              rotation-x={mesh[1].x}
              rotation-y={mesh[1].y}
              ref={mesh1}
            >
              <group
                position={[25.968, 14.322, -28.377]}
                rotation={[-0.741, -0.106, -1.482]}
                scale={0.465}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0_1.geometry}
                  material={nodes.Shape_0_1.material}
                  position={[0.855, -0.787, 0]}
                />
              </group>
            </motion.group>
            <spotLight
              intensity={1}
              angle={Math.PI / 6}
              decay={2}
              distance={2000}
              position={[196.569, 167.645, -16.355]}
              rotation={[-0.566, -0.228, -0.661]}
              scale={[2.095, 0.903, 0.796]}
            />
            <motion.group
              position={[-152.705, -49.086, 84.174]}
              rotation-x={mesh[2].x}
              rotation-y={mesh[2].y}
              ref={mesh2}
            >
              <group
                position={[-52.082, -10.437, 7.791]}
                rotation={[0.747, 0.5, 0.652]}
                scale={0.404}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0_2.geometry}
                  material={nodes.Shape_0_2.material}
                  position={[0.427, -0.835, 0]}
                />
              </group>
            </motion.group>
            <directionalLight
              intensity={0.75}
              decay={2}
              rotation={[-0.34, 0.668, 0.519]}
            />
          </group>
        </group>
      </Stage>
    </>
  )
}

useGLTF.preload("/renders/homepage.gltf");

export default Render;