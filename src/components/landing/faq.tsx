import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Para que idade são as atividades?',
    answer:
      'As atividades são voltadas para crianças de 3 a 10 anos, com diferentes níveis de dificuldade. Você escolhe o que é mais adequado para a fase do seu filho.',
  },
  {
    question: 'Preciso imprimir ou posso usar no tablet?',
    answer:
      'As duas opções! Os PDFs podem ser impressos em casa ou usados diretamente em tablets e computadores. Você decide o que funciona melhor para você.',
  },
  {
    question:
      'Sou mãe/pai e não tenho formação pedagógica. Vai funcionar para mim?',
    answer:
      'COM CERTEZA! As atividades são 100% autoexplicativas. Não precisa ser professor para aplicar. Se você sabe ler, você consegue usar.',
  },
  {
    question: 'Como recebo o material após a compra?',
    answer:
      'Imediatamente após a confirmação do pagamento, você recebe um email com o link de acesso à área de membros. De lá, você baixa tudo quantas vezes quiser.',
  },
  {
    question: 'É pagamento único ou mensalidade?',
    answer:
      'Pagamento ÚNICO. Você paga uma vez e tem acesso VITALÍCIO a todo o conteúdo. Sem surpresas, sem mensalidades escondidas.',
  },
  {
    question: 'E se eu não gostar?',
    answer:
      'Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro. Simples assim.',
  },
  {
    question: 'Qual a diferença entre o Pack Básico e o Premium?',
    answer:
      'O Básico tem as 50 atividades principais. O Premium tem as 50 atividades + TODOS os 7 bônus exclusivos (mais de 100 recursos adicionais). 87% escolhem o Premium pelo custo-benefício absurdo.',
  },
  {
    question: 'Posso usar com mais de uma criança?',
    answer:
      'SIM! O acesso é seu e você pode usar com quantas crianças quiser. Imprima quantas vezes precisar. Perfeito para famílias com vários filhos ou professores com turmas.',
  },
  {
    question: 'Funciona para alfabetização especial/autismo?',
    answer:
      'Sim! Várias mães de crianças atípicas relatam ótimos resultados. As atividades lúdicas e visuais são especialmente eficazes para diferentes perfis de aprendizagem.',
  },
  {
    question: 'Vou ter suporte se tiver dúvidas?',
    answer:
      'Sim! Você tem acesso ao nosso suporte por email. Respondemos todas as dúvidas em até 24h úteis.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">
            Perguntas Que Você Pode Estar Se Fazendo:
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full animate-on-scroll">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
