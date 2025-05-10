"use client"

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function CubeModel(props: any) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2
    mesh.current.rotation.y += delta * 0.3
  })
  
  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#6366f1" : "#4f46e5"} />
    </mesh>
  )
}

function FloatingGraphs() {
  const group = useRef<THREE.Group>(null!)
  
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.1
  })
  
  return (
    <group ref={group}>
      {/* Bar charts */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[i - 2, Math.random() * 0.5, -2]}>
          <boxGeometry args={[0.2, 0.5 + Math.random(), 0.2]} />
          <meshStandardMaterial color="#4f46e5" opacity={0.7} transparent />
        </mesh>
      ))}
      
      {/* Pie chart */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[0.7, 0.2, 16, 32, Math.PI * 1.25]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI * 1.25]}>
        <torusGeometry args={[0.7, 0.2, 16, 32, Math.PI * 0.75]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[400px] w-full rounded-xl overflow-hidden"
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <CubeModel position={[-2, 0, 0]} />
        <FloatingGraphs />
        
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  )
}