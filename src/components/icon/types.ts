import { Icon } from "@/assets/svgs";
import { componentSizes } from ".";

export type IconName = Icon;

const IconPropSize = componentSizes.icon;
type IconSize = typeof IconPropSize;
export type IconSizeProp = keyof IconSize;
export interface IconProps {
  name: IconName;
  size?: IconSizeProp;
  color?: string;
}