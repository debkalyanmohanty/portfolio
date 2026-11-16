import styled from 'styled-components';

import { profile } from '../data/profile';
import { Container } from './ui';

const Bar = styled.footer`
  padding: 28px 0 36px;
  border-top: 1px solid var(--border);
  font-size: 14px;
  color: var(--muted);

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px 24px;
  }
  a {
    color: var(--muted);
    &:hover { color: var(--accent); }
  }
`;

const Footer = () => (
  <Bar>
    <Container>
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <a href="#top">Back to top ↑</a>
    </Container>
  </Bar>
);

export default Footer;
