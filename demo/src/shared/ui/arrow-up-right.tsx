type ArrowUpRightProps = {
  className?: string;
};

export function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
