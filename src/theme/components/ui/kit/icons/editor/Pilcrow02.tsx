export function Pilcrow02(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.5 4v16m2-16H9a4 4 0 1 0 0 8h5m0-8v16m-2 0h7.5"
      />
    </svg>
  );
}
