import { Icon } from "@/assets/svgs";
import { componentSizes } from ".";

export type IconName = Icon;

type IconSize = typeof componentSizes.icon;
export type IconSizeProp = keyof IconSize;
export interface IconProps {
  name: IconName;
  size?: IconSizeProp;
  color?: string;
}