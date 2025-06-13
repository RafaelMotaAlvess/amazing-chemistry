import { createVar, style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

const messageWidth = createVar({
  syntax: '<width>',
  inherits: false,
  initialValue: '64px',
});

export const container = style({
  position: 'relative',

  display: 'inline-block',

  width: 'auto',
  height: 'auto',
});

export const containerExpanded = style({});

export const containerContracted = style({});

export const button = style({
  zIndex: 9,

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

  filter: theme.effect.dropShadow.default,

  transition: 'opacity 0.3s ease-in-out',

  ':hover': {
    opacity: 0.9,
  },
});

export const messageWrapper = style({
  zIndex: 1,

  position: 'absolute',
  top: 0,
  left: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: messageWidth,
  height: 64,

  padding: '8px 0px 8px 56px',

  borderRadius: 9999,
  border: `1px solid ${theme.color.dark['1']}`,
  backgroundColor: theme.color.dark['2'],

  userSelect: 'none',
  cursor: 'pointer',
  overflow: 'hidden',

  filter: theme.effect.dropShadow.default,

  vars: {
    [messageWidth]: '64px',
  },

  visibility: 'hidden',

  transition: 'width 0.3s ease-in-out, visibility 0.3s ease-in-out',

  selectors: {
    [`${containerExpanded} &`]: {
      width: '400px',
      visibility: 'visible',
    },
  },
});

export const message = style({
  fontSize: 14,
  fontWeight: 400,

  textAlign: 'right',

  color: theme.color.dark.text.primary,

  whiteSpace: 'nowrap',

  opacity: 0,

  transform: 'translateX(-10px)',
  transition:
    'opacity 0.2s ease-in-out 0.05s, transform 0.2s ease-in-out 0.05s',

  selectors: {
    [`${containerExpanded} &`]: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
});
