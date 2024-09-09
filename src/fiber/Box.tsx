import { useRef, useState } from "react";

import { useTexture } from "@react-three/drei";
import { type MeshProps } from "@react-three/fiber";

import type { Mesh } from "three";

const Box = (props: MeshProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const texture = useTexture("/logo192.png");

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "orange"}
        map={texture}
      />
    </mesh>
  );
};

export default Box;
