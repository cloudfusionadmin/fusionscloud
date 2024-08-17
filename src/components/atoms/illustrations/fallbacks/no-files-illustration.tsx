const COLORS = {
  coralPink: {
    darken: '#FF7E55',
    lighten: '#FFA586',
  },
  yellow: {
    darken: '#FFA000',
    lighten: '#FFC107',
  },
};

export type FillType = keyof typeof COLORS;

export interface SvgProps extends React.SVGProps<SVGSVGElement> {
  fill?: FillType;
}

export function NoFilesIllustration(props: SvgProps) {
  const { fill, ...rest } = props;

  const fillLighten = COLORS[fill ?? 'yellow'].lighten;
  const fillDarken = COLORS[fill ?? 'yellow'].darken;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 192"
      fill="none"
      {...rest}
    >
      {/* New Folder Design */}
      <path
        d="M50 40h160c5.523 0 10 4.477 10 10v92c0 5.523-4.477 10-10 10H50c-5.523 0-10-4.477-10-10V50c0-5.523 4.477-10 10-10z"
        fill={fillDarken}
      />
      <path
        d="M60 30h70c5.523 0 10 4.477 10 10v10H50c-5.523 0-10 4.477-10 10v82c0 5.523 4.477 10 10 10h160c5.523 0 10-4.477 10-10V60H130c-5.523 0-10-4.477-10-10V30z"
        fill={fillLighten}
      />
      <path
        d="M40 60h180v4H40v-4z"
        fill={fillDarken}
      />
      <path
        d="M160 80h20c5.523 0 10 4.477 10 10v60c0 5.523-4.477 10-10 10h-20c-5.523 0-10-4.477-10-10V90c0-5.523 4.477-10 10-10z"
        fill={fillDarken}
        opacity="0.1"
      />
      {/* Inner Folder Content */}
      <rect
        x="60"
        y="90"
        width="140"
        height="70"
        rx="5"
        ry="5"
        fill="#F5F5F5"
      />
      <rect
        x="70"
        y="100"
        width="120"
        height="10"
        rx="2"
        ry="2"
        fill={fillDarken}
      />
      <rect
        x="70"
        y="120"
        width="100"
        height="10"
        rx="2"
        ry="2"
        fill={fillLighten}
      />
      <rect
        x="70"
        y="140"
        width="80"
        height="10"
        rx="2"
        ry="2"
        fill={fillDarken}
      />
    </svg>
  );
}

