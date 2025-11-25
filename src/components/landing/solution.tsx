
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Paintbrush, BookOpenCheck, PlayCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

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

const heroImages = [
  'hero-carousel-1',
  'hero-carousel-2',
  'hero-carousel-3',
  'hero-carousel-4',
  'hero-carousel-5',
  'hero-carousel-6',
  'hero-carousel-7',
  'hero-carousel-8',
  'hero-carousel-9',
];

export function SolutionSection() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const images = heroImages
    .map((id) => PlaceHolderImages.find((img) => img.id === id))
    .filter(Boolean);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

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
            <Badge
              variant="default"
              className="mb-4 text-sm font-bold animate-on-scroll shadow-lg w-fit mx-auto block"
            >
              exemplo das atividades que você vai receber
            </Badge>
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: 'start',
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map(
                  (image, index) =>
                    image && (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              width={400}
                              height={400}
                              className="w-full h-auto aspect-square object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    )
                )}
              </CarouselContent>
            </Carousel>
            <div className="py-2 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    'h-2 w-2 rounded-full transition-colors',
                    current === index ? 'bg-primary' : 'bg-muted'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-on-scroll"
              >
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
