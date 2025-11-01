import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Palette,
  PenLine,
  Paintbrush,
  BookCopy,
  ClipboardList,
  Clapperboard,
} from 'lucide-react';
import { RabbitIcon } from './icons';

const bonuses = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: '30 Cadernos de Colorir Estilo Boobie Goods',
    value: 47,
  },
  {
    icon: <PenLine className="h-8 w-8" />,
    title: 'Cadernos de Caligrafia',
    value: 29,
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: '+20 Cadernos de Colorir Temáticos',
    value: 39,
  },
  {
    icon: <RabbitIcon className="h-8 w-8" />,
    title: 'Mini Combo Páscoa',
    value: 19,
  },
  {
    icon: <BookCopy className="h-8 w-8" />,
    title: 'Caderno de Leitura e Interpretação',
    value: 34,
  },
  {
    icon: <ClipboardList className="h-8 w-8" />,
    title: 'Planners para Professores - Diversos Temas',
    value: 59,
  },
  {
    icon: <Clapperboard className="h-8 w-8" />,
    title: 'Vídeos de Histórias Infantis',
    value: 27,
  },
];

const totalValue = bonuses.reduce((sum, bonus) => sum + bonus.value, 97); // 97 from main pack

export function BonusesSection() {
  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            BÔNUS EXCLUSIVOS
          </h2>
          <p className="text-lg text-muted-foreground animate-on-scroll">
            Apenas na Oferta Premium
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="text-center animate-on-scroll flex flex-col"
            >
              <CardHeader className="items-center">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
                  {bonus.icon}
                </div>
                <p className="text-sm font-bold text-primary mt-4">
                  BÔNUS #{index + 1}
                </p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardTitle className="text-base font-bold">
                  {bonus.title}
                </CardTitle>
                <Badge variant="secondary" className="mt-4 mx-auto">
                  {`Valor: R$ ${bonus.value.toFixed(2).replace('.', ',')}`}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-xl text-muted-foreground">
            Valor total de tudo que você leva:
          </p>
          <p className="text-5xl md:text-7xl font-bold text-destructive line-through mt-2">
            R$ {totalValue.toFixed(2).replace('.', ',')}
          </p>
          <p className="mt-4 text-2xl md:text-3xl font-bold text-foreground animate-on-scroll text-balance">
            Mas apenas hoje, dia {today}, você leva tudo por apenas{' '}
            <span className="text-primary">R$ 27,00</span> com todos os bônus inclusos.
          </p>
        </div>
      </div>
    </section>
  );
}
