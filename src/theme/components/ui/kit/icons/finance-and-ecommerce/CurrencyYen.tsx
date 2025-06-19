export function CurrencyYen(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 20.5v-9m0 0 6.5-8m-6.5 8-6.5-8m12.5 8H6m11 4H7"
      />
    </svg>
  );
}
