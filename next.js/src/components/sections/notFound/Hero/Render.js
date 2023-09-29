import React, { useEffect, useRef } from "react";
import { useGLTF, OrthographicCamera, Stage, OrbitControls } from "@react-three/drei";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from 'framer-motion-3d';
import { Canvas, useFrame } from "@react-three/fiber";

const options = {
  damping: 20
}

const Render = () => (
  <Canvas resize={{ scroll: false }}>
    <CanvasElements />
  </Canvas>
)

const CanvasElements = () => {
  const { nodes } = useGLTF("/renders/404.gltf");

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }
  const mesh = {
    0: {
      x: useTransform(mouse.x, [0, 1], [-1.5, 0]),
      y: useTransform(mouse.y, [0, 1], [-.5, 1.5]),
    },
    1: {
      x: useTransform(mouse.x, [0, 1], [.5, -.5]),
      y: useTransform(mouse.y, [0, 1], [-1, .5]),
    },
    2: {
      x: useTransform(mouse.x, [0, 1], [-1, 0]),
      y: useTransform(mouse.y, [0, 1], [0, 1]),
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

  const mesh0 = useRef(null);
  const mesh1 = useRef(null);
  const mesh2 = useRef(null);

  let time = 0;
  useFrame(() => {
    time += 0.01 * 1;
    mesh0.current.position.y = -15 * Math.sin(time);
    mesh1.current.position.y = -5 * Math.sin(time);
    mesh2.current.position.y = 8 * Math.sin(time);
  })
  return (
    <>
      <Stage shadows={false}>
        <group dispose={null}>
          <group scale={0.01}>
            <motion.group
              position={[264.422, -20.937, -231.409]}
              rotation-x={mesh[0].x}
              rotation-y={mesh[0].y}
            >
              <group
                position={[2.485, 11.462, 69.501]}
                rotation={[-2.519, 0.355, 3.008]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0.geometry}
                  material={nodes.Shape_0.material}
                  position={[-13.597, -0.864, 49.66]}
                  ref={mesh0}
                />
              </group>
            </motion.group>
            <motion.group
              position={[340.129, 70.049, -126.15]}
              rotation-x={mesh[1].x}
              rotation-y={mesh[1].y}
            >
              <group
                position={[0.137, -1.248, 36.551]}
                rotation={[-2.663, 0.664, -2.843]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0_1.geometry}
                  material={nodes.Shape_0_1.material}
                  position={[65.637, -0.4, 55.834]}
                  rotation={[-2.547, -0.221, -2.878]}
                  ref={mesh1}
                />
              </group>
            </motion.group>
            <motion.group
              position={[172.484, -4.419, -121.885]}
              rotation-x={mesh[2].x}
              rotation-y={mesh[2].y}
            >
              <group
                position={[4.76, -5.779, 32.842]}
                rotation={[-2.158, 0.297, 2.918]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Shape_0_2.geometry}
                  material={nodes.Shape_0_2.material}
                  position={[67.058, -0.4, 50.517]}
                  rotation={[-2.547, -0.221, -2.878]}
                  ref={mesh2}
                />
              </group>
            </motion.group>
            <spotLight
              intensity={1}
              angle={Math.PI / 6}
              decay={2}
              distance={2000}
              position={[91.981, 106.59, 390.606]}
              rotation={[-1.816, 0.027, 2.634]}
              scale={[1, 0.903, 0.796]}
            />
            <directionalLight
              intensity={0.7}
              decay={2}
              rotation={[-0.506, 0.629, 0.756]}
            />
            <OrthographicCamera
              makeDefault={false}
              far={100000}
              near={0}
              position={[289.024, 17.341, 1000]}
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

useGLTF.preload("/renders/404.gltf");

export default Render;