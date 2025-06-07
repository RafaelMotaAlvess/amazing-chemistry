import { style } from '@vanilla-extract/css';
import { theme } from './theme.css';

export const container = style({
  position: 'relative',

  width: '100%',
  height: '100vh',

  backgroundColor: theme.color.dark['4'],
});
