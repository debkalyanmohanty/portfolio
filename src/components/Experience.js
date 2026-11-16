import styled from 'styled-components';

import { experience } from '../data/profile';
import { Chip, ChipList, chipKind, Container, Eyebrow, Section, SectionTitle } from './ui';

const Timeline = styled.ol`
  position: relative;
  display: grid;
  gap: 20px;
  padding-left: 24px;

  /* vertical rail */
  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: var(--border);
  }
`;

const Item = styled.li`
  position: relative;
  padding: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  @media (min-width: 768px) {
    padding: 24px 28px;
  }

  /* timeline dot */
  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 26px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ $current }) => ($current ? 'var(--accent)' : 'var(--surface)')};
    border: 2px solid var(--accent);
  }
`;

const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 16px;
  margin-bottom: 12px;
`;

const Role = styled.h3`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;

  span {
    font-weight: 500;
    color: var(--muted);
  }
`;

const When = styled.p`
  font-size: 14px;
  color: var(--muted);
  white-space: nowrap;
`;

const Points = styled.ul`
  display: grid;
  gap: 8px;
  margin-bottom: 16px;

  li {
    position: relative;
    padding-left: 18px;
    color: var(--muted);

    &::before {
      content: '';
      position: absolute;
      left: 2px;
      top: 0.7em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
    }
  }
  strong {
    color: var(--text);
    font-weight: 700;
  }
`;

const Experience = () => (
  <Section id="experience" aria-labelledby="experience-title">
    <Container>
      <Eyebrow>Experience</Eyebrow>
      <SectionTitle id="experience-title">Where I&apos;ve shipped</SectionTitle>
      <Timeline>
        {experience.map((job, i) => (
          <Item key={`${job.company}-${job.role}`} $current={i === 0}>
            <Head>
              <Role>
                {job.role} <span>· {job.company}</span>
              </Role>
              <When>
                {job.period} · {job.type}
              </When>
            </Head>
            <Points>
              {job.points.map((p) => (
                <li key={p.lead}>
                  <strong>{p.lead}</strong>
                  {p.rest}
                </li>
              ))}
            </Points>
            <ChipList aria-label="Tech used">
              {job.tags.map((t) => (
                <Chip key={t} $kind={chipKind(t)}>
                  {t}
                </Chip>
              ))}
            </ChipList>
          </Item>
        ))}
      </Timeline>
    </Container>
  </Section>
);

export default Experience;
