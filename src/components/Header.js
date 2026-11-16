import styled from 'styled-components';
import { FiDownload, FiMoon, FiSun } from 'react-icons/fi';

import { profile } from '../data/profile';
import { Button, Container } from './ui';

const NAV = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const SkipLink = styled.a`
  position: absolute;
  left: 12px;
  top: -60px;
  z-index: 100;
  padding: 10px 14px;
  border-radius: 8px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-weight: 600;
  text-decoration: none;
  &:focus { top: 12px; }
`;

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: saturate(160%) blur(10px);
  -webkit-backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid var(--border);
`;

const Row = styled(Container)`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 64px;
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  text-decoration: none;
  margin-right: auto;

  span:first-child {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: var(--surface-2);
    border: 1px solid var(--border);
    color: var(--accent);
    font-size: 14px;
  }
  span:last-child {
    display: none;
    @media (min-width: 900px) { display: inline; }
  }
`;

const Nav = styled.nav`
  display: none;
  @media (min-width: 720px) { display: block; }

  ul { display: flex; gap: 4px; }
  a {
    display: block;
    padding: 8px 12px;
    border-radius: 8px;
    color: var(--muted);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    &:hover { color: var(--text); background: var(--surface-2); }
  }
`;

const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  &:hover { border-color: var(--accent); color: var(--accent); }

  /* Icon follows the active theme without needing React state (no hydration flash) */
  .sun { display: none; }
  :root[data-theme='dark'] & .sun { display: block; }
  :root[data-theme='dark'] & .moon { display: none; }
`;

const ResumeButton = styled(Button)`
  padding: 10px 14px;
`;

const toggleTheme = () => {
  const root = document.documentElement;
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch (e) {
    /* storage blocked - theme still applies for this visit */
  }
};

const Header = () => (
  <>
    <SkipLink href="#main">Skip to content</SkipLink>
    <Bar>
      <Row>
        <Logo href="#top" aria-label={`${profile.name} - back to top`}>
          <span aria-hidden="true">DK</span>
          <span>{profile.name}</span>
        </Logo>
        <Nav aria-label="Primary">
          <ul>
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </Nav>
        <IconButton type="button" onClick={toggleTheme} aria-label="Toggle dark mode" title="Toggle dark mode">
          <FiMoon className="moon" size={18} aria-hidden="true" />
          <FiSun className="sun" size={18} aria-hidden="true" />
        </IconButton>
        <ResumeButton $variant="primary" href={profile.resume} download>
          <FiDownload size={16} aria-hidden="true" />
          Resume
        </ResumeButton>
      </Row>
    </Bar>
  </>
);

export default Header;
