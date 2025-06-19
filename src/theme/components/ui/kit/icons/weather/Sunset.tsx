export function Sunset(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 18H2m4.314-5.686L4.9 10.9m12.786 1.414L19.1 10.9M22 18h-2M7 18a5 5 0 0 1 10 0m5 4H2M16 5l-4 4m0 0L8 5m4 4V2"
      />
    </svg>
  );
}
