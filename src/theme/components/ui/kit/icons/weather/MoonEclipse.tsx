export function MoonEclipse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.002 6A10.01 10.01 0 0 1 20 18.002M12 22a9.96 9.96 0 0 0 4.38-1.008 9 9 0 1 1 0-17.984A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"
      />
    </svg>
  );
}
