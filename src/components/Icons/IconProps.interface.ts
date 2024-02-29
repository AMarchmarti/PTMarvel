export type IconSizeT = "L" | "M" | "S" | "XS";
export type IconPositionT = "right" | "left";
export type WeightIconT = "bold" | "light";

export default interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  disabled?: boolean;
  fill?: string;
  onClick?: () => void;
  size?: IconSizeT;
  weightFont?: WeightIconT;
  strokeWidth?: number;
  weight?: string;
}
