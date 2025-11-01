"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#garantia', label: 'Garantia' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="#inicio" className="text-xl font-bold font-headline text-primary">
          Brincar é Aprender
        </a>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex h-full flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                     <a href="#inicio" className="text-xl font-bold font-headline text-primary" onClick={() => setIsOpen(false)}>
                        Brincar é Aprender
                    </a>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X/>
                        <span className="sr-only">Fechar menu</span>
                    </Button>
                </div>
              <nav className="flex flex-col p-4 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto p-4">
                 <Button asChild size="lg" className="w-full">
                    <a href="#ofertas">QUERO O PACK PREMIUM</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
