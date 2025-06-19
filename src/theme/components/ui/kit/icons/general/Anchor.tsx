export function Anchor(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v14m0 0A10 10 0 0 1 2 12h3m7 10a10 10 0 0 0 10-10h-3"
      />
    </svg>
  );
}
