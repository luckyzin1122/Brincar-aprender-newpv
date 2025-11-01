
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="inicio" className="relative w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="animate-on-scroll text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Cansado de Ver Seu Filho Grudado na Tela?
        </h1>
        <p className="animate-on-scroll mx-auto mt-6 max-w-3xl text-lg text-muted-foreground text-balance">
          Descubra como +50 atividades pedagógicas comprovadas podem tirar seu
          filho das telas e transformar esse tempo em aprendizado real - mesmo
          que você não seja professor(a)
        </p>
        <div className="animate-on-scroll mt-8 flex flex-col items-center justify-center gap-4">
          <Button asChild size="lg" className="h-12 text-lg px-8">
            <a href="#ofertas">
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
