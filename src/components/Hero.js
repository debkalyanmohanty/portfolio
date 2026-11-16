import styled from 'styled-components';
import { FaAws } from 'react-icons/fa';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

import { metrics, profile } from '../data/profile';
import { Button, Container } from './ui';

const Wrap = styled.section`
  position: relative;
  padding: 48px 0 56px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 88px 0 80px;
  }

  /* soft glow - pure CSS, no image cost */
  &::before {
    content: '';
    position: absolute;
    inset: -40% -10% auto auto;
    width: 640px;
    height: 640px;
    background: radial-gradient(closest-side, var(--accent-soft), transparent);
    pointer-events: none;
  }
`;

const Inner = styled(Container)`
  position: relative;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Badge = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid;
`;

const OpenBadge = styled(Badge)`
  color: var(--success);
  background: var(--success-soft);
  border-color: color-mix(in srgb, var(--success) 40%, transparent);

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 25%, transparent);
  }
`;

const AwsBadge = styled(Badge)`
  color: var(--aws);
  background: var(--aws-soft);
  border-color: color-mix(in srgb, var(--aws) 40%, transparent);
`;

const Name = styled.h1`
  font-size: clamp(36px, 7vw, 60px);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

const Headline = styled.p`
  margin-top: 12px;
  font-size: clamp(19px, 2.6vw, 24px);
  line-height: 1.35;
  font-weight: 600;
  color: var(--text);

  span { color: var(--accent); }
`;

const Pitch = styled.p`
  margin-top: 16px;
  max-width: 640px;
  font-size: clamp(16px, 2vw, 18px);
  color: var(--muted);
`;

const Meta = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 12px;
  font-size: 14px;
  color: var(--muted);
  svg { margin-top: 4px; flex-shrink: 0; }
`;

const Metrics = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 28px;
  max-width: 720px;

  @media (min-width: 560px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Metric = styled.li`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);

  @media (min-width: 560px) {
    flex-direction: column;
    gap: 2px;
  }

  strong {
    font-size: 24px;
    line-height: 1.1;
    font-weight: 800;
    color: var(--accent);
    font-variant-numeric: tabular-nums;
  }
  span {
    font-size: 14px;
    color: var(--muted);
  }
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 28px;

  /* 360px phones: Resume and Email full width, LinkedIn + GitHub side by side */
  > a:nth-child(-n + 2) { grid-column: 1 / -1; }

  @media (min-width: 560px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Hero = () => (
  <Wrap id="top" aria-labelledby="hero-name">
    <Inner>
      <Badges>
        <OpenBadge>Open to work · {profile.noticePeriod} notice</OpenBadge>
        <AwsBadge>
          <FaAws size={18} aria-hidden="true" />
          AWS Certified Developer – Associate
        </AwsBadge>
      </Badges>

      <Name id="hero-name">{profile.name}</Name>
      <Headline>
        {profile.role} - <span>{profile.stack}</span>
      </Headline>
      <Pitch>{profile.pitch}</Pitch>
      <Meta>
        <FiMapPin size={14} aria-hidden="true" />
        <span>
          {profile.experienceSummary} · Open to relocate: {profile.relocate.join(', ')}
        </span>
      </Meta>

      <Metrics aria-label="Results">
        {metrics.map(({ value, label }) => (
          <Metric key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </Metric>
        ))}
      </Metrics>

      <Actions>
        <Button $variant="primary" href={profile.resume} download>
          <FiDownload size={18} aria-hidden="true" /> Download Resume
        </Button>
        <Button href={`mailto:${profile.email}`}>
          <FiMail size={18} aria-hidden="true" /> Email me
        </Button>
        <Button href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <FiLinkedin size={18} aria-hidden="true" /> LinkedIn
        </Button>
        <Button href={profile.github} target="_blank" rel="noopener noreferrer">
          <FiGithub size={18} aria-hidden="true" /> GitHub
        </Button>
      </Actions>
    </Inner>
  </Wrap>
);

export default Hero;
