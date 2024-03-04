import type IconProps from "./IconProps.interface";

const MarvelLogo = ({ width = "130", height = "52", onClick, className }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            onClick={onClick}
            className={className}
            viewBox="0 0 130 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_38_148)">
                <path
                    d="M130 -0.00292969H0V51.9971H130V-0.00292969Z"
                    fill="#EC1D24"
                />
                <path
                    d="M126.222 40.0561V47.9621H111.58V3.99707H119.465V40.0561H126.222ZM63.658 25.5561C63.048 25.8501 62.41 25.9961 61.788 25.9981V11.8581H61.828C62.45 11.8531 67.092 12.0421 67.092 18.8511C67.092 22.4101 65.512 24.6551 63.658 25.5561ZM40.55 34.2371L42.733 15.4381L44.998 34.2371H40.55ZM110.205 12.0221V4.00407H87.879L84.204 30.7831L80.574 4.00307H72.522L73.423 11.1531C72.495 9.32107 69.199 4.00307 61.943 4.00307C61.896 4.00107 53.883 4.00307 53.883 4.00307L53.852 43.0351L47.984 4.00407L37.439 3.99907L31.367 44.4391L31.369 4.00407H21.278L17.64 26.7211L14.096 4.00307H4V47.9691H11.95V26.7771L15.568 47.9691H19.794L23.359 26.7771V47.9691H38.686L39.614 41.2071H45.784L46.711 47.9691L61.758 47.9771H61.768V47.9691H61.788V33.6991L63.633 33.4291L67.45 47.9791H75.234L75.232 47.9691H75.254L70.243 30.9211C72.781 29.0411 75.649 24.2771 74.886 19.7181V19.7161C74.894 19.7741 79.615 47.9971 79.615 47.9971L88.871 47.9701L95.198 8.12007V47.9701H110.205V40.0621H103.081V29.9821H110.205V21.9521H103.081V12.0211L110.205 12.0221Z"
                    fill="#FEFEFE"
                />
                <path
                    d="M0 -0.00292969H30V51.9971H0V-0.00292969Z"
                    fill="#EC1D24"
                />
                <path
                    d="M31.5 47.9971V3.99707H21.291L17.651 26.7321L14.102 3.99707H4V47.9971H12V26.7891L15.577 47.9971H19.806L23.374 26.7891V47.9971H31.5Z"
                    fill="#FEFEFE"
                />
            </g>
            <defs>
                <clipPath id="clip0_38_148">
                    <rect
                        width="130"
                        height="52"
                        fill="white"
                        transform="translate(0 -0.00292969)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default MarvelLogo;
