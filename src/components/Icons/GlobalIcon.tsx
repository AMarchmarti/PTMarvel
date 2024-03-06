import * as Icons from "./IndexIcon";

import type { WeightIconT, IconSizeT } from "./IconProps.interface";
import type IconProps from "./IconProps.interface";

export type IconNameT = keyof typeof Icons;

type SizeIconT = {
	[k in IconSizeT]: string;
};

type WeightIconI = {
	[k in WeightIconT]: string;
};

interface GlobalIconI extends IconProps {
	iconName: IconNameT;
	weightFont?: WeightIconT;
}

const GlobalIcon = ({
	className,
	iconName,
	onClick,
	size,
	weightFont,
	strokeWidth,
}: GlobalIconI) => {
	const sizeIcon: SizeIconT = {
		L: "80",
		M: "60",
		S: "40",
		XS: "24",
	};

	const weightIcon: WeightIconI = {
		bold: "5",
		light: "1.5",
	};

	const IconComponent = Icons[iconName];

	if (!IconComponent) return null;

	return (
		<IconComponent
			className={className}
			onClick={onClick}
			height={sizeIcon[size!]}
			width={sizeIcon[size!]}
			weight={weightIcon[weightFont!]}
			strokeWidth={strokeWidth}
		/>
	);
};

export default GlobalIcon;
