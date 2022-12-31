import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Lighthouse, Scene } from "../components";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Canvas>
          <Lighthouse />
        </Canvas>
      </main>
    </>
  );
}
