import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Paintbrush, BookOpenCheck } from 'lucide-react';

const pillars = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Pronto Para Usar',
    text: 'Acabou aquela agonia de ficar horas no Pinterest buscando atividades. É só baixar, imprimir (ou usar no tablet) e aplicar. Simples assim.',
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: 'Lúdico e Envolvente',
    text: 'Criado com design infantil profissional que PRENDE a atenção das crianças. Não é "mais do mesmo" - são atividades que elas QUEREM fazer.',
  },
  {
    icon: <BookOpenCheck className="h-8 w-8 text-primary" />,
    title: 'Pedagogicamente Fundamentado',
    text: 'Cada atividade foi desenvolvida seguindo princípios da educação infantil, trabalhando alfabetização, coordenação motora, raciocínio lógico e criatividade.',
  },
];

export function SolutionSection() {
  const productImage = PlaceHolderImages.find(
    (img) => img.id === 'product-mockup'
  );

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Apresentando: Brincar é Aprender
          </h2>
          <p className="text-lg text-muted-foreground text-balance animate-on-scroll">
            O pack completo com +50 atividades pedagógicas que vão tirar seu
            filho das telas e desenvolver as habilidades que ele REALMENTE
            precisa - sem brigas, sem birras, e sem você precisar ser
            pedagogo(a)
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 animate-on-scroll">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={productImage.description}
                data-ai-hint={productImage.imageHint}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl mx-auto"
              />
            )}
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex items-start gap-4 animate-on-scroll">
                <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                  <p className="text-muted-foreground mt-1">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
