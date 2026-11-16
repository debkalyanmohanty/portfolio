import styled from 'styled-components';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

import { profile } from '../data/profile';
import { Button, Card, Container, Eyebrow, Section, SectionTitle } from './ui';

const Panel = styled(Card)`
  padding: 24px 20px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Lead = styled.p`
  max-width: 620px;
  margin: -16px 0 28px;
  font-size: 17px;
  color: var(--muted);
`;

const List = styled.ul`
  display: grid;
  gap: 10px;
  margin-bottom: 28px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  a {
    display: flex;
    align-items: center;
    gap: 14px;
    min-height: 56px;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--surface-2);
    text-decoration: none;
    overflow-wrap: anywhere;
    transition: border-color 0.15s ease;

    &:hover { border-color: var(--accent); }
  }
  svg {
    flex-shrink: 0;
    color: var(--accent);
  }
  small {
    display: block;
    font-size: 12px;
    color: var(--muted);
  }
  span {
    font-weight: 600;
  }
`;

const ITEMS = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'in/mohantydebkalyan', href: profile.linkedin, external: true },
  { icon: FiGithub, label: 'GitHub', value: 'debkalyanmohanty', href: profile.github, external: true },
];

const Contact = () => (
  <Section id="contact" aria-labelledby="contact-title">
    <Container>
      <Panel>
        <Eyebrow>Contact</Eyebrow>
        <SectionTitle id="contact-title">Let&apos;s talk</SectionTitle>
        <Lead>
          Open to backend, full-stack and cloud roles in {profile.relocate.join(', ')}. Notice period:{' '}
          {profile.noticePeriod}.
        </Lead>
        <List>
          {ITEMS.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label}>
              <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <Icon size={20} aria-hidden="true" />
                <div>
                  <small>{label}</small>
                  <span>{value}</span>
                </div>
              </a>
            </li>
          ))}
        </List>
        <Button $variant="primary" href={profile.resume} download>
          <FiDownload size={18} aria-hidden="true" /> Download Resume (PDF)
        </Button>
      </Panel>
    </Container>
  </Section>
);

export default Contact;
