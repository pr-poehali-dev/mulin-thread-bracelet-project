import Header from "@/components/Header";
import DecorativeElements from "@/components/DecorativeElements";
import OctopusIllustration from "@/components/OctopusIllustration";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      <Header />
      <DecorativeElements />

      {/* Hero Section */}
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center relative z-10">
          {/* Main heading with handwritten style */}
          <div className="animate-fade-in">
            <h1 className="font-caveat text-6xl md:text-8xl font-bold text-charcoal mb-6 leading-tight">
              В нашем мире всё
              <br />
              начинается с деталей
            </h1>
            <p className="font-rubik text-xl md:text-2xl text-coral font-medium mb-8">
              Украшения ручной работы
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="font-rubik text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              А эта история — о маленьком осьминоге, который всегда искал
              уникальность в самых неожиданных местах. Он искал не просто
              украшения, а нечто большее — что-то, что будет отражать внутренний
              мир каждого.
            </p>
          </div>

          <div
            className="animate-fade-in mb-16"
            style={{ animationDelay: "0.6s" }}
          >
            <OctopusIllustration />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-cream font-rubik font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Перейти в каталог
            </Button>
          </div>

          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-sage/20 rounded-full flex items-center justify-center">
                <span className="text-sage text-xl">✨</span>
              </div>
              <h3 className="font-rubik font-medium text-charcoal">
                Подарить сертификат
              </h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-coral/20 rounded-full flex items-center justify-center">
                <span className="text-coral text-xl">🎨</span>
              </div>
              <h3 className="font-rubik font-medium text-charcoal">О бренде</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-coral/20 rounded-full flex items-center justify-center">
                <span className="text-coral text-xl">📞</span>
              </div>
              <h3 className="font-rubik font-medium text-charcoal">Контакты</h3>
            </div>
          </div>

          {/* Octopus illustration */}
          <div
            className="animate-fade-in mb-16"
            style={{ animationDelay: "0.6s" }}
          >
            <CrabIllustration />
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <Button className="bg-coral hover:bg-coral/90 text-white px-8 py-3 text-lg font-rubik rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Меню ☰
            </Button>
          </div>

          {/* Additional navigation hints */}
          <div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-sage/20 rounded-full flex items-center justify-center">
                <span className="text-sage text-xl">✨</span>
              </div>
              <h3 className="font-rubik font-medium text-charcoal">
                Подарить сертификат
              </h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-coral/20 rounded-full flex items-center justify-center">
                <span className="text-coral text-xl">🎨</span>
              </div>
              <h3 className="font-rubik font-medium text-charcoal">О бренде</h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-sage/20 rounded-full flex items-center justify-center">
                <span className="text-sage text-xl">🤝</span>
              </div>
              <h3 className="font-rubik font-medium text-charcoal">
                Корпоративные клиенты
              </h3>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-coral/20 rounded-full flex items-center justify-center">
                <span className="text-coral text-xl">📞</span>
              </div>
              <h3 className="font-rubik font-medium text-charcoal">Контакты</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
