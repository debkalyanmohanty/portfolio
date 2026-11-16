import { createGlobalStyle, css } from 'styled-components';

// All colours meet WCAG AA contrast against their background.
const light = css`
  --bg: #f8fafc;
  --surface: #ffffff;
  --surface-2: #f1f5f9;
  --border: #e2e8f0;
  --text: #0f172a;
  --muted: #475569;
  --accent: #0369a1;
  --accent-contrast: #ffffff;
  --accent-soft: #e0f2fe;
  --success: #047857;
  --success-soft: #d1fae5;
  --go: #00657f;
  --go-soft: #e0f7fc;
  --aws: #8a4b00;
  --aws-soft: #fff1dc;
  --shadow: 0 1px 2px rgb(15 23 42 / 0.06), 0 4px 16px rgb(15 23 42 / 0.06);
  color-scheme: light;
`;

const dark = css`
  --bg: #0b1220;
  --surface: #111a2e;
  --surface-2: #17223a;
  --border: #23314f;
  --text: #e6edf7;
  --muted: #a3b1c6;
  --accent: #38bdf8;
  --accent-contrast: #04111d;
  --accent-soft: rgb(56 189 248 / 0.12);
  --success: #34d399;
  --success-soft: rgb(52 211 153 / 0.12);
  --go: #5fd8f2;
  --go-soft: rgb(0 173 216 / 0.14);
  --aws: #ffb547;
  --aws-soft: rgb(255 153 0 / 0.13);
  --shadow: 0 1px 2px rgb(0 0 0 / 0.3), 0 8px 24px rgb(0 0 0 / 0.25);
  color-scheme: dark;
`;

const GlobalStyles = createGlobalStyle`
  :root {
    ${light}
    --radius: 14px;
    --max: 1080px;
  }
  /* Follow the OS setting unless the visitor picked a theme with the toggle */
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme='light']) { ${dark} }
  }
  :root[data-theme='dark'] { ${dark} }

  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; padding: 0; }

  html {
    -webkit-text-size-adjust: 100%;
    scroll-padding-top: 80px;
  }
  @media (prefers-reduced-motion: no-preference) {
    html { scroll-behavior: smooth; }
  }

  body {
    font-family: var(--font-sans), system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    background: var(--bg);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  img { display: block; max-width: 100%; height: auto; }
  a { color: inherit; }
  ul, ol { list-style: none; }
  button { font: inherit; }

  :focus-visible {
    outline: 3px solid var(--accent);
    outline-offset: 3px;
    border-radius: 6px;
  }

  .visually-hidden {
    position: absolute !important;
    width: 1px; height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
