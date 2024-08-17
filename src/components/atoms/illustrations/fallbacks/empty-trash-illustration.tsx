export function EmptyTrashIllustration(props: React.SVGAttributes<{}>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 384"
      fill="none"
      {...props}
    >
      {/* Trash Can Body */}
      <rect x="100" y="120" width="200" height="200" fill="#EBEBEB" stroke="#DADADA" strokeWidth="5" rx="15" />

      {/* Trash Can Lid */}
      <rect x="80" y="90" width="240" height="40" fill="#E0E0E0" stroke="#C0C0C0" strokeWidth="4" rx="10" />

      {/* Trash Can Handle */}
      <rect x="180" y="70" width="40" height="20" fill="#D1D1D1" stroke="#B0B0B0" strokeWidth="3" rx="5" />

      {/* Lid Shadow */}
      <rect x="82" y="92" width="236" height="8" fill="#C4C4C4" />

      {/* Trash Can Empty Lines */}
      <line x1="120" y1="140" x2="280" y2="140" stroke="#CCCCCC" strokeWidth="4" />
      <line x1="120" y1="170" x2="280" y2="170" stroke="#CCCCCC" strokeWidth="4" />
      <line x1="120" y1="200" x2="280" y2="200" stroke="#CCCCCC" strokeWidth="4" />
      <line x1="120" y1="230" x2="280" y2="230" stroke="#CCCCCC" strokeWidth="4" />
      <line x1="120" y1="260" x2="280" y2="260" stroke="#CCCCCC" strokeWidth="4" />
      <line x1="120" y1="290" x2="280" y2="290" stroke="#CCCCCC" strokeWidth="4" />

      {/* Ground Shadow */}
      <ellipse cx="200" cy="350" rx="100" ry="20" fill="#E0E0E0" />
    </svg>
  );
}

