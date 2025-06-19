export function Pilcrow01(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 4v16m0-16h2m-2 0h-5.5a4.5 4.5 0 0 0 0 9H16zm-2 16h4"
      />
    </svg>
  );
}
