import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Cooperation = () => {
  const benefits = [
    "Продвижение товаров с учетом локальной специфики",
    "Сертификация и адаптация продукции под местный рынок",
    "Маркетинговое сопровождение и PR-поддержка",
    "Развитая дистрибуционная сеть в странах Центральной Азии",
    "Индивидуальный подход к каждому партнёру",
    "Проведение дегустаций, тестов, мероприятий на местах продаж",
    "Онлайн- и офлайн-продвижение через партнерские каналы",
    "Оперативная логистика и таможенное сопровождение"
  ];

  return (
    <section id="cooperation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Сотрудничество
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Станьте нашим партнером и получите доступ к развитой дистрибуционной сети 
            в странах Центральной Азии
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Что мы предлагаем производителям
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="gradient-card border-0 shadow-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Начать сотрудничество
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">лет опыта на рынке</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">3</div>
                    <p className="text-xs text-muted-foreground">страны</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <p className="text-xs text-muted-foreground">точек продаж</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">6</div>
                    <p className="text-xs text-muted-foreground">категорий</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full shadow-glow hover:shadow-primary"
                  >
                    Связаться с нами
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Расскажем подробно о возможностях сотрудничества
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cooperation;