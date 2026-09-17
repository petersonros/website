'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CUBE_FOV = 45;
const CUBE_SIZE = 1.4;
const BASE_CAMERA_Z = 5;
// Metade da diagonal do cubo (raio da esfera que o envolve), já que ele gira
// livremente em x/y e pode expor qualquer diagonal para a câmera.
const CUBE_BOUNDING_RADIUS = (CUBE_SIZE * Math.sqrt(3)) / 2;
const FIT_MARGIN = 1.15;

// Calcula a distância mínima da câmera para que o cubo caiba inteiro na tela,
// considerando tanto a altura quanto a largura visíveis (a largura é o fator
// limitante em telas estreitas/altas, aspect < 1).
function computeCameraZ(aspect: number) {
  const vFovRad = THREE.MathUtils.degToRad(CUBE_FOV);
  const halfHeightFactor = Math.tan(vFovRad / 2);
  const zForHeight = CUBE_BOUNDING_RADIUS / halfHeightFactor;
  const zForWidth = CUBE_BOUNDING_RADIUS / (halfHeightFactor * aspect);
  return Math.max(BASE_CAMERA_Z, zForHeight, zForWidth) * FIT_MARGIN;
}

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
      const initialAspect = host.clientWidth / host.clientHeight;
      const camera = new THREE.PerspectiveCamera(CUBE_FOV, initialAspect, 0.1, 100);
      camera.position.z = computeCameraZ(initialAspect);

      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 1.4, 1.4),
        new THREE.MeshBasicMaterial({ color: 0x7aa2ff, wireframe: true })
      );
      scene.add(mesh);

      const onResize = () => {
        const w = host.clientWidth, h = host.clientHeight;
        renderer.setSize(w, h, false);
        const aspect = w / h;
        camera.aspect = aspect;
        camera.position.z = computeCameraZ(aspect);
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
