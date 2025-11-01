import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Smartphone, Frown, TrendingDown } from 'lucide-react';

const painPoints = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'O Vício Digital',
    text: 'Seu filho pede o celular antes mesmo de tomar café. Faz birra quando você tenta tirar. E você se sente culpado(a) por ceder "só mais 5 minutinhos" que viram horas...',
  },
  {
    icon: <Frown className="h-10 w-10 text-primary" />,
    title: 'A Culpa Que Não Sai',
    text: 'Você sabe que deveria oferecer alternativas melhores. Já tentou brincar, desenhar, ir ao parque... Mas nada segura a atenção dele como aquela telinha hipnotizante.',
  },
  {
    icon: <TrendingDown className="h-10 w-10 text-primary" />,
    title: 'O Atraso no Aprendizado',
    text: 'Enquanto outras crianças desenvolvem habilidades, seu filho passa horas em joguinhos e vídeos que não agregam NADA. E você vê o tempo precioso da infância dele escorrendo pelos dedos.',
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-on-scroll">
            Se Você Se Identifica Com Isso, Você NÃO Está Sozinho(a)...
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="text-center animate-on-scroll shadow-lg border-t-4 border-primary">
              <CardHeader className="items-center">
                {point.icon}
                <CardTitle className="mt-4 text-xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{point.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center max-w-4xl mx-auto animate-on-scroll">
          <p className="text-lg text-muted-foreground text-balance">
            Eu sei como é frustrante. Você não é um pai/mãe ruim. Você não está
            falhando. A verdade é que vivemos em uma geração onde as TELAS foram
            projetadas por engenheiros bilionários para viciar nossos filhos. É
            uma batalha desigual.{' '}
            <strong className="text-foreground">
              Mas e se existisse uma forma simples, testada e aprovada de
              reverter isso?
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
