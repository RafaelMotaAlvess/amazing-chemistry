import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const container = style({
  position: 'relative',

  display: 'flex',
});

export const button = style({
  width: 92,
  height: 92,

  padding: 8,

  position: 'relative',

  borderRadius: 4,
  border: `1px solid ${theme.color.dark['1']}`,

  backgroundColor: theme.color.dark['2'],

  color: theme.color.dark.text.secondary,

  outline: 'none',

  filter: theme.effect.dropShadow.default,

  ':hover': {
    opacity: 0.9,
  },

  userSelect: 'none',

  selectors: {
    '&:hover': {
      scale: 1.05,
    },
  },

  transition: 'scale 0.2s ease-in-out, opacity 0.2s ease-in-out',
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

export const badgeWrapper = style({
  position: 'absolute',
  top: -12,
  left: -12,

  width: 'auto',
  height: 'auto',
});

export const badge = style({
  position: 'relative',

  display: 'flex',

  width: 24,
  height: 24,

  justifyContent: 'center',
  alignItems: 'center',

  border: `1px solid ${theme.color.dark['1']}`,

  backgroundColor: theme.color.dark['2'],

  borderRadius: 9999,
});

export const badgeSelections = style({
  fontSize: 14,
  fontWeight: 200,

  color: theme.color.dark.text.primary,
});

export const minusButton = style({
  position: 'absolute',
  bottom: -12,
  right: -12,

  display: 'flex',

  width: 24,
  height: 24,

  justifyContent: 'center',
  alignItems: 'center',

  filter: theme.effect.dropShadow.default,

  cursor: 'pointer',
  outline: 'none',

  border: `1px solid ${theme.color.dark['1']}`,

  backgroundColor: theme.color.dark['2'],

  borderRadius: 9999,

  ':hover': {
    opacity: 0.9,
  },

  selectors: {
    '&:hover': {
      scale: 1.1,
    },
  },

  transition: 'scale 0.2s ease-in-out, opacity 0.2s ease-in-out',
});
