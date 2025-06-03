export function Move(props: React.SVGProps<SVGSVGElement>) {
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
        d="m5 9-3 3m0 0 3 3m-3-3h20M9 5l3-3m0 0 3 3m-3-3v20m3-3-3 3m0 0-3-3M19 9l3 3m0 0-3 3"
      />
    </svg>
  );
}
