export function ZoomIn(props: React.SVGProps<SVGSVGElement>) {
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
        d="m21 21-4.35-4.35M11 8v6m-3-3h6m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      />
    </svg>
  );
}
