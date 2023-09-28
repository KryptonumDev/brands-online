import React, { useEffect } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from 'framer-motion-3d';

export function HeroRender(props) {
  const { nodes } = useGLTF("/renders/homepage.gltf");

  const mouse = {
    x: useSpring(useMotionValue(0), { damping: 20 }),
    y: useSpring(useMotionValue(0), { damping: 20 }),
  }

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
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-41.172, -49.506, 1000]}
        />
        <motion.group
          position={[46.234, -33.072, 58.831]}
          rotation={[-0.051, 0.146, -0.577]}
          scale={[0.401, 0.356, 0.356]}
          rotation-x={mouse.x}
          rotation-y={mouse.y}
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
          rotation-x={mouse.x}
          rotation-y={mouse.y}
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
          intensity={1}
          angle={Math.PI / 6}
          decay={2}
          distance={2000}
          position={[167.106, 183.826, -34.752]}
          rotation={[-0.566, -0.228, -0.617]}
          scale={[1, 0.903, 0.796]}
        />
        <group position={[-96.802, -74.177, 112.785]}>
          <motion.group
            position={[-43.814, -7.745, -19.598]}
            rotation={[0.037, -0.152, 0.787]}
            scale={0.366}
            rotation-x={mouse.x}
            rotation-y={mouse.y}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Shape_0_1.geometry}
              material={nodes.Shape_0_1.material}
              position={[0.427, -0.835, 0]}
            />
          </motion.group>
        </group>
        <directionalLight
          intensity={1}
          decay={2}
          rotation={[-0.342, 0.666, 0.523]}
        />
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[7.17, -30.83, 1000]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/renders/homepage.gltf");