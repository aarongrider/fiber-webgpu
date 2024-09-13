import { useEffect } from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

// @ts-ignore
import { WebGPURenderer } from "three/src/Three.WebGPU";

import Box from "./Box";

const Scene = ({ extraBoxCount }: { extraBoxCount: number }) => {
  const { gl } = useThree();

  useEffect(() => {
    console.log(gl);
  }, []);

  return (
    <>
      <directionalLight intensity={1} position={[0, 0, 1]} /* castShadow */ />
      <OrbitControls />
      <pointLight intensity={10} position={[1, 1, 1]} castShadow />
      <pointLight intensity={10} position={[-1, -1, -1]} castShadow />
      <pointLight intensity={10} position={[1, 0, -1]} castShadow />
      <pointLight intensity={10} position={[-1, 0, 1]} castShadow />
      <pointLight intensity={10} position={[0, 0, 2]} castShadow />
      <Box position-x={-1.2} castShadow receiveShadow />
      <Box position-x={1.2} castShadow receiveShadow />
      {Array.from({ length: extraBoxCount }).map((_, i) => (
        <Box
          key={i}
          position-x={Math.random() * 10 - 5}
          position-y={Math.random() * 6 - 3}
          position-z={Math.random() * -10}
          castShadow
          receiveShadow
        />
      ))}
    </>
  );
};

const FiberScene = () => {
  return (
    <Canvas
      shadows
      gl={(canvas) => {
        // @ts-ignore
        return new WebGPURenderer({ canvas });
      }}
    >
      <Scene extraBoxCount={10} />
    </Canvas>
  );
};

export default FiberScene;
