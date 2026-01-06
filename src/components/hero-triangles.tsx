export default function HeroTriangles() {
  return (
    <div className="absolute right-[-2px] top-[-2px]">
      <svg width="72" height="72" className="overflow-visible" viewBox="0 0 80 80">
        <defs>
          {/* Drop shadow filter - increased shadow */}
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="6" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>
        <g filter="url(#shadow)">
          {/* Right-angle triangle in top-right corner - destructive color */}
          <polygon 
            points="25,0 80,0 80,76" 
            fill="#a6bf31" 
          />
          {/* Accent triangle - 3 vertices: rounded corner, and two meeting points with right-angle triangle */}
          <path 
            d="M 25,0 L 80,76 L 2,52 Q 0,50 0,48 Z" 
            fill="#bedd2f"
          />
        </g>
      </svg>
    </div>
  );
}

