import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const packContents = [
  'Atividades de Alfabetização (Português)',
  'Atividades de Matemática',
  'Exercícios de Coordenação Motora',
  'Desafios de Raciocínio Lógico',
  'Atividades de Criatividade e Arte',
  'Exercícios para fazer sozinho, em família ou em grupo',
  'Formatos PDF para impressão ou uso digital',
];

export function PackContentsSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">
            Veja Tudo Que Você Vai Receber HOJE:
          </h2>
        </div>
        <Card className="max-w-3xl mx-auto shadow-xl animate-on-scroll bg-card p-4 sm:p-8 border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">
              📚 Mais de 50 Atividades Pedagógicas Completas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-4">
              {packContents.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-8 text-lg font-semibold text-muted-foreground">
              Valor estimado: <span className="text-primary">R$ 97,00</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
