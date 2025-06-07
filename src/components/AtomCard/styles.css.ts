import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const container = style({
  width: 92,
  height: 92,

  padding: 8,

  position: 'relative',

  borderRadius: 4,
  border: `1px solid ${theme.color.dark['1']}`,

  backgroundColor: theme.color.dark['2'],

  color: theme.color.dark.text.secondary,

  userSelect: 'none',
  cursor: 'pointer',

  filter: theme.effect.dropShadow.default,
});

export const content = style({
  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'center',

  fontSize: 14,
});

export const symbol = style({
  fontSize: 36,
  fontWeight: 'bold',

  color: theme.color.dark.text.primary,
});

export const atomicNumber = style({
  position: 'absolute',
  top: 8,
  right: 8,

  fontSize: 14,
});
