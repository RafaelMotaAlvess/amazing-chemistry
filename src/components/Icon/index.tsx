import type { JSX } from 'react';
import {
  QuestionMarkIcon,
  TrophyIcon,
  XIcon,
  MinusIcon,
  type IconProps as PhosphorIconProps,
} from '@phosphor-icons/react';
import { theme } from '../../theme.css';

type IconName = 'trophy' | 'close' | 'question-mark' | 'minus';

interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
}

export function Icon({
  name,
  size = 20,
  color = theme.color.dark.text.primary,
}: IconProps) {
  const commonIconProps: PhosphorIconProps = {
    size,
    color,
  };

  const icons: Record<IconName, JSX.Element> = {
    trophy: <TrophyIcon {...commonIconProps} />,
    close: <XIcon {...commonIconProps} />,
    minus: <MinusIcon {...commonIconProps} />,
    'question-mark': <QuestionMarkIcon {...commonIconProps} />,
  };

  return icons[name];
}
