const benefits = [
  {
    title: "Estratégia que gera resultado",
    description:
      "Planejamento direcionado para crescimento real e mensurável.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 17L9 12L13 16L20 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 9H20V14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Conteúdo que conecta e vende",
    description:
      "Criativos pensados para gerar atenção, conexão e conversão.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 20L8.5 19L18.5 9C19.3 8.2 19.3 6.9 18.5 6.1L17.9 5.5C17.1 4.7 15.8 4.7 15 5.5L5 15.5L4 20Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 7L17 10.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Execução rápida e profissional",
    description:
      "Do planejamento à entrega, com agilidade, cuidado e qualidade.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13 2L4.5 13H11L10 22L19.5 10H13V2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "Analisamos, ajustamos e escalamos aquilo que realmente funciona.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 19V11M10 19V6M16 19V14M22 19V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function HeroBenefits() {
  return (
    <div className="relative mt-10 lg:mt-4">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-[750px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[120px]" />

      <div className="relative grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <article
            key={benefit.title}
            className={`group relative min-h-[190px] p-6 transition duration-300 hover:bg-violet-500/[0.06] lg:p-7 ${
              index < 3 ? "lg:border-r lg:border-white/10" : ""
            } ${index < 2 ? "border-b border-white/10" : ""} ${
              index === 0 ? "sm:border-r sm:border-white/10" : ""
            } ${
              index === 1
                ? "sm:border-r-0 lg:border-r lg:border-white/10"
                : ""
            } ${
              index === 2
                ? "sm:border-r sm:border-white/10 lg:border-b-0"
                : ""
            }`}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition duration-500 group-hover:bg-violet-500/15" />

            <div className="relative mb-5 text-violet-400 transition duration-300 group-hover:scale-110 group-hover:text-violet-300">
              {benefit.icon}
            </div>

            <h2 className="relative max-w-[210px] text-sm font-bold leading-5 text-white">
              {benefit.title}
            </h2>

            <p className="relative mt-3 max-w-[230px] text-xs leading-5 text-white/40">
              {benefit.description}
            </p>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
          </article>
        ))}
      </div>
    </div>
  );
}