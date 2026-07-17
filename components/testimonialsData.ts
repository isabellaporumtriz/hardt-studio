export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "A Hardt conseguiu entender exatamente o posicionamento que buscávamos e transformou isso em uma presença digital muito mais profissional.",
    name: "Mônica Souza",
    role: "Proprietária · Estética",
    initials: "NC",
  },
  {
    quote:
      "O projeto ficou sofisticado, estratégico e muito mais claro para o nosso público. O cuidado em cada detalhe fez toda a diferença.",
    name: "Matheus Henrique",
    role: "Proprietário · MADEH",
    initials: "NC",
  },
  {
    quote:
      "Além da qualidade visual, recebemos uma estrutura pensada para apresentar melhor nossos serviços e gerar oportunidades comerciais.",
    name: "Carlos Alcino",
    role: "Proprietário · Instrumentos Musicais Imperial",
    initials: "NC",
  },
];