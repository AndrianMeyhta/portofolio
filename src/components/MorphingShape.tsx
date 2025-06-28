"use client";

import { motion, useScroll, useTransform } from "framer-motion";

// Konsep Final: Kristalisasi Kosmik
// 1. KEMUNCULAN: Dua bentuk dasar (segitiga & belah ketupat) muncul dari sisi layar.
// 2. TARIAN SIMBIOTIK: Keduanya saling mengorbit dalam tarian yang dinamis.
// 3. FUSI & KRISTALISASI: Keduanya menyatu untuk menciptakan bentuk kristal bintang yang baru.

const MorphingShape = () => {
  const { scrollY } = useScroll();

  // Palet Warna yang Dibuat Lebih Subtil untuk Latar Belakang
  const colors = {
    shapeA: "rgba(129, 140, 248, 0.4)", // Opacity diturunkan ke 0.4
    shapeAGlow: "rgba(129, 140, 248, 0.4)",
    shapeB: "rgba(251, 146, 60, 0.4)", // Opacity diturunkan ke 0.4
    shapeBGlow: "rgba(251, 146, 60, 0.4)",
    fusion:
      "linear-gradient(135deg, rgba(129, 140, 248, 0.5) 0%, rgba(251, 146, 60, 0.5) 100%)",
    fusionGlow: "rgba(255, 255, 255, 0.3)",
  };

  // =============================================================
  // TAHAP 1: KEMUNCULAN BENTUK (0px - 1500px)
  // =============================================================

  // Opacity untuk kedua bentuk saat muncul
  const appearanceOpacity = useTransform(scrollY, [0, 1000], [0, 1]);
  // Posisi awal dari luar layar bergerak ke posisi awal tarian
  const initialX = useTransform(scrollY, [0, 1500], [400, 150]); // Mulai dari 400px, masuk ke 150px

  // =============================================================
  // TAHAP 2: TARIAN SIMBIOTIK (1500px - 4000px)
  // =============================================================

  const orbitAngle = useTransform(scrollY, [1500, 4000], [0, 720]); // 2 putaran
  const orbitRadius = useTransform(scrollY, [1500, 4000], [150, 0]); // Menyempit ke tengah

  const danceX = (angle: number, radius: number, isReversed = false) =>
    (isReversed ? -1 : 1) * Math.cos(angle * (Math.PI / 180)) * radius;
  const danceY = (angle: number, radius: number, isReversed = false) =>
    (isReversed ? -1 : 1) * Math.sin(angle * (Math.PI / 180)) * radius;

  // Menggabungkan gerakan awal dan gerakan menari
  const getX = (initial: number, isReversed = false) =>
    useTransform(scrollY, (v) =>
      v < 1500
        ? isReversed
          ? -initial
          : initial
        : danceX(orbitAngle.get(), orbitRadius.get(), isReversed)
    );
  const getY = (isReversed = false) =>
    useTransform(scrollY, (v) =>
      v < 1500 ? 0 : danceY(orbitAngle.get(), orbitRadius.get(), isReversed)
    );

  // =============================================================
  // TAHAP 3: FUSI & KRISTALISASI (4000px - 5500px)
  // =============================================================

  const dancingShapesOpacity = useTransform(scrollY, [3800, 4000], [1, 0]);
  const fusionShapeOpacity = useTransform(
    scrollY,
    [3900, 4200, 5200, 5500],
    [0, 1, 1, 0]
  );
  const fusionShapeScale = useTransform(scrollY, [3900, 4200], [0, 1.2]);
  const fusionShapeRotation = useTransform(scrollY, [4000, 5500], [0, 90]);

  return (
    // PENTING: z-[-1] untuk memastikan div ini selalu di belakang elemen lain.
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      {/* BENTUK A (Segitiga) */}
      <motion.div
        className="absolute"
        style={{
          opacity: useTransform(scrollY, (v) =>
            v < 3800 ? appearanceOpacity.get() : dancingShapesOpacity.get()
          ),
          x: getX(initialX.get()),
          y: getY(),
          width: 120,
          height: 120,
          backgroundColor: colors.shapeA,
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // Bentuk segitiga
          boxShadow: `0 0 40px ${colors.shapeAGlow}`,
          filter: "blur(2px)", // Efek blur agar lebih soft
        }}
      />

      {/* BENTUK B (Belah Ketupat) */}
      <motion.div
        className="absolute"
        style={{
          opacity: useTransform(scrollY, (v) =>
            v < 3800 ? appearanceOpacity.get() : dancingShapesOpacity.get()
          ),
          x: getX(initialX.get(), true), // isReversed = true
          y: getY(true), // isReversed = true
          width: 110,
          height: 110,
          backgroundColor: colors.shapeB,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Bentuk belah ketupat
          boxShadow: `0 0 40px ${colors.shapeBGlow}`,
          filter: "blur(2px)", // Efek blur agar lebih soft
        }}
      />

      {/* HASIL FUSI (Kristal Bintang) */}
      <motion.div
        className="absolute"
        style={{
          opacity: fusionShapeOpacity,
          scale: fusionShapeScale,
          rotate: fusionShapeRotation,
          width: 180,
          height: 180,
          background: colors.fusion,
          boxShadow: `0 0 60px ${colors.fusionGlow}, 0 0 100px ${colors.fusionGlow}`,
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          filter: "blur(1.5px)",
        }}
      />
    </div>
  );
};

export default MorphingShape;
