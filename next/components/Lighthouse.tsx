import React, { useState, useEffect, useRef, use } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D"; //Object3D types
import { AnimationClip } from "three";

export const Lighthouse: React.FC = () => {
  const [model, setModel] = useState<Object3D | null>(null);
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/Users/tommy/Desktop/learn/three/next/lighthouse.glb", async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      setModel(nodes[0]);
    });
    return;
  }, []);
  return (
    <>
      {model ? (
        <group position={[0, -150, 0]} dispose={null}>
          <primitive name="Lighthouse" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};
