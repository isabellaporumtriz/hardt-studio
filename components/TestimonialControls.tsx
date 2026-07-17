type TestimonialControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
};

function ArrowLeft() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19 12H5M11 6L5 12L11 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TestimonialControls({
  onPrevious,
  onNext,
}: TestimonialControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onPrevious}
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-400/50 hover:bg-violet-500/15 active:scale-95"
        aria-label="Ver depoimento anterior"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          <ArrowLeft />
        </span>
      </button>

      <button
        type="button"
        onClick={onNext}
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-400/50 hover:bg-violet-500/15 active:scale-95"
        aria-label="Ver próximo depoimento"
      >
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          <ArrowRight />
        </span>
      </button>
    </div>
  );
}