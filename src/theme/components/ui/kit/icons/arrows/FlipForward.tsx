export function FlipForward(props: React.SVGProps<SVGSVGElement>) {
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
        d="M21 9H7.5a4.5 4.5 0 1 0 0 9H12m9-9-4-4m4 4-4 4"
      />
    </svg>
  );
}
