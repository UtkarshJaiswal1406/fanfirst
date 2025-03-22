"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function FuturisticLogo({ size = 60, className = "" }) {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Set up scene
    const scene = new THREE.Scene()

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 5

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(size, size)
    renderer.setClearColor(0x000000, 0)

    // Clear previous renderer if it exists
    if (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild)
    }

    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create logo geometry
    const ringGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 50)
    const innerRingGeometry = new THREE.TorusGeometry(1, 0.1, 16, 50)

    // Create materials
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00c3ff,
      transparent: true,
      opacity: 0.8,
      wireframe: true,
    })

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00c3ff,
      transparent: true,
      opacity: 0.4,
    })

    // Create meshes
    const outerRing = new THREE.Mesh(ringGeometry, ringMaterial)
    const innerRing = new THREE.Mesh(innerRingGeometry, ringMaterial)

    // Create glow effect
    const glowGeometry = new THREE.SphereGeometry(1.2, 32, 32)
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)

    // Create center emblem
    const emblemGeometry = new THREE.IcosahedronGeometry(0.8, 0)
    const emblemMaterial = new THREE.MeshBasicMaterial({
      color: 0x00c3ff,
      wireframe: true,
    })
    const emblem = new THREE.Mesh(emblemGeometry, emblemMaterial)

    // Add meshes to scene
    scene.add(outerRing)
    scene.add(innerRing)
    scene.add(glowMesh)
    scene.add(emblem)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 100
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      // Create a sphere of particles
      const angle1 = Math.random() * Math.PI * 2
      const angle2 = Math.random() * Math.PI * 2
      const radius = 1.5 + Math.random() * 1.5

      posArray[i * 3] = Math.cos(angle1) * Math.sin(angle2) * radius
      posArray[i * 3 + 1] = Math.sin(angle1) * Math.sin(angle2) * radius
      posArray[i * 3 + 2] = Math.cos(angle2) * radius
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00e1ff,
      transparent: true,
      opacity: 0.8,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      outerRing.rotation.x += 0.01
      outerRing.rotation.y += 0.005

      innerRing.rotation.x -= 0.007
      innerRing.rotation.y -= 0.003

      emblem.rotation.x += 0.005
      emblem.rotation.y += 0.01

      particlesMesh.rotation.y += 0.002

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      renderer.setSize(size, size)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
    }
  }, [size])

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    />
  )
}

