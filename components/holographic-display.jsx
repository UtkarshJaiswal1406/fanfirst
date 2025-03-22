"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HolographicDisplay({ className = "" }) {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Set up scene
    const scene = new THREE.Scene()

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)

    // Clear previous renderer if it exists
    if (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create ticket hologram
    const ticketGeometry = new THREE.PlaneGeometry(3, 1.5)

    // Create shader material for holographic effect
    const ticketMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x00c3ff) },
        color2: { value: new THREE.Color(0x0080ff) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        
        void main() {
          // Holographic scan line effect
          float scanLine = sin(vUv.y * 30.0 + time * 2.0) * 0.5 + 0.5;
          scanLine = smoothstep(0.3, 0.7, scanLine) * 0.2;
          
          // Edge glow
          float edge = max(
            smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x),
            smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y)
          );
          
          // Holographic noise
          float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233)) * 43758.5453) * vUv.x * vUv.y);
          noise = noise * 0.1 + 0.05;
          
          // Combine effects
          vec3 color = mix(color1, color2, vUv.x);
          color = mix(color, vec3(1.0), scanLine);
          color = mix(color, vec3(1.0), edge * 0.5);
          
          // Add transparency
          float alpha = 0.7 + scanLine + edge * 0.3 + noise;
          
          gl_FragColor = vec4(color, alpha * 0.8);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    })

    const ticket = new THREE.Mesh(ticketGeometry, ticketMaterial)
    scene.add(ticket)

    // Add text texture to the ticket
    const canvas = document.createElement("canvas")
    canvas.width = 512
    canvas.height = 256
    const context = canvas.getContext("2d")

    // Draw text on canvas
    context.fillStyle = "rgba(0, 0, 0, 0)"
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.font = "bold 48px Arial"
    context.textAlign = "center"
    context.fillStyle = "#ffffff"
    context.fillText("PRIORITY", canvas.width / 2, canvas.height / 2 - 20)
    context.fillText("ACCESS", canvas.width / 2, canvas.height / 2 + 40)

    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas)

    // Create plane with text
    const textGeometry = new THREE.PlaneGeometry(2.8, 1.4)
    const textMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.9,
    })

    const textMesh = new THREE.Mesh(textGeometry, textMaterial)
    textMesh.position.z = 0.1
    scene.add(textMesh)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 200
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      // Create particles around the ticket
      posArray[i * 3] = (Math.random() - 0.5) * 5
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 3
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 2
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x00e1ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Animation loop
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)

      time += 0.01
      ticketMaterial.uniforms.time.value = time

      ticket.rotation.y = Math.sin(time * 0.3) * 0.2
      textMesh.rotation.y = Math.sin(time * 0.3) * 0.2

      // Float up and down slightly
      ticket.position.y = Math.sin(time * 0.5) * 0.2
      textMesh.position.y = Math.sin(time * 0.5) * 0.2

      // Rotate particles
      particlesMesh.rotation.y += 0.002

      // Update particle positions
      const positions = particlesMesh.geometry.attributes.position.array
      for (let i = 0; i < particlesCount; i++) {
        // Make particles float around
        positions[i * 3 + 1] += Math.sin(time + i) * 0.002

        // Reset particles that go too far
        if (Math.abs(positions[i * 3 + 1]) > 2) {
          positions[i * 3 + 1] = (Math.random() - 0.5) * 3
        }
      }
      particlesMesh.geometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()

      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (container && rendererRef.current) {
        container.removeChild(rendererRef.current.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className={`w-full h-full ${className}`} />
}

