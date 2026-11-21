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

// --- the Tournament, Ranking and About pages ----------------------------------------------

// An anchor in brass, for the ends of a red ribbon title.
export const ANCHOR = `<svg class="ribbon-icon" viewBox="0 0 40 44" aria-hidden="true">
  <defs>${BRASS("dk-an-brass", 1, 1)}</defs>
  <g fill="none" stroke="url(#dk-an-brass)" stroke-width="3.4" stroke-linecap="round">
    <circle cx="20" cy="6.5" r="4"/><path d="M20 10.5 V40 M11 17 H29"/>
    <path d="M4 26 C5 36 13 40 20 40 C27 40 35 36 36 26"/><path d="M1 29 L4 25 L8 28 M39 29 L36 25 L32 28"/>
  </g>
</svg>`;

// A laurel branch (the second one is mirrored in CSS).
export const LAUREL = `<svg class="ribbon-icon laurel" viewBox="0 0 40 44" aria-hidden="true">
  <defs>${BRASS("dk-la-brass", 1, 1)}</defs>
  <path d="M30 42 C14 36 8 22 12 4" fill="none" stroke="url(#dk-la-brass)" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="url(#dk-la-brass)">
    <ellipse cx="9" cy="9" rx="3" ry="6.5" transform="rotate(-20 9 9)"/>
    <ellipse cx="7" cy="19" rx="3" ry="6.5" transform="rotate(-45 7 19)"/>
    <ellipse cx="10" cy="29" rx="3" ry="6.5" transform="rotate(-65 10 29)"/>
    <ellipse cx="18" cy="36" rx="3" ry="6.5" transform="rotate(-80 18 36)"/>
    <ellipse cx="17" cy="13" rx="2.6" ry="5.5" transform="rotate(25 17 13)"/>
    <ellipse cx="18" cy="24" rx="2.6" ry="5.5" transform="rotate(5 18 24)"/>
    <ellipse cx="24" cy="32" rx="2.6" ry="5.5" transform="rotate(-20 24 32)"/>
  </g>
</svg>`;

// Small icons for labels, in dark ink (on parchment) or brass (on wood).
export const ICON_CREW = `<svg class="label-icon" viewBox="0 0 24 24" aria-hidden="true">
  <defs>${BRASS("dk-ic-crew", 1, 1)}</defs><g fill="url(#dk-ic-crew)">
  <circle cx="12" cy="7" r="3.6"/><path d="M5 20 C5 14 8 12 12 12 C16 12 19 14 19 20 Z"/>
  <circle cx="5" cy="9" r="2.6"/><path d="M0 19 C0 15 2 13.5 5 13.5 C6.5 13.5 7.5 14 8 14.6 C6 16 5.4 17.5 5.2 19 Z"/>
  <circle cx="19" cy="9" r="2.6"/><path d="M24 19 C24 15 22 13.5 19 13.5 C17.5 13.5 16.5 14 16 14.6 C18 16 18.6 17.5 18.8 19 Z"/></g>
</svg>`;
export const ICON_SWORDS = `<svg class="label-icon" viewBox="0 0 24 24" aria-hidden="true">
  <g fill="none" stroke="#3b2412" stroke-width="2.2" stroke-linecap="round">
    <path d="M4 3 L18 17 M20 3 L6 17"/><path d="M15 20 L20 15 M4 15 L9 20"/><path d="M17 19 L21 23 M7 19 L3 23"/>
  </g></svg>`;
export const ICON_SEED = `<svg class="label-icon" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M12 22 V11 M6 22 H18" stroke="#3b2412" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <g fill="#3b2412"><path d="M12 12 C12 6 8 3 3 3 C3 8 6 12 12 12 Z"/><path d="M12 10 C12 5 15 2 21 2 C21 7 18 10 12 10 Z"/></g></svg>`;
export const ICON_TROPHY = `<svg class="label-icon" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M6 4 H2 C2 8 3.5 10 6.5 10.5 M18 4 H22 C22 8 20.5 10 17.5 10.5" fill="none" stroke="#3b2412" stroke-width="1.8"/>
  <g fill="#3b2412"><path d="M6 2 H18 V8 C18 12 15.5 14 12 14 C8.5 14 6 12 6 8 Z"/>
  <path d="M10.5 14 H13.5 V18 H10.5 Z"/><path d="M7 19 H17 V22 H7 Z"/></g></svg>`;
export const ICON_SKULL = `<svg class="label-icon" viewBox="0 0 24 24" aria-hidden="true">
  <path fill="#3b2412" fill-rule="evenodd" d="M12 2 C6.5 2 3 5.6 3 10.5 C3 13.4 4.4 15.4 6.5 16.5 V20 C6.5 21 7.3 22 8.4 22 H15.6 C16.7 22 17.5 21 17.5 20 V16.5 C19.6 15.4 21 13.4 21 10.5 C21 5.6 17.5 2 12 2 Z M8.6 9 A2.3 2.3 0 1 0 8.6 13.6 A2.3 2.3 0 1 0 8.6 9 Z M15.4 9 A2.3 2.3 0 1 0 15.4 13.6 A2.3 2.3 0 1 0 15.4 9 Z M12 14 L10.6 16.6 H13.4 Z"/>
  <path d="M10 19 V22 M12 19 V22 M14 19 V22" stroke="#efdcae" stroke-width="1"/></svg>`;
export const ICON_EXTERNAL = `<svg class="ext-icon" viewBox="0 0 24 24" aria-hidden="true">
  <g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 3 H21 V10 M21 3 L11 13"/><path d="M19 14 V20 H4 V5 H10"/></g></svg>`;
export const HELM_SMALL = `<svg class="helm-small" viewBox="0 0 48 48" aria-hidden="true">
  <g stroke="#6b3a14" stroke-linecap="round" fill="none">
    <path d="M24 2v44M2 24h44M8.4 8.4l31.2 31.2M39.6 8.4L8.4 39.6" stroke-width="3.2"/>
    <circle cx="24" cy="24" r="14" stroke-width="4"/><circle cx="24" cy="24" r="4.5" stroke-width="3.5"/>
  </g></svg>`;

// Ink sketches on the parchment, as if drawn with a quill (sepia, thin strokes).
const INK = `fill="none" stroke="#5a3418" stroke-linecap="round" stroke-linejoin="round"`;
export const SKETCH_SHIP = `<svg class="sketch sketch-ship" viewBox="0 0 220 150" aria-hidden="true">
  <g ${INK} stroke-width="1.6">
    <path d="M30 104 C60 112 150 112 186 100 L176 122 C140 130 70 130 42 122 Z"/>
    <path d="M36 112 C70 118 150 118 180 108" stroke-width="1"/>
    <path d="M150 100 L196 94 L186 100"/>
    <path d="M78 104 V22 M118 104 V12 M156 100 V34"/>
    <path d="M60 32 Q78 26 96 32 Q100 52 96 70 Q78 66 60 70 Q56 52 60 32 Z"/>
    <path d="M56 74 Q78 70 100 74 Q104 88 100 100 Q78 98 56 100 Q52 88 56 74 Z"/>
    <path d="M98 22 Q118 16 138 22 Q142 42 138 60 Q118 56 98 60 Q94 42 98 22 Z"/>
    <path d="M96 64 Q118 60 140 64 Q144 80 140 96 Q118 94 96 96 Q92 80 96 64 Z"/>
    <path d="M140 42 Q156 38 172 42 Q176 58 172 72 Q156 70 140 72 Q137 58 140 42 Z"/>
    <path d="M118 12 L134 16 L118 19 M78 22 L92 25 L78 28"/>
    <path d="M60 32 L78 22 L96 32 M98 22 L118 12 L138 22" stroke-width="1"/>
    <path d="M10 128 Q30 122 50 128 T90 128 T130 128 T170 128 T210 128" stroke-width="1.2"/>
    <path d="M24 138 Q40 133 56 138 T88 138 M130 138 Q146 133 162 138 T196 138" stroke-width="1"/>
    <path d="M190 40 q6 -5 12 0 q6 -5 12 0 M170 22 q4 -4 8 0 q4 -4 8 0" stroke-width="1"/>
  </g>
</svg>`;
export const SKETCH_ROSE = `<svg class="sketch sketch-rose" viewBox="0 0 140 146" aria-hidden="true">
  <g ${INK} stroke-width="1.3" transform="translate(0 6)">
    <circle cx="70" cy="70" r="58"/><circle cx="70" cy="70" r="50" stroke-width="0.8"/><circle cx="70" cy="70" r="20" stroke-width="0.8"/>
    <path d="M70 6 L78 62 L70 70 L62 62 Z M70 134 L62 78 L70 70 L78 78 Z M6 70 L62 62 L70 70 L62 78 Z M134 70 L78 78 L70 70 L78 62 Z"/>
    <path d="M27 27 L66 66 M113 27 L74 66 M27 113 L66 74 M113 113 L74 74" stroke-width="0.9"/>
    <path d="M27 27 L60 56 L66 66 L56 60 Z M113 27 L80 56 L74 66 L84 60 Z M27 113 L60 84 L66 74 L56 80 Z M113 113 L80 84 L74 74 L84 80 Z" stroke-width="0.8"/>
  </g>
  <text x="70" y="9" text-anchor="middle" font-family="Georgia,serif" font-size="11" fill="#5a3418">N</text>
</svg>`;
export const SKETCH_LIGHTHOUSE = `<svg class="sketch sketch-lighthouse" viewBox="0 0 220 130" aria-hidden="true">
  <g ${INK} stroke-width="1.4">
    <path d="M40 104 Q70 80 100 86 Q120 74 150 82 Q180 88 196 104"/>
    <path d="M60 96 Q70 92 78 95 M120 88 Q132 85 142 90 M160 92 Q170 90 178 96" stroke-width="0.9"/>
    <path d="M112 84 L118 34 H136 L142 84"/><path d="M114 70 H140 M116 54 H138" stroke-width="0.9"/>
    <path d="M114 34 H140 M118 34 V24 H136 V34 M116 24 H138 L127 14 Z"/>
    <path d="M136 28 L168 20 M136 30 L168 36" stroke-width="0.8" stroke-dasharray="3 3"/>
    <path d="M90 86 V76 H104 V86 M90 76 L97 70 L104 76"/>
    <path d="M10 112 Q30 106 50 112 T90 112 T130 112 T170 112 T210 112" stroke-width="1.1"/>
    <path d="M30 122 Q44 117 58 122 T86 122 M140 122 Q154 117 168 122 T196 122" stroke-width="0.9"/>
    <path d="M60 30 q5 -4 10 0 q5 -4 10 0 M178 46 q4 -3 8 0 q4 -3 8 0" stroke-width="1"/>
  </g>
</svg>`;
export const SKETCH_ISLAND = `<svg class="sketch sketch-island" viewBox="0 0 220 130" aria-hidden="true">
  <g ${INK} stroke-width="1.4">
    <path d="M40 104 Q60 70 84 60 Q96 54 104 66 Q118 58 128 72 Q150 84 170 104"/>
    <path d="M70 78 Q80 74 90 80 M108 72 Q118 70 126 78" stroke-width="0.9"/>
    <path d="M84 60 L92 40 L100 62" stroke-width="1"/>
    <path d="M10 112 Q30 106 50 112 T90 112 T130 112 T170 112 T210 112" stroke-width="1.1"/>
    <path d="M24 122 Q38 117 52 122 T80 122 M130 122 Q144 117 158 122 T186 122" stroke-width="0.9"/>
    <path d="M140 34 q5 -4 10 0 q5 -4 10 0 M164 48 q4 -3 8 0 q4 -3 8 0 M40 40 q4 -3 8 0 q4 -3 8 0" stroke-width="1"/>
  </g>
</svg>`;
