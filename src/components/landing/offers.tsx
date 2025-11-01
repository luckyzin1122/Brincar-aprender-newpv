import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star,Zap, Sparkles } from 'lucide-react';

export function OffersSection() {
  return (
    <section id="ofertas" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">
            Escolha Sua Melhor Opção:
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* Basic Pack */}
          <Card className="animate-on-scroll shadow-lg flex flex-col h-full">
            <CardHeader className="text-center">
              <Badge variant="secondary" className="mx-auto w-fit text-lg py-1 px-4">
                🎒 PACK BÁSICO
              </Badge>
              <CardTitle className="text-4xl font-bold pt-4">R$ 5,00</CardTitle>
              <p className="text-muted-foreground line-through">
                de R$ 97,00
              </p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <ul className="space-y-3 flex-grow">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>+50 Atividades Pedagógicas</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-6">Quero o Pack Básico</Button>
              <p className="text-center text-sm text-destructive mt-4 font-semibold">⚠️ Sem os bônus exclusivos</p>
            </CardContent>
          </Card>

          {/* Premium Pack */}
          <div className="relative animate-on-scroll">
             <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 text-base bg-secondary text-secondary-foreground hover:bg-secondary">
              <Sparkles className="h-4 w-4 mr-2"/>
              MAIS VENDIDO
            </Badge>
          <Card className="border-4 border-secondary shadow-2xl flex flex-col h-full">
            <CardHeader className="text-center">
              <Badge className="mx-auto w-fit text-lg py-1 px-4">
                ⭐ PACK PREMIUM
              </Badge>
              <CardTitle className="text-6xl font-bold text-secondary-foreground pt-4">R$ 27,00</CardTitle>
              <p className="text-muted-foreground">ou 3x de R$ 9,67</p>
              <p className="text-muted-foreground line-through mt-2">
                de R$ 351,00
              </p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <ul className="space-y-3 flex-grow">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>+50 Atividades Pedagógicas</span>
                </li>
                <li className="flex items-center gap-3 font-bold text-primary">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>TODOS OS 7 BÔNUS EXCLUSIVOS</span>
                </li>
              </ul>
              <Button size="lg" className="w-full mt-6 text-lg h-14 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                QUERO O PACK PREMIUM AGORA! →
              </Button>
              <div className="flex justify-around text-center mt-4 text-sm">
                <div className="flex items-center gap-1 font-semibold text-green-600">
                    <Zap className="h-4 w-4"/> Economia de R$ 324,00
                </div>
                <div className="flex items-center gap-1 font-semibold text-blue-600">
                    <Star className="h-4 w-4"/> 87% dos pais preferem
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto p-6 bg-card rounded-lg shadow-md animate-on-scroll">
            <h3 className="text-xl font-bold">Por que o Premium é a escolha inteligente?</h3>
            <p className="mt-2 text-muted-foreground text-balance">
            Veja bem: por apenas R$ 22,00 a mais, você leva TODO o material premium que vale R$ 351,00. São mais de 100 recursos extras que vão durar meses (ou até anos!) de atividades. É menos que um lanche no fast-food. E o retorno? Inestimável.
            </p>
        </div>
      </div>
    </section>
  );
}
