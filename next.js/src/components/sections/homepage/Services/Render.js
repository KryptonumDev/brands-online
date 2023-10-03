import React, { useEffect, useRef } from "react";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { motion as motion3d } from 'framer-motion-3d';
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Render = ({ rotation }) => {
  const options = {
    damping: 50
  }
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }

  const mouseTransform = {
    x: useTransform(mouse.x, [0, 1], [-50, 50]),
    y: useTransform(mouse.y, [0, 1], [-50, 50]),
  }

  const handleMouseMove = ({ clientX, clientY }) => {
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth);
    const y = (clientY / innerHeight);
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.div
      style={{
        width: '100%',
        height: '100%',
        x: mouseTransform.x,
        y: mouseTransform.y
      }}
    >
      <Canvas
        resize={{ scroll: false }}
      >
        <CanvasElement rotation={rotation} />
      </Canvas>
    </motion.div>
  );
}

const CanvasElement = ({ rotation }) => {
  const { nodes } = useGLTF("/renders/brands-online-logo-homepage.gltf");

  const mesh = useRef(null);
  let time = 0;
  useFrame(() => {
    time += 0.01 * 1;
    mesh.current.rotation.x = .25 * Math.sin(time);
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
              position={[-3.337, 1.932, 3.099]}
              rotation={[0.895, 0.205, 0.443]}
            />
            <directionalLight
              intensity={1.2}
              decay={2}
              rotation={[-0.172, 0.295, 0.537]}
            />
            <motion3d.group
              position={[121.842, -32.198, 104.76]}
              rotation-y={rotation}
              ref={mesh}
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
            </motion3d.group>
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

useGLTF.preload("/renders/brands-online-logo-homepage.gltf");

export default Render;