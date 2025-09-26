import { Button } from "@/components/ui/button";
import heroJellies from "@/assets/hero-jellies.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroJellies})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Эксклюзивные продукты питания
          <br />
          <span className="text-gradient-hero bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
            из стран Восточной Азии
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Jele Beautie Jelly с натуральными витаминами и коллагеном напрямую от производителей.
          <br />
          <span className="font-semibold">Доставляем лучшее. Расширяем границы.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero"
            size="lg" 
            className="px-8 py-4 text-lg"
            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Посмотреть каталог
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-smooth"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            О компании
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};

export default Hero;