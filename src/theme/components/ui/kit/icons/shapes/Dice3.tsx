export function Dice3(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.25 7.75h.005m-4.255 4h.005m-4.255 4.5h.005M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21m8.7-13.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0m-4.25 4a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0M8 16.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"
      />
    </svg>
  );
}
