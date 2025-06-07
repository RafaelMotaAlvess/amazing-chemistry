import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const container = style({
  width: 64,
  height: 64,

  padding: 8,

  position: 'relative',

  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: 9999,
  border: `1px solid ${theme.color.dark['1']}`,

  backgroundColor: theme.color.dark['2'],

  color: theme.color.dark.text.secondary,

  userSelect: 'none',
  cursor: 'pointer',
  outline: 'none',

  filter: theme.effect.boxShadow.default,

  ':hover': {
    opacity: 0.9,
  },
});
