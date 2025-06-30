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

  borderRadius: 9999,
  border: `1px solid ${theme.color.dark['1']}`,

  backgroundColor: theme.color.dark['2'],

  color: theme.color.dark.text.secondary,

  userSelect: 'none',

  filter: theme.effect.dropShadow.default,
});

export const image = style({
  width: '100%',
  height: '100%',
});

export const locked = style({
  width: 40,
  height: 40,
});
