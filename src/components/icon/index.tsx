import React, { memo } from 'react';

import { icons } from '@/assets/svgs';
import { IconName,IconProps } from './types';

export const componentSizes = {
  icon: {
    lg: 64,
    md: 20,
    sm: 15,
  },
};

const Icon: React.FC<IconProps> = ({
  name = 'dashboard',
  size = 'sm',
  color,
}) => {
  const LoadedSvg =
    name in icons ? icons[name as IconName] : icons['dashboard'];

  return (
    <LoadedSvg
      color={color || 'black'}
      size={componentSizes.icon[size]}
    />
  );
};

export default memo(Icon);