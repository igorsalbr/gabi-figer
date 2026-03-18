interface WaveDividerProps {
  from: string;
  to: string;
  flip?: boolean;
}

export default function WaveDivider({ from, to, flip }: WaveDividerProps) {
  return (
    <div
      className="wave-divider"
      style={{ background: from, transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
