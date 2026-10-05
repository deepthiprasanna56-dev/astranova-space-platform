import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function createLunarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const context = canvas.getContext('2d');
  const base = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  base.addColorStop(0, '#85847f');
  base.addColorStop(0.5, '#5e5e5b');
  base.addColorStop(1, '#777671');
  context.fillStyle = base;
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let index = 0; index < 12000; index += 1) {
    const shade = Math.random() > 0.5 ? 255 : 0;
    context.fillStyle = `rgba(${shade}, ${shade}, ${shade}, ${Math.random() * 0.08})`;
    context.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
  }

  for (let index = 0; index < 240; index += 1) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 3 + Math.random() ** 2 * 42;
    const crater = context.createRadialGradient(x - radius * 0.24, y - radius * 0.24, radius * 0.08, x, y, radius);
    crater.addColorStop(0, 'rgba(31, 31, 30, 0.58)');
    crater.addColorStop(0.62, 'rgba(59, 59, 57, 0.35)');
    crater.addColorStop(0.84, 'rgba(186, 185, 178, 0.36)');
    crater.addColorStop(1, 'rgba(57, 57, 55, 0.12)');
    context.fillStyle = crater;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

export default function MoonScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.z = 6.7;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xb6bbc4, 1.05));
    const sunlight = new THREE.DirectionalLight(0xffe4be, 3.1);
    sunlight.position.set(-4, 3, 5);
    scene.add(sunlight);
    const rimLight = new THREE.DirectionalLight(0x9ba7bd, 1.2);
    rimLight.position.set(4, -1, -3);
    scene.add(rimLight);

    const moonTexture = createLunarTexture();
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(1.72, 128, 128),
      new THREE.MeshStandardMaterial({ map: moonTexture, bumpMap: moonTexture, bumpScale: 0.055, roughness: 1 }),
    );
    moon.rotation.z = -0.16;
    scene.add(moon);
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(2.12, 0.006, 4, 240),
      new THREE.MeshBasicMaterial({ color: 0xc78a52, transparent: true, opacity: 0.5 }),
    );
    orbit.rotation.set(1.08, 0.12, -0.3);
    scene.add(orbit);

    const positions = new Float32Array(360 * 3);
    for (let index = 0; index < positions.length; index += 3) {
      positions[index] = (Math.random() - 0.5) * 11;
      positions[index + 1] = (Math.random() - 0.5) * 5.5;
      positions[index + 2] = -1 - Math.random() * 7;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xe4e0d9, size: 0.018, transparent: true, opacity: 0.72 }));
    scene.add(stars);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.position.z = width < 520 ? 7.8 : 6.7;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    let frameId;
    let previousTime = 0;
    const animate = (time) => {
      const delta = previousTime ? (time - previousTime) / 1000 : 0;
      previousTime = time;
      moon.rotation.y += delta * 0.035;
      orbit.rotation.z += delta * 0.008;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      moon.geometry.dispose();
      moon.material.dispose();
      moonTexture.dispose();
      orbit.geometry.dispose();
      orbit.material.dispose();
      starGeometry.dispose();
      stars.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div ref={containerRef} role="img" aria-label="A rotating, cratered three-dimensional Moon in orbit"
      className="relative mx-auto mt-8 h-[280px] w-full max-w-6xl overflow-hidden sm:mt-10 sm:h-[360px] lg:h-[430px]">
      <div className="pointer-events-none absolute left-4 top-5 z-10 text-left sm:left-8 sm:top-8">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-300 sm:text-xs">Lunar Survey / 01</p>
        <p className="mt-1 font-mono text-[10px] text-slate-500 dark:text-slate-400 sm:text-xs">Shackleton Crater - South Pole</p>
      </div>
      <div className="pointer-events-none absolute bottom-5 right-4 z-10 text-right font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:bottom-8 sm:right-8 sm:text-xs">
        <span className="text-orange-500 dark:text-orange-300">384,400 km</span>
        <span className="mx-2 text-slate-400">/</span>Earth-Moon Distance
      </div>
    </div>
  );
}
