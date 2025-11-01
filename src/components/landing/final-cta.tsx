import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { XCircle, CheckCircle, Lock, Forward, ShieldCheck, Infinity } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-balance animate-on-scroll">
            Você Está a UM CLIQUE de Transformar a Rotina do Seu Filho
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance animate-on-scroll">
            Imagine acordar amanhã e, em vez de ouvir 'quero o celular', você
            ouve 'vamos fazer aquelas atividades legais?'. Imagine ver seu filho
            DESENVOLVENDO habilidades reais, aprendendo, criando, se divertindo
            - sem aquela culpa que aperta o peito toda vez que você cede à
            telinha. Isso não é fantasia. É exatamente o que acontece quando
            você toma a decisão certa HOJE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 animate-on-scroll">
          <div className="border border-destructive/50 rounded-lg p-6 bg-destructive/5 text-left">
            <h3 className="font-bold text-xl text-destructive flex items-center gap-2">
              <XCircle /> SEM O BRINCAR É APRENDER
            </h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive"/> Filho grudado no celular</li>
              <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive"/> Culpa constante</li>
              <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive"/> Aprendizado limitado</li>
              <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive"/> Gasto com terapeutas</li>
              <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive"/> Frustração diária</li>
              <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive"/> Tempo precioso perdido</li>
            </ul>
          </div>
          <div className="border border-green-500/50 rounded-lg p-6 bg-green-500/5 text-left">
            <h3 className="font-bold text-xl text-green-600 flex items-center gap-2">
              <CheckCircle /> COM O BRINCAR É APRENDER
            </h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/> Filho engajado e aprendendo</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/> Tranquilidade e orgulho</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/> Desenvolvimento comprovado</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/> Economia gigante</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/> Rotina harmoniosa</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500"/> Memórias preciosas</li>
            </ul>
          </div>
        </div>
        
        

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground animate-on-scroll">
            <div className="flex flex-col items-center gap-2"><Lock className="h-6 w-6"/><span>Compra 100% Segura</span></div>
            <div className="flex flex-col items-center gap-2"><Forward className="h-6 w-6"/><span>Acesso Imediato</span></div>
            <div className="flex flex-col items-center gap-2"><ShieldCheck className="h-6 w-6"/><span>Garantia de 7 Dias</span></div>
            <div className="flex flex-col items-center gap-2"><Infinity className="h-6 w-6"/><span>Acesso Vitalício</span></div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto space-y-4 text-sm text-muted-foreground animate-on-scroll">
            <p><strong className="text-foreground">P.S.:</strong> A cada dia que passa sem agir, é mais um dia do seu filho preso nas telas sem desenvolver as habilidades que ele precisa. Você realmente quer esperar mais?</p>
            <p><strong className="text-foreground">P.P.S.:</strong> Lembre-se: você tem 7 dias de garantia total. Não há risco. O único risco é NÃO tentar e continuar na mesma situação que te trouxe até aqui.</p>
        </div>

      </div>
    </section>
  );
}
