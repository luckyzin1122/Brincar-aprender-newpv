
'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
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
              R$ 12,00
            </strong>
            . É a sua chance!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2">
          <AlertDialogAction asChild>
            <a href="https://pay.wiapy.com/lWDNgt8Sv">
              <Button size="lg" className="h-auto text-base w-full py-3 px-4 rounded-lg">
                SIM, QUERO O PREMIUM POR R$ 12!
              </Button>
            </a>
          </AlertDialogAction>
          <AlertDialogCancel asChild>
            <a href="https://pay.wiapy.com/sNgluDAio">
              <Button
                variant="link"
                className="text-muted-foreground h-auto text-center"
              >
                Não, obrigado. Quero apenas o Básico por R$ 5.
              </Button>
            </a>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
