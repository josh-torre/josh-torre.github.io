export const GrainOverlay = () => (
  <div
    className="absolute inset-0 rounded-[32px] pointer-events-none mix-blend-overlay opacity-90"
    style={{
      backgroundSize: "100px 100px",
    }}
  >
    <svg viewBox="0 0 376 376" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.46"
          numOctaves="6"
          stitchTiles="stitch"
        />
      </filter>

      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);
