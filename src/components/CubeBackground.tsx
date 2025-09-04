'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function CubeBackground({ className }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const test = document.createElement('canvas');
    const gl = test.getContext('webgl') || (test.getContext('experimental-webgl') as any);
    if (!gl) return;

    if (rendererRef.current) return;

    try {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio ?? 1, 2));
      renderer.setSize(host.clientWidth, host.clientHeight, false);
      host.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        host.clientWidth / host.clientHeight,
        0.1,
        100
      );
      camera.position.z = 5;

      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 1.4, 1.4),
        new THREE.MeshBasicMaterial({ color: 0x7aa2ff, wireframe: true })
      );
      scene.add(mesh);

      const onResize = () => {
        const w = host.clientWidth, h = host.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      const loop = () => {
        rafRef.current = requestAnimationFrame(loop);
        mesh.rotation.x += 0.003;
        mesh.rotation.y += 0.004;
        renderer.render(scene, camera);
      };
      loop();

      const canvas = renderer.domElement;
      const stop = (e: Event) => { e.preventDefault(); cancelAnimationFrame(rafRef.current); };
      canvas.addEventListener('webglcontextlost', stop as any, { passive: false });
      canvas.addEventListener('webglcontextcreationerror', stop as any, { passive: false });

      return () => {
        cancelAnimationFrame(rafRef.current);
        window.removeEventListener('resize', onResize);
        canvas.removeEventListener('webglcontextlost', stop as any);
        canvas.removeEventListener('webglcontextcreationerror', stop as any);
        renderer.dispose();
        rendererRef.current = null;
        while (host.firstChild) host.removeChild(host.firstChild);
      };
    } catch {
      /* fallback silencioso */
    }
  }, []);

  return (
    <div
      ref={hostRef}
      className={`absolute inset-0 z-0 pointer-events-none ${className ?? ''}`}
    />
  );
}

export default CubeBackground;
