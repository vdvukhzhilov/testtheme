export function ArrowsDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17 4v11m0 0-4-4m4 4 4-4M7 4v16m0 0-4-4m4 4 4-4"
      />
    </svg>
  );
}
