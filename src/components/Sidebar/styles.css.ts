import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const container = style({
  zIndex: 99,

  display: 'flex',
  flexDirection: 'column',

  overflowY: 'auto',

  width: 472,
  height: '100vh',

  padding: 20,

  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,

  borderLeft: `1px solid ${theme.color.dark['1']}`,

  backgroundColor: theme.color.dark['2'],

  color: theme.color.dark.text.secondary,

  filter: theme.effect.dropShadow.default,

  transition: 'transform 0.3s ease-in-out',

  selectors: {
    '&[data-open="false"]': {
      transform: 'translateX(100%)',
    },
    '&[data-open="true"]': {
      transform: 'translateX(0)',
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',

  width: '100%',
  height: 'auto',

  justifyContent: 'center',

  gap: 16,
});

export const horizontalBar = style({
  zIndex: 999,

  position: 'absolute',
  top: '50%',

  width: 12,
  height: 64,

  backgroundColor: theme.color.dark['1'],

  cursor: 'pointer',

  borderRadius: 9999,

  outline: 'none',
  border: 'none',

  transition: 'right 0.3s ease-in-out',

  selectors: {
    '&[data-open="false"]': {
      right: 0,
    },
    '&[data-open="true"]': {
      right: 465.5,
    },
  },
});

export const helpButton = style({
  zIndex: 999,

  position: 'absolute',
  bottom: 20,
  right: 20,

  width: 32,
  height: 32,

  cursor: 'pointer',

  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: 999,
  border: `1px solid ${theme.color.dark['1']}`,

  backgroundColor: theme.color.dark['2'],

  transition: 'opacity 0.3s ease-in-out',

  ':hover': {
    opacity: 0.9,
  },

  selectors: {
    '&[data-open="false"]': {
      display: 'none',
      opacity: 0,
    },
    '&[data-open="true"]': {
      display: 'flex',
      opacity: 1,
    },
  },
});
