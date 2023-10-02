import React from "react";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Render = () => {
  const { nodes } = useGLTF("/renders/about.gltf");
  return (
    <Canvas resize={{ scroll: false }}>
      <Stage shadows={false}>
        <group dispose={null} rotation-y={-600}>
          <group scale={0.01}>
            <group position={[-312.591, -217.432, 202.151]}>
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
            </group>
            <spotLight
              intensity={1}
              angle={Math.PI / 6}
              decay={2}
              distance={2000}
              position={[90.237, 167.119, 154.947]}
              rotation={[-3.096, -0.445, -2.297]}
              scale={[1, 0.903, 0.796]}
            />
            <group position={[-565.417, -316.778, 322.479]}>
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
            </group>
            <directionalLight
              intensity={0.7}
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
      />
    </Canvas>
  );
}

useGLTF.preload("/renders/about.gltf");

export default Render;