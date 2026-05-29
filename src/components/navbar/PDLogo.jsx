export default function PDLogo() {
  return (
    <svg width="68" height="52" viewBox="0 0 68 52" xmlns="http://www.w3.org/2000/svg">
      {/* Pop Art offset shadow layers */}
      <rect x="5" y="5" width="60" height="44" fill="#FFD700" />
      <rect x="3" y="3" width="60" height="44" fill="#FF1744" />
      {/* Main dark square */}
      <rect x="1" y="1" width="60" height="44" fill="#1a1a1a" stroke="#fff" strokeWidth="2" />

      {/* PD centered in badge */}
      <text
        x="31" y="35"
        textAnchor="middle"
        fontFamily="Arial Black, Helvetica Neue, sans-serif"
        fontSize="30"
        fontWeight="900"
      >
        <tspan fill="#FF1744">P</tspan>
        <tspan fill="#FFD700">D</tspan>
      </text>
    </svg>
  )
}
