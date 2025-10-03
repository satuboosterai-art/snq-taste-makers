import ProductCard from "./ProductCard";
import strawberryImg from "@/assets/products/strawberry.png";
import lycheeImg from "@/assets/products/lychee.png";
import blackcurrantImg from "@/assets/products/blackcurrant.png";
import grapeImg from "@/assets/products/grape.png";
import lemonImg from "@/assets/products/lemon.png";
import appleImg from "@/assets/products/apple.png";

const ProductGrid = () => {
  const products = [
    {
      name: "Jele Beautie",
      flavor: "Клубника",
      benefits: ["Коллаген 1600 мг", "Витамин С", "Натуральный вкус"],
      color: "bg-gradient-to-br from-pink-400 to-red-400",
      image: strawberryImg,
    },
    {
      name: "Jele Beautie", 
      flavor: "Личи",
      benefits: ["L-карнитин", "Витамин С", "Экзотический вкус"],
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
      image: lycheeImg,
    },
    {
      name: "Jele Beautie",
      flavor: "Чёрная смородина", 
      benefits: ["Витамины B1, B2, B6, B12", "Высокое содержание витамина С", "Антиоксиданты"],
      color: "bg-gradient-to-br from-purple-600 to-indigo-600",
      image: blackcurrantImg,
    },
    {
      name: "Jele Beautie",
      flavor: "Виноград",
      benefits: ["Витамины A, C, E", "Антиоксидантный комплекс", "Натуральный сок"],
      color: "bg-gradient-to-br from-green-400 to-purple-500",
      image: grapeImg,
    },
    {
      name: "Jele Beautie",
      flavor: "Лимон", 
      benefits: ["Витамин С (200%)", "Цитрусовая свежесть", "Укрепление иммунитета"],
      color: "bg-gradient-to-br from-yellow-400 to-orange-400",
      image: lemonImg,
    },
    {
      name: "Jele Beautie",
      flavor: "Яблоко",
      benefits: ["L-глутатион", "Цинк", "Натуральный детокс"],
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      image: appleImg,
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Каталог продукции
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Функциональные желе с витаминами, коллагеном и натуральными экстрактами 
            для поддержания красоты и здоровья
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Все продукты соответствуют требованиям безопасности пищевой продукции
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;