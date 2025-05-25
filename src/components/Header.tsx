import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-sage/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-caveat text-2xl font-bold text-charcoal">
          Кривоколо
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="font-rubik text-charcoal hover:text-coral transition-colors"
          >
            Новинки
          </a>
          <a
            href="#"
            className="font-rubik text-charcoal hover:text-coral transition-colors"
          >
            Аксессуары
          </a>
          <a
            href="#"
            className="font-rubik text-charcoal hover:text-coral transition-colors"
          >
            Бижутерия
          </a>
          <a
            href="#"
            className="font-rubik text-charcoal hover:text-coral transition-colors"
          >
            Украшения
          </a>
          <a
            href="#"
            className="font-rubik text-charcoal hover:text-coral transition-colors"
          >
            Конструктор
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-2 text-sm">
            <span className="text-charcoal">Ru</span>
            <span className="text-sage">En</span>
          </div>
          <Button
            variant="outline"
            className="border-coral text-coral hover:bg-coral hover:text-white"
          >
            Корзина
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
