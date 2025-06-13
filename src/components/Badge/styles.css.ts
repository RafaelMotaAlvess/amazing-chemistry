import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const container = style({
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

export const selections = style({
  fontSize: 14,
  fontWeight: 200,

  color: theme.color.dark.text.primary,
});
