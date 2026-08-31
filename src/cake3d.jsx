import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Cake3D({
  tiers = 2,
  flavorColor = '#3D1E16',
  frostingColor = '#FFFFFF',
  toppings = { candle: true, strawberries: true, sprinkles: true, macarons: false },
  inscription = 'SPARK CAKES',
  autoRotate = true
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 4.5, 9);
    camera.lookAt(0, 1.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const backLight = new THREE.DirectionalLight(0xffb6c1, 0.5);
    backLight.position.set(-5, 5, -5);
    scene.add(backLight);

    const fillLight = new THREE.PointLight(0xfff5e6, 0.8, 10);
    fillLight.position.set(0, 3, 4);
    scene.add(fillLight);

    const cakeGroup = new THREE.Group();
    scene.add(cakeGroup);

    const plateGeo = new THREE.CylinderGeometry(3.5, 3.7, 0.15, 64);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xe5e7eb,
      metalness: 0.8,
      roughness: 0.2
    });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    plate.position.y = 0;
    plate.receiveShadow = true;
    cakeGroup.add(plate);

    const rimGeo = new THREE.TorusGeometry(3.65, 0.05, 16, 64);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.9, roughness: 0.1 });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.08;
    cakeGroup.add(rim);

    if (inscription && inscription.trim()) {
      const textCanvas = document.createElement('canvas');
      textCanvas.width = 512;
      textCanvas.height = 128;
      const ctx = textCanvas.getContext('2d');
      ctx.fillStyle = '#FFFDF9';
      ctx.fillRect(0, 0, 512, 128);
      ctx.font = 'bold 36px sans-serif';
      ctx.fillStyle = '#C51944';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(inscription.toUpperCase(), 256, 64);

      const textTex = new THREE.CanvasTexture(textCanvas);
      const plaqueGeo = new THREE.PlaneGeometry(2.4, 0.6);
      const plaqueMat = new THREE.MeshBasicMaterial({ map: textTex, side: THREE.DoubleSide });
      const plaque = new THREE.Mesh(plaqueGeo, plaqueMat);
      plaque.position.set(0, 0.4, 3.2);
      plaque.rotation.x = -Math.PI / 6;
      cakeGroup.add(plaque);
    }

    const baseMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(flavorColor),
      roughness: 0.4,
      metalness: 0.1
    });

    const icingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(frostingColor),
      roughness: 0.2,
      metalness: 0.1
    });

    const t1Geo = new THREE.CylinderGeometry(2.6, 2.6, 1.2, 48);
    const t1 = new THREE.Mesh(t1Geo, baseMat);
    t1.position.y = 0.68;
    t1.castShadow = true;
    t1.receiveShadow = true;
    cakeGroup.add(t1);

    const f1Geo = new THREE.TorusGeometry(2.62, 0.14, 16, 48);
    const f1 = new THREE.Mesh(f1Geo, icingMat);
    f1.rotation.x = Math.PI / 2;
    f1.position.y = 1.25;
    cakeGroup.add(f1);

    let topTierY = 1.3;
    let topTierRadius = 2.6;

    if (tiers >= 2) {
      const t2Geo = new THREE.CylinderGeometry(2.0, 2.0, 1.1, 48);
      const t2 = new THREE.Mesh(t2Geo, baseMat);
      t2.position.y = 1.83;
      t2.castShadow = true;
      t2.receiveShadow = true;
      cakeGroup.add(t2);

      const f2Geo = new THREE.TorusGeometry(2.02, 0.12, 16, 48);
      const f2 = new THREE.Mesh(f2Geo, icingMat);
      f2.rotation.x = Math.PI / 2;
      f2.position.y = 2.36;
      cakeGroup.add(f2);

      topTierY = 2.38;
      topTierRadius = 2.0;
    }

    if (tiers === 3) {
      const t3Geo = new THREE.CylinderGeometry(1.4, 1.4, 1.0, 48);
      const t3 = new THREE.Mesh(t3Geo, baseMat);
      t3.position.y = 2.88;
      t3.castShadow = true;
      t3.receiveShadow = true;
      cakeGroup.add(t3);

      const f3Geo = new THREE.TorusGeometry(1.42, 0.1, 16, 48);
      const f3 = new THREE.Mesh(f3Geo, icingMat);
      f3.rotation.x = Math.PI / 2;
      f3.position.y = 3.36;
      cakeGroup.add(f3);

      topTierY = 3.38;
      topTierRadius = 1.4;
    }

    let candleLight = null;
    if (toppings.candle) {
      const candleGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.8, 16);
      const candleMat = new THREE.MeshStandardMaterial({ color: 0xef4444 });
      const candle = new THREE.Mesh(candleGeo, candleMat);
      candle.position.set(0, topTierY + 0.4, 0);
      cakeGroup.add(candle);

      const flameGeo = new THREE.ConeGeometry(0.08, 0.22, 16);
      const flameMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.set(0, topTierY + 0.9, 0);
      cakeGroup.add(flame);

      candleLight = new THREE.PointLight(0xf59e0b, 1.5, 3);
      candleLight.position.set(0, topTierY + 0.95, 0);
      cakeGroup.add(candleLight);
    }

    if (toppings.strawberries) {
      const strawGeo = new THREE.ConeGeometry(0.18, 0.35, 16);
      const strawMat = new THREE.MeshStandardMaterial({ color: 0xd90429, roughness: 0.3 });

      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const r = topTierRadius * 0.65;
        const s = new THREE.Mesh(strawGeo, strawMat);
        s.position.set(Math.cos(angle) * r, topTierY + 0.15, Math.sin(angle) * r);
        s.rotation.z = 0.2;
        cakeGroup.add(s);
      }
    }

    if (toppings.sprinkles) {
      const spColors = [0xef4444, 0x3b82f6, 0x10b981, 0xf59e0b, 0xec4899];
      const spGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.1, 8);

      for (let i = 0; i < 40; i++) {
        const mat = new THREE.MeshBasicMaterial({
          color: spColors[Math.floor(Math.random() * spColors.length)]
        });
        const sp = new THREE.Mesh(spGeo, mat);
        const r = Math.random() * (topTierRadius - 0.2);
        const angle = Math.random() * Math.PI * 2;
        sp.position.set(Math.cos(angle) * r, topTierY + 0.05, Math.sin(angle) * r);
        sp.rotation.set(Math.random(), Math.random(), Math.random());
        cakeGroup.add(sp);
      }
    }

    if (toppings.macarons) {
      const macGeo = new THREE.SphereGeometry(0.2, 16, 16);
      macGeo.scale(1, 0.5, 1);
      const macColors = [0xfbcfe8, 0xfef08a, 0xbfdbfe];

      for (let i = 0; i < 4; i++) {
        const mat = new THREE.MeshStandardMaterial({
          color: macColors[i % macColors.length],
          roughness: 0.4
        });
        const mac = new THREE.Mesh(macGeo, mat);
        const angle = (i / 4) * Math.PI * 2 + 0.4;
        const r = topTierRadius * 0.7;
        mac.position.set(Math.cos(angle) * r, topTierY + 0.12, Math.sin(angle) * r);
        cakeGroup.add(mac);
      }
    }

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      cakeGroup.rotation.y += deltaX * 0.01;
      cakeGroup.rotation.x = Math.max(-0.4, Math.min(0.6, cakeGroup.rotation.x + deltaY * 0.005));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging = false; };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      cakeGroup.rotation.y += deltaX * 0.01;
      cakeGroup.rotation.x = Math.max(-0.4, Math.min(0.6, cakeGroup.rotation.x + deltaY * 0.005));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => { isDragging = false; };

    domEl.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (autoRotate && !isDragging) {
        cakeGroup.rotation.y += 0.008;
      }

      if (candleLight) {
        candleLight.intensity = 1.3 + Math.sin(elapsedTime * 10) * 0.25;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      domEl.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domEl.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [tiers, flavorColor, frostingColor, toppings, inscription, autoRotate]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '420px',
        position: 'relative',
        cursor: 'grab'
      }}
    >
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0,0,0,0.65)',
        color: '#FFFFFF',
        padding: '4px 14px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: '600',
        pointerEvents: 'none',
        whiteSpace: 'nowrap'
      }}>
        Drag mouse or finger to rotate 3D view
      </div>
    </div>
  );
}