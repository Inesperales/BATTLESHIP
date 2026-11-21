// Decoration for the placement and battle screens, in the cabin's style: brass, steel and
// ink. Pictures only (all aria-hidden): nothing here reacts to clicks or changes the game.

const BRASS = (id, x2 = 0, y2 = 1) =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="#6d4812"/><stop offset=".28" stop-color="#f6dc92"/><stop offset=".55" stop-color="#c89640"/><stop offset="1" stop-color="#4a3008"/></linearGradient>`;

// Two crossed cutlasses, under the word of a red button.
export const SWORDS = `<svg class="swords" viewBox="0 0 120 34" aria-hidden="true">
  <defs><linearGradient id="dk-steel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6f8"/><stop offset=".5" stop-color="#b7bec6"/><stop offset="1" stop-color="#6f7882"/></linearGradient>
  ${BRASS("dk-sw-brass", 1, 1)}</defs>
  <path d="M14 30 C40 22 70 10 104 4 C82 12 52 24 20 33 Z" fill="url(#dk-steel)" stroke="#3a3f44" stroke-width=".8"/>
  <path d="M106 30 C80 22 50 10 16 4 C38 12 68 24 100 33 Z" fill="url(#dk-steel)" stroke="#3a3f44" stroke-width=".8"/>
  <path d="M8 27 l10 9 M112 27 l-10 9" stroke="url(#dk-sw-brass)" stroke-width="4" stroke-linecap="round"/>
  <path d="M4 33 l8 -8 M116 33 l-8 -8" stroke="#3a1a0a" stroke-width="5" stroke-linecap="round"/>
</svg>`;

// A quill standing in an inkwell.
export const QUILL = `<svg class="quill" viewBox="0 0 90 110" aria-hidden="true">
  <defs>${BRASS("dk-qu-brass", 1, 0)}
    <linearGradient id="dk-feather" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbf3e4"/><stop offset=".6" stop-color="#d9c8a8"/><stop offset="1" stop-color="#8a7656"/></linearGradient></defs>
  <ellipse cx="46" cy="102" rx="30" ry="6" fill="#000" opacity=".3"/>
  <path d="M8 6 C30 10 50 30 56 66 L52 68 C40 40 24 22 8 6 Z" fill="url(#dk-feather)" stroke="#6e5a3a" stroke-width="1"/>
  <path d="M10 8 C28 22 44 42 54 66" stroke="#7a6444" stroke-width="1.2" fill="none"/>
  <path d="M54 64 L60 86" stroke="#3a2a1a" stroke-width="2.2"/>
  <path d="M26 80 H66 L70 100 H22 Z" fill="#1f1a22" stroke="#0e0b10" stroke-width="1.5"/>
  <ellipse cx="46" cy="80" rx="20" ry="5" fill="url(#dk-qu-brass)"/>
  <ellipse cx="46" cy="79" rx="9" ry="2.6" fill="#0b0810"/>
  <path d="M30 86 Q34 92 32 98" stroke="#fff" stroke-opacity=".25" stroke-width="2.4" fill="none"/>
</svg>`;

// A small galleon in brass, for "Your fleet".
export const SHIP_ICON = `<svg class="plaque-icon" viewBox="0 0 64 48" aria-hidden="true">
  <defs>${BRASS("dk-si-brass", 1, 1)}</defs>
  <path d="M4 32 H60 L52 44 H12 Z" fill="url(#dk-si-brass)"/>
  <path d="M22 32 V6 M38 32 V2 M50 32 V12" stroke="url(#dk-si-brass)" stroke-width="2.2"/>
  <path d="M12 10 Q22 8 32 10 Q34 19 32 28 Q22 26 12 28 Q10 19 12 10 Z M28 6 Q38 4 48 6 Q50 16 48 28 Q38 26 28 28 Q26 16 28 6 Z M46 14 Q52 13 58 14 Q59 21 58 28 Q52 27 46 28 Q45 21 46 14 Z" fill="url(#dk-si-brass)" opacity=".95"/>
</svg>`;

// A ship's wheel in brass, for "Enemy waters" (the same wheel as the header's logo).
export const HELM_ICON = `<svg class="plaque-icon" viewBox="0 0 48 48" aria-hidden="true">
  <defs>${BRASS("dk-he-brass", 1, 1)}</defs>
  <g stroke="url(#dk-he-brass)" stroke-linecap="round" fill="none">
    <path d="M24 3v42M3 24h42M9.2 9.2l29.6 29.6M38.8 9.2L9.2 38.8" stroke-width="3.2"/>
    <circle cx="24" cy="24" r="14" stroke-width="4"/>
    <circle cx="24" cy="24" r="4.5" stroke-width="3.5"/>
  </g>
</svg>`;

// The brass stand the parrot keeps during the battle.
export const STAND = `<svg class="stand" viewBox="0 0 160 110" aria-hidden="true">
  <defs>${BRASS("dk-st-brass", 1, 0)}${BRASS("dk-st-brass-v", 0, 1)}</defs>
  <ellipse cx="80" cy="103" rx="50" ry="6" fill="#000" opacity=".35"/>
  <path d="M74 0 H86 L90 88 H70 Z" fill="url(#dk-st-brass)"/>
  <rect x="64" y="30" width="32" height="8" rx="4" fill="url(#dk-st-brass-v)"/>
  <rect x="66" y="62" width="28" height="7" rx="3.5" fill="url(#dk-st-brass-v)"/>
  <path d="M40 104 Q80 74 120 104 Z" fill="url(#dk-st-brass)" stroke="#4a3008" stroke-width="1"/>
</svg>`;

// A small calligraphic flourish beside a heading (the second one is mirrored in CSS).
export const FLOURISH = `<svg class="flourish" viewBox="0 0 46 14" aria-hidden="true">
  <path d="M2 7 C10 7 12 2 18 2 C24 2 24 12 30 12 C35 12 36 7 44 7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="2.5" cy="7" r="1.8" fill="currentColor"/>
</svg>`;

// Heading text between two flourishes. `html` is already escaped.
export function ornate(html, tag = "h3", cls = "ornate") {
  return `<${tag} class="${cls}">${FLOURISH}<span>${html}</span>${FLOURISH}</${tag}>`;
}
