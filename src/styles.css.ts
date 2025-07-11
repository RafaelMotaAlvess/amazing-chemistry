import { style } from '@vanilla-extract/css';
import { theme } from './theme.css';

export const container = style({
  position: 'relative',

  width: '100%',
  height: '100vh',

  backgroundColor: theme.color.dark['4'],

  overflow: 'hidden',
});

export const achievementButtonWrapper = style({
  zIndex: 9,
  position: 'absolute',
  top: 20,
  left: 20,
});

export const image = style({
  position: 'absolute',
  bottom: 0,
  left: 0,

  userSelect: 'none',
});
