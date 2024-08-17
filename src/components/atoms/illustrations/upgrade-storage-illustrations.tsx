export function UpgradeStorageIllustration(props: React.SVGAttributes<{}>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      {...props}
    >
      {/* Cloud Shape */}
      <path
        fill="#B2D3EA"
        d="M145 100c8.284 0 15-6.716 15-15 0-6.627-4.715-12.13-11-14.09 0-.386.004-.772.004-1.16 0-13.255-10.745-24-24-24-8.837 0-16.606 4.69-21 11.655C101.002 56.24 96.69 56 92 56c-13.255 0-24 10.745-24 24 0 1.95.234 3.842.675 5.655-5.877 2.665-10.675 8.522-10.675 15.345 0 9.94 8.06 18 18 18H145Z"
      />

      {/* Server Stack */}
      <rect x="50" y="110" width="100" height="15" fill="#396CAA" rx="5" />
      <rect x="50" y="130" width="100" height="15" fill="#396CAA" rx="5" />
      <rect x="50" y="150" width="100" height="15" fill="#396CAA" rx="5" />

      {/* Arrow Up Symbolizing Upgrade */}
      <path
        fill="#5793CE"
        d="M100 80l-20 20h12v20h16v-20h12l-20-20z"
      />

      {/* Connection Lines */}
      <line x1="70" y1="100" x2="70" y2="110" stroke="#D4ECFF" strokeWidth="2" />
      <line x1="130" y1="100" x2="130" y2="110" stroke="#D4ECFF" strokeWidth="2" />
      <line x1="70" y1="150" x2="70" y2="160" stroke="#D4ECFF" strokeWidth="2" />
      <line x1="130" y1="150" x2="130" y2="160" stroke="#D4ECFF" strokeWidth="2" />
      
      {/* Small Circles Representing Server Lights */}
      <circle cx="65" cy="115" r="3" fill="#D4ECFF" />
      <circle cx="135" cy="115" r="3" fill="#D4ECFF" />
      <circle cx="65" cy="135" r="3" fill="#D4ECFF" />
      <circle cx="135" cy="135" r="3" fill="#D4ECFF" />
      <circle cx="65" cy="155" r="3" fill="#D4ECFF" />
      <circle cx="135" cy="155" r="3" fill="#D4ECFF" />
    </svg>
  );
}


