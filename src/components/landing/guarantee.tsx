
import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section
      id="garantia"
      className="py-16 sm:py-24 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="animate-on-scroll">
            <ShieldCheck className="h-40 w-40 mb-8" />
          </div>
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Nossa Garantia Blindada de 7 Dias
            </h2>
            <p className="text-lg opacity-90 mb-6 text-balance">
              Sabemos que você pode estar pensando: 'Será que meu filho vai
              gostar? Será que vai funcionar?' Por isso, assumimos TODO o risco
              por você. Funciona assim: Você adquire o 'Brincar é Aprender'
              hoje. Testa com seu filho por 7 dias completos. Se por QUALQUER
              motivo você achar que não valeu cada centavo, é só enviar um email
              e devolvemos 100% do seu dinheiro. Sem perguntas. Sem burocracia.
              Sem enrolação. Justo, não é?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
