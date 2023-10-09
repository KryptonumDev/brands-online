import React, { useEffect, useRef } from "react";
import { useGLTF, Stage } from "@react-three/drei";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from 'framer-motion-3d';
import { Canvas, useFrame } from "@react-three/fiber";

const Render = ({ setIsLoading }) => {
  return (
    <Canvas
      resize={{ scroll: false }}
      onCreated={() => setIsLoading(false)}
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
      x: useTransform(mouse.x, [0, 1], [-1, 0]),
      y: useTransform(mouse.y, [0, 1], [-1, 0]),
    },
    1: {
      x: useTransform(mouse.x, [0, 1], [1, -1]),
      y: useTransform(mouse.y, [0, 1], [1, -1]),
    },
    2: {
      x: useTransform(mouse.x, [0, 1], [0, 3]),
      y: useTransform(mouse.y, [0, 1], [0, 1.5]),
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
          <group scale={0.008}>
            <motion.group
              position={[46.234, -33.072, 58.831]}
              rotation={[-0.051, 0.146, -0.577]}
              scale={[0.401, 0.356, 0.356]}
              rotation-x={mesh[0].x}
              rotation-y={mesh[0].y}
              ref={mesh0}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.ź.geometry}
                material={nodes.ź.material}
                position={[-144.169, 153.683, -8]}
              />
            </motion.group>
            <motion.group
              position={[-34.902, -89.227, -10.524]}
              rotation={[-0.438, 0.139, -1.773]}
              scale={0.384}
              rotation-x={mesh[1].x}
              rotation-y={mesh[1].y}
              ref={mesh1}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shape_0.geometry}
                material={nodes.Shape_0.material}
                position={[0.855, -0.787, 0]}
              />
            </motion.group>
            <spotLight
              intensity={1.3}
              angle={Math.PI / 3}
              decay={2}
              distance={200}
              position={[167.106, 183.826, -34.752]}
              rotation={[-0.566, -0.228, -0.617]}
              scale={[1, 0.903, 0.796]}
            />
            <motion.group
              position={[-96.802, -74.177, 112.785]}
              rotation-x={mesh[2].x}
              rotation-y={mesh[2].y}
              ref={mesh2}
            >
              <group
                position={[-43.814, -7.745, -19.598]}
                rotation={[0.037, -0.152, 0.787]}
                scale={0.366}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0_1.geometry}
                  material={nodes.Shape_0_1.material}
                  position={[0.427, -0.835, 0]}
                />
              </group>
            </motion.group>
            <directionalLight
              intensity={1.3}
              decay={20}
              rotation={[-0.342, 0.666, 0.523]}
            />
          </group>
        </group>
      </Stage>
    </>
  )
}

useGLTF.preload("/renders/homepage.gltf");

export default Render;