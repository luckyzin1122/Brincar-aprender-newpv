"use client"

import { useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    avatarId: 'avatar-ana',
    name: 'Ana Paula, 34 anos',
    title: 'Mãe de 2',
    text: "Meu filho de 6 anos passava HORAS no YouTube. Desde que comecei a usar as atividades do Brincar é Aprender, ele mal pede o celular! Fica concentrado, aprende brincando e ainda me pede 'mais uma atividade, mãe!'. Melhor investimento que fiz!",
  },
  {
    avatarId: 'avatar-mariana',
    name: 'Professora Mariana, 29 anos',
    title: 'Educadora Infantil',
    text: 'Como professora, eu perdia HORAS buscando atividades na internet. Com esse pack, tenho tudo pronto e organizado. Os planners são lindos demais! Minhas aulas ficaram mais dinâmicas e as crianças adoram. Super recomendo!',
  },
  {
    avatarId: 'avatar-carla',
    name: 'Carla Mendes, 38 anos',
    title: 'Mãe e Empreendedora',
    text: 'Trabalho em casa e precisava de algo que ocupasse minha filha de forma PRODUTIVA enquanto eu trabalho. Esse pack foi a solução! Ela fica entretida, aprende e eu consigo focar no trabalho sem culpa. Vale muito a pena!',
  },
  {
    avatarId: 'avatar-roberto',
    name: 'Roberto Santos, 41 anos',
    title: 'Pai de 3',
    text: "Comprei por R$ 27 e achei que seria 'mais do mesmo'. Mas quando vi a QUANTIDADE e QUALIDADE do material, não acreditei! São centenas de páginas. Meus 3 filhos usam e ainda tem muito sobrando. Investimento que se paga sozinho!",
  },
  {
    avatarId: 'avatar-juliana',
    name: 'Juliana Costa, 31 anos',
    title: 'Professora de Reforço',
    text: 'Uso com meus alunos de reforço escolar e o resultado é INCRÍVEL. As atividades são lúdicas mas pedagogicamente ricas. Vi evolução real na alfabetização e coordenação motora das crianças. Material de primeira!',
  },
  {
    avatarId: 'avatar-fernanda',
    name: 'Fernanda Lima, 36 anos',
    title: 'Homeschooling',
    text: 'Faço educação domiciliar e estava gastando fortunas comprando material. Quando encontrei o Brincar é Aprender, foi literalmente um presente! Tenho atividades para o ano TODO por um preço ridiculamente baixo. Meu filho AMA os cadernos de colorir!',
  },
];

const StarRating = () => (
    <div className="flex gap-0.5 text-yellow-500">
        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-4 w-4"/>)}
    </div>
)

export function TestimonialsSection() {
    const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-on-scroll">
            Veja o Que Pais e Professores Estão Dizendo:
          </h2>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full animate-on-scroll"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatarImage = PlaceHolderImages.find(
                (img) => img.id === testimonial.avatarId
              );
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="shadow-lg flex flex-col h-full">
                      <CardContent className="pt-6 flex-grow flex flex-col">
                        <div className="flex items-center mb-4">
                          <Avatar>
                            {avatarImage && (
                              <AvatarImage
                                src={avatarImage.imageUrl}
                                alt={`Avatar de ${testimonial.name}`}
                                data-ai-hint={avatarImage.imageHint}
                              />
                            )}
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                        <StarRating />
                        <p className="text-muted-foreground mt-4 flex-grow">
                          "{testimonial.text}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <div className="mt-16 text-center animate-on-scroll">
             <p className="text-lg text-muted-foreground">Esses são apenas alguns dos centenas de relatos que recebemos todos os dias. <strong className="text-foreground">A pergunta é: seu filho vai ser o próximo a se beneficiar?</strong></p>
        </div>
      </div>
    </section>
  );
}
