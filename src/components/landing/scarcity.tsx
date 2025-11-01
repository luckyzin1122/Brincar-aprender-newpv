import { Progress } from '@/components/ui/progress';

export function ScarcitySection() {
  const vagasOcupadas = 153;
  const totalVagas = 200;
  const progresso = (vagasOcupadas / totalVagas) * 100;

  return (
    <section className="py-16 sm:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-destructive mb-4">
            ⏰ Atenção: Vagas Limitadas Para Garantir Qualidade do Suporte
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Para mantermos a qualidade do nosso suporte e atendimento
            personalizado, liberamos apenas {totalVagas} acessos por semana. Depois
            disso, fechamos as inscrições até a próxima abertura (que pode
            levar semanas).
          </p>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-xl font-bold mb-2">
              Vagas restantes hoje: {totalVagas - vagasOcupadas}/{totalVagas}
            </p>
            <Progress value={progresso} className="w-full h-4" />
          </div>
          <p className="mt-8 text-xl font-bold">
            Não perca sua chance de transformar a rotina do seu filho HOJE.
          </p>
        </div>
      </div>
    </section>
  );
}
