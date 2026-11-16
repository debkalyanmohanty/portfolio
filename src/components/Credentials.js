import styled from 'styled-components';
import { FaAws } from 'react-icons/fa';
import { FiBookOpen, FiExternalLink } from 'react-icons/fi';

import { certification, education } from '../data/profile';
import { Card, Container, Eyebrow, Section, SectionTitle } from './ui';

const Grid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled(Card)`
  display: flex;
  gap: 16px;
  padding: 20px;

  h3 {
    font-size: 17px;
    line-height: 1.35;
    font-weight: 700;
  }
  p {
    font-size: 15px;
    color: var(--muted);
  }
  strong {
    color: var(--text);
  }
`;

const Icon = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: ${({ $aws }) => ($aws ? 'var(--aws-soft)' : 'var(--accent-soft)')};
  color: ${({ $aws }) => ($aws ? 'var(--aws)' : 'var(--accent)')};
`;

const Verify = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
`;

const Credentials = () => (
  <Section id="credentials" aria-labelledby="credentials-title">
    <Container>
      <Eyebrow>Certification &amp; Education</Eyebrow>
      <SectionTitle id="credentials-title">Credentials</SectionTitle>
      <Grid>
        <Item>
          <Icon $aws aria-hidden="true">
            <FaAws size={34} />
          </Icon>
          <div>
            <h3>{certification.name}</h3>
            <p>
              {certification.issuer} · {certification.date}
            </p>
            {certification.verifyUrl && (
              <Verify href={certification.verifyUrl} target="_blank" rel="noopener noreferrer">
                Verify credential <FiExternalLink size={14} aria-hidden="true" />
              </Verify>
            )}
          </div>
        </Item>
        <Item>
          <Icon aria-hidden="true">
            <FiBookOpen size={26} />
          </Icon>
          <div>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p>
              {education.date} · <strong>{education.grade}</strong>
            </p>
          </div>
        </Item>
      </Grid>
    </Container>
  </Section>
);

export default Credentials;
