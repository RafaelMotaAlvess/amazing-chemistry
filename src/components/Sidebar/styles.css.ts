import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',

  width: 457,
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

  justifyContent: 'flex-start',

  gap: 16,
});

export const horizontalBar = style({
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
      right: 451,
    },
  },
});
