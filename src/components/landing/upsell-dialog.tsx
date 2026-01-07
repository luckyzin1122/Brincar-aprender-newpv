'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export function UpsellDialog({ children }: { children: React.ReactNode }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="items-center text-center">
          <div className="bg-secondary/10 text-secondary p-3 rounded-full w-fit">
            <Rocket className="h-8 w-8" />
          </div>
          <AlertDialogTitle className="text-2xl text-balance">
            Espere! Oferta Única Para Você!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-balance">
            Percebemos que você escolheu o plano Básico. Que tal turbinar seu
            pacote? Por apenas{' '}
            <strong className="font-bold text-foreground">mais R$ 7,00</strong>,
            você leva o <strong className="text-primary">Pack Premium</strong>{' '}
            completo (que vale R$ 351,00) por um total de apenas{' '}
            <strong className="text-green-600 font-bold text-lg">
              R$ 17,00
            </strong>
            . É a sua chance!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-2 mt-4">
            <Button asChild size="lg" className="w-full text-base whitespace-normal h-auto py-3 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://pay.wiapy.com/lWDNgt8Sv">
                SIM, QUERO O PREMIUM POR R$ 17!
              </a>
            </Button>
            <Button asChild variant="link" className="text-muted-foreground h-auto text-center whitespace-normal">
              <a href="https://pay.wiapy.com/sNgluDAio">
                Não, obrigado. Quero apenas o Básico por R$ 10.
              </a>
            </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
