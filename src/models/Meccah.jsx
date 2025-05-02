import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import meccahModel from "../assets/3d/mecca.glb";

const Meccah = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) => {
  const meccahRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(meccahModel);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.93;

  const handleStart = (e) => {
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleEnd = (e) => {
    e.preventDefault();
    setIsRotating(false);
  };

  const handleMove = (e) => {
    if (!isRotating) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = (clientX - lastX.current) / viewport.width;

    const increment = delta * 0.01 * Math.PI;
    meccahRef.current.rotation.y += increment;

    lastX.current = clientX;
    rotationSpeed.current = increment;
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setIsRotating(true);
      const increment = 0.005 * Math.PI;
      meccahRef.current.rotation.y += increment;
      rotationSpeed.current = increment;
    } else if (event.key === "ArrowRight") {
      setIsRotating(true);
      const increment = -0.005 * Math.PI;
      meccahRef.current.rotation.y += increment;
      rotationSpeed.current = increment;
    }
  };

  const handleKeyUp = (event) => {
    if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener("pointerdown", handleStart);
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerup", handleEnd);
    canvas.addEventListener("touchstart", handleStart, { passive: false });
    canvas.addEventListener("touchmove", handleMove, { passive: false });
    canvas.addEventListener("touchend", handleEnd, { passive: false });

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handleStart);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerup", handleEnd);
      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", handleMove);
      canvas.removeEventListener("touchend", handleEnd);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, isRotating]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.0001) {
        rotationSpeed.current = 0;
      }

      meccahRef.current.rotation.y += rotationSpeed.current;
    }

    const rotation = meccahRef.current.rotation.y;
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  return (
    <a.group ref={meccahRef} {...props}>
      <mesh geometry={nodes.Object_8.geometry} material={materials.door} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.brick} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.black} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.white} />
      <mesh geometry={nodes.Object_16.geometry} material={materials["Material.001"]} />
      <mesh geometry={nodes.Object_18.geometry} material={materials["Material.002"]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials["Material.003"]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials["Material.004"]} />
      <mesh geometry={nodes.Object_24.geometry} material={materials["Material.005"]} />
      <mesh geometry={nodes.Object_26.geometry} material={materials["Material.006"]} />
      <mesh geometry={nodes.Object_28.geometry} material={materials["Marble062_3K.001"]} />
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials["Marble062_3K.001"]}
        position={[0, -1, -1.072]}
        scale={[0.98, 0.08, 0.069]}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials["Material.008"]}
        position={[-1, 0.8, 0]}
        scale={[0.194, 0.071, 0.071]}
      />
    </a.group>
  );
};

export default Meccah;

useGLTF.preload("/kaaba_in_masjidil_haram_mecca.glb");
