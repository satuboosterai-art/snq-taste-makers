import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const facts = [
    { label: "Лет на рынке", value: "10+" },
    { label: "Стран присутствия", value: "3" },
    { label: "Точек продаж", value: "25+" },
    { label: "Категорий товаров", value: "6" },
  ];

  const regions = [
    { name: "Казахстан", cities: "Алматы, Астана", stores: "25 точек продаж" },
    { name: "Кыргызстан", cities: "Дистрибьюторская сеть", stores: "Развитие сети" },
    { name: "Узбекистан", cities: "Расширение присутствия", stores: "Новые возможности" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            О компании SNQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="font-semibold text-primary">«Доставляем лучшее. Расширяем границы»</span>
            <br />
            Компания SNQ — стабильный дистрибьютор и импортер с более чем 10-летним опытом
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {facts.map((fact, index) => (
            <Card key={index} className="text-center gradient-card border-0 shadow-secondary">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {fact.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {fact.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Наша миссия</h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                Мы специализируемся на поставке <strong className="text-primary">эксклюзивных товаров</strong> из 
                Юго-Восточной Азии и других регионов мира, с дальнейшей реализацией на рынках 
                Казахстана, Кыргызстана и Узбекистана.
              </p>
              <p className="text-muted-foreground mb-4">
                Наш бренд SNQ олицетворяет <em>природную красоту тропических островов, космическую силу духа, 
                историческую мудрость, человеческую доброту</em> и тончайшую веру в лучшее.
              </p>
              <p className="text-muted-foreground">
                Мы тщательно выбираем самых надежных и добросовестных производителей, 
                стремясь представить не только вкусные, но и <strong className="text-secondary">полезные продукты</strong>.
              </p>
            </div>
          </div>
          
          <div className="grid gap-4">
            <h3 className="text-2xl font-bold text-foreground mb-2">География присутствия</h3>
            {regions.map((region, index) => (
              <Card key={index} className="gradient-card border-0 shadow-secondary">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{region.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {region.stores}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{region.cities}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="gradient-card border-0 shadow-secondary">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Для производителей</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  Продвижение товаров с учетом локальной специфики
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  Сертификация и адаптация продукции
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  Маркетинговое сопровождение и PR-поддержка
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  Развитая дистрибуционная сеть в Центральной Азии
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 shadow-secondary">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Категории товаров</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Продукты питания",
                  "Косметика",
                  "Бытовая химия", 
                  "Домашние товары",
                  "Электроника",
                  "Нишевые категории"
                ].map((category, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2 text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;