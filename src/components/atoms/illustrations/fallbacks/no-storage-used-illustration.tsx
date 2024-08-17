export function NoStorageUsedIllustration(props: React.SVGAttributes<{}>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 255"
      fill="none"
      {...props}
    >
      {/* Background Disk */}
      <circle cx="250" cy="127.5" r="120" fill="#EBEBEB" />

      {/* Inner Disk */}
      <circle cx="250" cy="127.5" r="100" fill="#F5F5F5" />

      {/* Text and Icons */}
      <text x="250" y="135" textAnchor="middle" fontSize="48" fill="#9E9E9E">
        0%
      </text>
      <text x="250" y="175" textAnchor="middle" fontSize="24" fill="#9E9E9E">
        No Storage Used
      </text>

      {/* Outer Ring */}
      <circle cx="250" cy="127.5" r="115" stroke="#DBDBDB" strokeWidth="5" fill="none" />

      {/* Empty Bar (Not Used) */}
      <path
        d="M250 32.5
        a 95 95 0 0 1 0 190
        a 95 95 0 0 1 0 -190"
        fill="#F0F0F0"
      />

      {/* Central Circle for Design */}
      <circle cx="250" cy="127.5" r="50" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2" />
    </svg>
  );
}

