import type IconProps from "./IconProps.interface";

const HeartIconSelected = ({
	width = "12",
	height = "10.84",
	className,
	color = "#EC1D24",
	onClick,
}: IconProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 22"
			fill="none"
			onClick={onClick}
			className={className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 3.63869L6 -0.00292969L0 3.63869V11.4422L12 21.6734L24 11.4422V3.63869L18 -0.00292969L12 3.63869Z"
				fill={color}
			/>
		</svg>
	);
};

export default HeartIconSelected;
