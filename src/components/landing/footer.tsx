import { Lock, CreditCard } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="text-xl font-bold font-headline text-primary">
            Brincar é Aprender
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Termos de Uso
            </a>
            <a
              href="mailto:suporte@brincaréaprender.com.br"
              className="text-muted-foreground hover:text-foreground"
            >
              suporte@brincaréaprender.com.br
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-sm text-muted-foreground">Pagamento Seguro:</p>
            <Lock className="h-5 w-5 text-muted-foreground" />
            <CreditCard className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brincar é Aprender - Todos os direitos
          reservados
        </div>
      </div>
    </footer>
  );
}
