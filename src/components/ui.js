import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
`;

export const Section = styled.section`
  padding: 56px 0;
  border-top: 1px solid var(--border);

  @media (min-width: 768px) {
    padding: 80px 0;
  }
`;

export const Eyebrow = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(26px, 4vw, 34px);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
`;

export const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

const buttonVariants = {
  primary: css`
    background: var(--accent);
    color: var(--accent-contrast);
    border-color: var(--accent);
    &:hover { filter: brightness(1.08); }
  `,
  secondary: css`
    background: var(--surface);
    color: var(--text);
    border-color: var(--border);
    &:hover { border-color: var(--accent); color: var(--accent); }
  `,
};

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: filter 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
  ${({ $variant = 'secondary' }) => buttonVariants[$variant]}

  &:active { transform: translateY(1px); }

  svg { flex-shrink: 0; }
`;

const chipKinds = {
  go: css`
    background: var(--go-soft);
    color: var(--go);
    border-color: color-mix(in srgb, var(--go) 35%, transparent);
    font-weight: 600;
  `,
  aws: css`
    background: var(--aws-soft);
    color: var(--aws);
    border-color: color-mix(in srgb, var(--aws) 35%, transparent);
    font-weight: 600;
  `,
  plain: css`
    background: var(--surface-2);
    color: var(--text);
    border-color: var(--border);
  `,
};

export const Chip = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid;
  border-radius: 999px;
  font-size: 13px;
  line-height: 1.5;
  ${({ $kind = 'plain' }) => chipKinds[$kind]}
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// Highlights Go and AWS wherever they appear as tags.
const GO_TAGS = new Set(['Go', 'Go (Golang)', 'Gin', 'GORM']);
const AWS_TAGS = new Set(['S3', 'Athena', 'Serverless']);
export const chipKind = (tag) => {
  if (GO_TAGS.has(tag)) return 'go';
  if (tag.startsWith('AWS') || AWS_TAGS.has(tag)) return 'aws';
  return 'plain';
};
