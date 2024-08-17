export function NoFolderIllustration(props: React.SVGAttributes<{}>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 147 110"
      fill="none"
      {...props}
    >
      {/* Folder Background */}
      <rect
        x="10"
        y="40"
        width="127"
        height="60"
        rx="5"
        ry="5"
        fill="#FFC107"
      />
      <path
        d="M10 60c0 1.66 1.34 3 3 3h121c1.66 0 3-1.34 3-3v-5c0-1.66-1.34-3-3-3H13c-1.66 0-3 1.34-3 3v5z"
        fill="#FFA000"
      />
      <path
        d="M60 40h70c5.523 0 10 4.477 10 10v10H50c-5.523 0-10 4.477-10 10v40c0 5.523 4.477 10 10 10h90c5.523 0 10-4.477 10-10V60H120c-5.523 0-10-4.477-10-10V40z"
        fill="#FFD54F"
      />
      {/* Folder Flap */}
      <path
        d="M60 30h50c5.523 0 10 4.477 10 10v10H50c-5.523 0-10-4.477-10-10V40c0-5.523 4.477-10 10-10z"
        fill="#FFEB3B"
      />
      {/* Empty Folder Line */}
      <line
        x1="10"
        y1="50"
        x2="137"
        y2="50"
        stroke="#FDD835"
        strokeWidth="2"
      />
      {/* Folder Shadow */}
      <rect
        x="10"
        y="60"
        width="127"
        height="5"
        rx="2.5"
        ry="2.5"
        fill="#FFB300"
        opacity="0.2"
      />
    </svg>
  );
}
