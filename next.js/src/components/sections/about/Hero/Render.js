import React, { useEffect, useRef } from "react";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion as motion3d } from 'framer-motion-3d';
import { NoToneMapping } from "three";

const options = {
  damping: 25
}

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
  const { nodes } = useGLTF("/renders/about.gltf");

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }

  const rotation = {
    0: {
      x: useTransform(mouse.x, [0, 1], [-1, 1]),
      y: useTransform(mouse.y, [0, 1], [-1, 1]),
    },
    1: {
      x: useTransform(mouse.x, [0, 1], [-1, 0]),
      y: useTransform(mouse.y, [0, 1], [-0.5, 1]),
    },
  };

  const position = {
    x: useTransform(mouse.y, [0, 1], [-50, 50]),
    y: useTransform(mouse.x, [0, 1], [-80, 0]),
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

  const mesh1 = useRef(null);
  const mesh2 = useRef(null);
  let time = 0;
  useFrame(() => {
    time += 0.01 * 2;
    mesh1.current.rotation.z = .2 * Math.sin(time);
    mesh2.current.rotation.z = -.1 * Math.sin(time);
  })

  return (
    <>
      <Stage shadows={false}>
        <group dispose={null}>
          <group scale={0.01}>
            <spotLight
              intensity={1}
              angle={Math.PI / 6}
              decay={2}
              distance={2000}
              position={[15.309, -21.159, 143.026]}
              rotation={[0.119, 0.344, 0.759]}
            />
            <directionalLight
              intensity={0.444}
              decay={2}
              rotation={[-0.506, 0.629, 0.756]}
            />
            <motion3d.group
              position-x={position.x}
              position-y={position.y}
            >
              <motion3d.group
                position={[619.016, -468.333, 10.83]}
                rotation-x={rotation[0].x}
                rotation-y={rotation[0].y}
                ref={mesh1}
              >
                <group
                  position={[29.558, 94.494, -88.033]}
                  rotation={[-0.252, -0.467, -0.85]}
                  scale={[1.378, 1.378, 1.733]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_0.geometry}
                    material={nodes.Shape_0.material}
                    position={[0.199, -0.875, 0]}
                    rotation={[-0.319, 0, 0]}
                  />
                </group>
              </motion3d.group>
            </motion3d.group>
            <motion3d.group
              position-x={position.x}
              position-y={position.y}
            >
              <motion3d.group
                position={[282.137, -327.582, 6.465]}
                rotation-x={rotation[1].x}
                rotation-y={rotation[1].y}
                ref={mesh2}
              >
                <group
                  position={[-160.521, 55.613, 1.438]}
                  rotation={[0.506, 0.134, 0.576]}
                  scale={1.466}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape_0_1.geometry}
                    material={nodes.Shape_0_1.material}
                    position={[0.723, -0.262, 0]}
                  />
                </group>
              </motion3d.group>
            </motion3d.group>
          </group>
        </group>
      </Stage>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        autoRotate={false}
      />
    </>
  )
}

useGLTF.preload("/renders/about.gltf");

export default Render;