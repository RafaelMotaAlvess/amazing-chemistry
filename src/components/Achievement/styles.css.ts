import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const container = style({
  width: 64,
  height: 64,

  padding: 4,
  gap: 2,

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: 4,
  border: `1px solid ${theme.color.dark['1']}`,

  backgroundColor: theme.color.dark['2'],

  color: theme.color.dark.text.secondary,

  userSelect: 'none',

  filter: theme.effect.boxShadow.default,
});

export const image = style({
  width: 24,
  height: 24,
});

export const molecule = style({
  fontSize: 14,
  fontWeight: 200,

  color: theme.color.dark.text.primary,
});
