export function Podcast(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.119 18C19.462 16.415 21 13.778 21 10.785 21 5.933 16.97 2 12 2s-9 3.933-9 8.785c0 2.993 1.538 5.63 3.881 7.215m1.479-4C7.519 13.15 7 12.009 7 10.75 7 8.128 9.239 6 12 6s5 2.127 5 4.75c0 1.26-.519 2.4-1.36 3.25M12 22a2 2 0 0 1-2-2v-2a2 2 0 1 1 4 0v2a2 2 0 0 1-2 2m1-11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  );
}
