export function Framer(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 15.5v7l-7-7m0 0v-7h7m-7 7h14l-7-7m0 0h7v-7H5z"
      />
    </svg>
  );
}
