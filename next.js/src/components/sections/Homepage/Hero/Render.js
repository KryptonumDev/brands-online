import React, { useEffect, useRef } from "react";
import { useGLTF, Stage, PerspectiveCamera } from "@react-three/drei";
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
      x: useTransform(mouse.x, [0, 1], [-1, 1]),
      y: useTransform(mouse.y, [0, 1], [-1, 1]),
    },
    1: {
      x: useTransform(mouse.x, [0, 1], [-1, 1]),
      y: useTransform(mouse.y, [0, 1], [-2, 0]),
    },
    2: {
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
  }, []);

  const mesh0 = useRef(null);
  const mesh1 = useRef(null);
  const mesh2 = useRef(null);
  let time = 0;
  useFrame(() => {
    time += 0.02;
    mesh0.current.position.y = 8 * Math.sin(time);
    mesh1.current.position.y = -13 * Math.sin(time);
    mesh2.current.position.y = 13 * Math.sin(time);
  })

  return (
    <>
      <Stage shadows={false}>
        <group>
          <group scale={0.01}>
            <motion.group
              position={[184.438, 294.244, 299.84]}
              rotation-x={mesh[0].x}
              rotation-y={mesh[0].y}
            >
              <group
                position={[-7.348, 132.705, -33.139]}
                rotation={[-0.005, 0.503, -0.485]}
                scale={[1.388, 1.232, 1.232]}
                ref={mesh0}
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
              position={[96.218, -226.036, 400.485]}
              rotation-x={mesh[1].x}
              rotation-y={mesh[1].y}
            >
              <group
                position={[68.546, -5.902, -96.177]}
                rotation={[-1.158, 0.055, -1.48]}
                scale={1.339}
                ref={mesh1}
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
              position={[727.382, 436.616, 45.659]}
              rotation={[-0.566, -0.228, -0.661]}
              scale={[6.568, 2.831, 2.494]}
            />
            <motion.group
              position={[-304.251, -44.403, 330.953]}
              rotation-x={mesh[2].x}
              rotation-y={mesh[2].y}
            >
              <group
                position={[-176.401, -35.351, 26.387]}
                rotation={[0.747, 0.5, 0.652]}
                scale={1.369}
                ref={mesh2}
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
              intensity={0.74}
              decay={2}
              rotation={[-0.276, 0.589, 0.472]}
            />
            <PerspectiveCamera
              makeDefault={false}
              far={100000}
              near={70}
              fov={45}
              position={[-23.991, -27.979, 1518.056]}
            />
          </group>
        </group>
      </Stage>
    </>
  )
}

useGLTF.preload("/renders/homepage.gltf");

export default Render;