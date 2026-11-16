import styled from 'styled-components';

import { skills } from '../data/profile';
import { Card, Chip, ChipList, Container, Eyebrow, Section, SectionTitle } from './ui';

const Grid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Group = styled(Card)`
  padding: 20px;

  h3 {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 12px;
  }
`;

const Legend = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin: -16px 0 24px;
  font-size: 14px;
  color: var(--muted);

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  span::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 3px;
  }
  .go::before { background: var(--go); }
  .aws::before { background: var(--aws); }
`;

const Skills = () => (
  <Section id="skills" aria-labelledby="skills-title">
    <Container>
      <Eyebrow>Skills</Eyebrow>
      <SectionTitle id="skills-title">What I work with</SectionTitle>
      <Legend>
        <span className="go">Go ecosystem</span>
        <span className="aws">AWS</span>
      </Legend>
      <Grid>
        {skills.map(({ group, items }) => (
          <Group key={group}>
            <h3>{group}</h3>
            <ChipList>
              {items.map(({ name, kind }) => (
                <Chip key={name} $kind={kind || 'plain'}>
                  {name}
                </Chip>
              ))}
            </ChipList>
          </Group>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Skills;
