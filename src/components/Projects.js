import styled from 'styled-components';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { projects } from '../data/profile';
import { Button, Card, Chip, ChipList, chipKind, Container, Eyebrow, Section, SectionTitle } from './ui';

const Grid = styled.ul`
  display: grid;
  gap: 20px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(Card).attrs({ as: 'li' })`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: color-mix(in srgb, var(--accent) 50%, var(--border));
  }
`;

const Media = styled.div`
  aspect-ratio: 16 / 9;
  background: var(--surface-2);
  border-bottom: 1px solid var(--border);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
  }
`;

// Stand-in "editor" header for projects without a screenshot
const CodeArt = styled.pre`
  height: 100%;
  margin: 0;
  padding: 18px 20px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 13px;
  line-height: 1.7;
  color: var(--muted);
  white-space: pre;
  overflow: hidden;

  .k { color: var(--go); font-weight: 600; }
  .s { color: var(--aws); }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  padding: 20px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const Block = styled.div`
  h4 {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 2px;
  }
  p {
    font-size: 15px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 6px;

  a { flex: 1; }
`;

const GoIamArt = () => (
  <CodeArt aria-hidden="true">
    <span className="s">$</span> tree go-iam-system
    {'\n'}go-iam-system
    {'\n'}├── <span className="k">cmd/server</span>
    {'\n'}├── <span className="k">internal</span>
    {'\n'}├── go.mod
    {'\n'}└── go.sum
  </CodeArt>
);

const Projects = () => (
  <Section id="projects" aria-labelledby="projects-title">
    <Container>
      <Eyebrow>Projects</Eyebrow>
      <SectionTitle id="projects-title">Things I&apos;ve built</SectionTitle>
      <Grid>
        {projects.map((p) => (
          <ProjectCard key={p.title}>
            <Media>
              {p.image ? (
                <img src={p.image} alt={p.alt} width="960" height="540" loading="lazy" decoding="async" />
              ) : (
                <GoIamArt />
              )}
            </Media>
            <Body>
              <TitleRow>
                <h3>{p.title}</h3>
              </TitleRow>
              <Block>
                <h4>Problem</h4>
                <p>{p.problem}</p>
              </Block>
              <Block>
                <h4>What I built</h4>
                <p>{p.built}</p>
              </Block>
              <ChipList aria-label={`${p.title} tech stack`}>
                {p.tags.map((t) => (
                  <Chip key={t} $kind={chipKind(t)}>
                    {t}
                  </Chip>
                ))}
              </ChipList>
              <Links>
                <Button href={p.source} target="_blank" rel="noopener noreferrer" aria-label={`Code: ${p.title} on GitHub`}>
                  <FiGithub size={16} aria-hidden="true" /> Code
                </Button>
                {p.live && (
                  <Button href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Live demo: ${p.title}`}>
                    <FiExternalLink size={16} aria-hidden="true" /> Live demo
                  </Button>
                )}
              </Links>
            </Body>
          </ProjectCard>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Projects;
