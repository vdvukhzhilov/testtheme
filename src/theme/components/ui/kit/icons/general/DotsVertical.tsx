export function DotsVertical(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </svg>
  );
}
