
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

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

export function HeroSection() {
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
    <section id="inicio" className="relative w-full py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="animate-on-scroll text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Cansado de Ver Seu Filho Grudado na Tela?
        </h1>
        <p className="animate-on-scroll mx-auto mt-6 max-w-3xl text-lg text-muted-foreground text-balance">
          Descubra como +50 atividades pedagógicas comprovadas podem tirar seu
          filho das telas e transformar esse tempo em aprendizado real - mesmo
          que você não seja professor(a)
        </p>

        <div className="max-w-4xl mx-auto mt-8 animate-on-scroll">
          <Badge
            variant="default"
            className="mb-4 text-sm font-bold animate-on-scroll shadow-lg"
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

        <div className="animate-on-scroll mt-8 flex flex-col items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-auto text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 whitespace-normal"
          >
            <a href="#ofertas" className="text-center">
              QUERO TIRAR MEU FILHO DAS TELAS AGORA →
            </a>
          </Button>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Acesso imediato após o pagamento</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>7 dias de garantia total</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Mais de 50 atividades prontas para usar hoje</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
