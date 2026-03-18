const timeline = [
  {
    period: "Pós-graduação",
    title: "Neuropsicologia",
    institution: "Universidade de São Paulo (USP)",
    description:
      "Especialização em avaliação e reabilitação neuropsicológica, com foco nas relações entre cérebro e comportamento.",
  },
  {
    period: "Graduação",
    title: "Psicologia",
    institution: "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
    description:
      "Formação sólida em psicologia clínica com ênfase em abordagens humanistas e práticas baseadas em evidências.",
  },
];

export default function Education() {
  return (
    <section id="formacao" className="py-24 bg-sage-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-900 mb-4">
            Formação
          </h2>
          <div className="w-16 h-0.5 bg-sage-400 mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-sage-200 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-sage-400 rounded-full -translate-x-1/2 mt-1 border-4 border-sage-50 z-10" />

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="text-sm font-medium text-sage-500 uppercase tracking-wide">
                    {item.period}
                  </span>
                  <h3 className="font-serif text-2xl text-sage-800 mt-1 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sage-600 font-medium mb-2">
                    {item.institution}
                  </p>
                  <p className="text-sage-600/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
