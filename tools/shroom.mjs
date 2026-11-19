// Generates the reishi (Ganoderma lucidum) SVG used in the scenes.
// Usage: shroomSVG(prefix, cssClass, { seed }) -> string. Ids are prefixed so several can live on one page.
export function shroomSVG(P, cls, { seed = 4 } = {}) {
  // fan-shaped cap with a lobed, wavy margin; the stem joins near the lower left (lateral stipe)
  const CAP = "M70 250 C 42 168, 112 92, 212 68 C 304 46, 424 54, 504 100 C 564 136, 590 192, 562 246 C 550 272, 522 282, 492 276 C 472 294, 440 298, 414 287 C 393 302, 358 304, 334 291 C 316 298, 298 298, 286 291 C 266 302, 238 302, 218 291 C 194 302, 160 302, 140 289 C 108 293, 80 281, 70 250 Z";
  const UNDER = "M78 262 C 100 300, 150 312, 190 306 C 230 316, 300 316, 350 306 C 400 316, 470 312, 520 288 C 545 280, 560 268, 562 250 C 520 286, 470 292, 414 290 C 360 306, 300 302, 250 298 C 190 306, 120 300, 78 262 Z";
  const ox = 245, oy = 268; // growth rings converge toward where the stem joins
  const ring = (s, stroke, w, op, dy = 0) =>
    `<path d="${CAP}" transform="translate(${ox} ${oy + dy}) scale(${s}) translate(${-ox} ${-oy})" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-opacity="${op}" />`;
  const scales = [0.93, 0.85, 0.76, 0.67, 0.58, 0.49, 0.40, 0.31, 0.22];
  const furrows = Array.from({ length: 34 }, (_, i) => {
    const a = Math.PI * (1.03 + (i / 33) * 0.94); // fan from left to right across the top
    const r = 420;
    const x = (ox + Math.cos(a) * r).toFixed(1), y = (oy + Math.sin(a) * r).toFixed(1);
    return `<line x1="${ox}" y1="${oy}" x2="${x}" y2="${y}" stroke="${i % 2 ? "#1c0503" : "#ffcf9a"}" stroke-width="${i % 2 ? 1.4 : 1}" stroke-opacity="${i % 2 ? 0.09 : 0.06}" />`;
  }).join("\n");
  const rings = scales.map((s) => ring(s, "#1c0503", 2.4, 0.3) + ring(s - 0.012, "#ffb070", 1.3, 0.2)).join("\n");
  return `<svg class="${cls}" viewBox="0 0 600 470" aria-hidden="true">
  <defs>
    <radialGradient id="${P}-cap" cx="41%" cy="92%" r="88%" fx="41%" fy="92%">
      <stop offset="0" stop-color="#1a0402" />
      <stop offset="0.30" stop-color="#3f0b06" />
      <stop offset="0.52" stop-color="#6e1a0c" />
      <stop offset="0.68" stop-color="#9c2f12" />
      <stop offset="0.80" stop-color="#c9561a" />
      <stop offset="0.88" stop-color="#e08c2a" />
      <stop offset="0.94" stop-color="#efc768" />
      <stop offset="1" stop-color="#fbf2d8" />
    </radialGradient>
    <linearGradient id="${P}-stem" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#160302" />
      <stop offset="0.35" stop-color="#5a150a" />
      <stop offset="0.55" stop-color="#8a2a12" />
      <stop offset="0.75" stop-color="#4a1008" />
      <stop offset="1" stop-color="#1a0402" />
    </linearGradient>
    <linearGradient id="${P}-gloss" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.7" />
      <stop offset="1" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <filter id="${P}-tex" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.035 0.11" numOctaves="3" seed="${seed}" result="fine" />
      <feSpecularLighting in="fine" surfaceScale="2.4" specularConstant="0.9" specularExponent="30" lighting-color="#fff1d6" result="spec">
        <feDistantLight azimuth="235" elevation="55" />
      </feSpecularLighting>
      <feColorMatrix in="spec" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0.9 0.9 0.9 0 -1.9" result="specA" />
      <feComponentTransfer in="specA" result="specSoft"><feFuncA type="linear" slope="0.6" /></feComponentTransfer>
      <feTurbulence type="fractalNoise" baseFrequency="0.01 0.03" numOctaves="2" seed="${seed + 3}" result="broad" />
      <feColorMatrix in="broad" type="matrix" values="0 0 0 0 0.08  0 0 0 0 0.01  0 0 0 0 0.0  0 0 0 0.9 -0.3" result="mottle" />
      <feComposite in="mottle" in2="SourceAlpha" operator="in" result="mottleIn" />
      <feComposite in="specSoft" in2="SourceAlpha" operator="in" result="specIn" />
      <feMerge><feMergeNode in="SourceGraphic" /><feMergeNode in="mottleIn" /><feMergeNode in="specIn" /></feMerge>
    </filter>
    <filter id="${P}-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6" /></filter>
    <clipPath id="${P}-clip"><path d="${CAP}" /></clipPath>
  </defs>
  <ellipse cx="300" cy="455" rx="190" ry="12" fill="#000" opacity="0.28" filter="url(#${P}-soft)" />
  <path d="M224 270 C 212 330, 236 392, 220 458 L 278 458 C 290 392, 270 330, 268 270 Z" fill="url(#${P}-stem)" />
  <path d="M244 290 C 238 340, 252 390, 244 450" fill="none" stroke="#ffd2a8" stroke-width="5" stroke-opacity="0.35" stroke-linecap="round" />
  <g transform="translate(0 70) scale(1 0.78)">
  <path d="${UNDER}" fill="#e7d6b4" />
  <path d="${UNDER}" fill="none" stroke="#b89a6a" stroke-width="2" stroke-opacity="0.6" />
  <g>
    <path d="${CAP}" fill="url(#${P}-cap)" />
    <g clip-path="url(#${P}-clip)">${furrows}\n${rings}</g>
  </g>
  <g clip-path="url(#${P}-clip)">
    <path d="M160 136 C 230 98, 330 88, 420 106" fill="none" stroke="url(#${P}-gloss)" stroke-width="18" stroke-linecap="round" opacity="0.5" />
    <path d="M200 120 C 260 100, 320 96, 370 102" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.75" />
    <path d="M150 190 C 200 165, 250 158, 300 160" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.35" />
    <path d="M330 168 C 380 165, 430 172, 470 186" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.3" />
    <ellipse cx="250" cy="226" rx="70" ry="10" fill="#ffffff" opacity="0.12" />
    <rect id="${P}-shine" x="-140" y="0" width="70" height="600" fill="#ffffff" opacity="0" transform="skewX(-20)" />
  </g>
  <path d="${CAP}" fill="none" stroke="#fff8e6" stroke-width="4" stroke-opacity="0.9" />
  </g>
</svg>`;
}
