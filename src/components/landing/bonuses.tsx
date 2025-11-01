'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
  Palette,
  Paintbrush,
  BookCopy,
  ClipboardList,
  Clapperboard,
} from 'lucide-react';
import { RabbitIcon } from './icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const bonuses = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: '30 Cadernos de Colorir Estilo Boobie Goods',
    value: 47,
    imageIds: [
      'bonus-coloring-1',
      'bonus-coloring-2',
      'bonus-coloring-3',
      'bonus-coloring-4',
      'bonus-coloring-5',
      'bonus-coloring-6',
      'bonus-coloring-7',
      'bonus-coloring-8',
    ],
    fit: 'contain',
  },
  {
    icon: <Clapperboard className="h-8 w-8" />,
    title: '10 histórias infantis em vídeos',
    value: 29,
    imageIds: [
      'bonus-videos-1',
      'bonus-videos-2',
      'bonus-videos-3',
      'bonus-videos-4',
      'bonus-videos-5',
      'bonus-videos-6',
      'bonus-videos-7',
      'bonus-videos-8',
    ],
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: '+20 Cadernos de Colorir Temáticos',
    value: 39,
    imageIds: [
      'bonus-themed-1',
      'bonus-themed-2',
      'bonus-themed-3',
      'bonus-themed-4',
      'bonus-themed-5',
      'bonus-themed-6',
      'bonus-themed-7',
      'bonus-themed-8',
    ],
    fit: 'contain',
  },
  {
    icon: <RabbitIcon className="h-8 w-8" />,
    title: 'Mini Combo Páscoa',
    value: 19,
    imageIds: [
      'bonus-easter-7',
      'bonus-easter-8',
      'bonus-easter-9',
      'bonus-easter-10',
      'bonus-easter-11',
      'bonus-easter-12',
    ],
    fit: 'contain',
  },
  {
    icon: <BookCopy className="h-8 w-8" />,
    title: 'Caderno de Leitura e Interpretação',
    value: 34,
    imageIds: [
      'bonus-reading-4',
      'bonus-reading-5',
      'bonus-reading-6',
      'bonus-reading-7',
    ],
    fit: 'contain',
  },
  {
    icon: <ClipboardList className="h-8 w-8" />,
    title: 'Planners para Professores - Diversos Temas',
    value: 59,
    imageIds: [
      'bonus-planner-4',
      'bonus-planner-5',
      'bonus-planner-6',
      'bonus-planner-7',
      'bonus-planner-8',
      'bonus-planner-9',
      'bonus-planner-10',
    ],
    fit: 'contain',
  },
  {
    icon: <Clapperboard className="h-8 w-8" />,
    title: 'Vídeos de Histórias Infantis',
    value: 27,
    imageIds: ['bonus-videos-1', 'bonus-videos-2', 'bonus-videos-3'],
  },
];

const totalValue = bonuses.reduce((sum, bonus) => sum + bonus.value, 97); // 97 from main pack

const BonusCarousel = ({
  imageIds,
  fit = 'cover',
}: {
  imageIds: string[];
  fit?: 'cover' | 'contain';
}) => {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));
  const images = imageIds
    .map((id) => PlaceHolderImages.find((img) => img.id === id))
    .filter(Boolean);

  return (
    <Carousel
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
              <CarouselItem key={index}>
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={300}
                    height={300}
                    className={cn('w-full h-auto', {
                      'object-cover': fit === 'cover',
                      'object-contain': fit === 'contain',
                    })}
                  />
                </div>
              </CarouselItem>
            )
        )}
      </CarouselContent>
    </Carousel>
  );
};

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-start">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="text-center animate-on-scroll flex flex-col"
            >
              <CardHeader className="items-center pb-2">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
                  {bonus.icon}
                </div>
                <p className="text-sm font-bold text-primary mt-4">
                  BÔNUS #{index + 1}
                </p>
              </CardHeader>
              <CardContent className="pt-4 pb-6">
                <CardTitle className="text-base font-bold mb-4">
                  {bonus.title}
                </CardTitle>
                <BonusCarousel
                  imageIds={bonus.imageIds}
                  fit={(bonus as any).fit || 'cover'}
                />
                <div className="pt-4">
                  <Badge variant="secondary" className="mx-auto">
                    {`Valor: R$ ${bonus.value.toFixed(2).replace('.', ',')}`}
                  </Badge>
                </div>
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
            <span className="text-green-600 text-4xl md:text-5xl">R$ 27,00</span>{' '}
            com todos os bônus inclusos.
          </p>
        </div>
      </div>
    </section>
  );
}
