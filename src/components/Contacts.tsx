import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contacts = () => {
  const contacts = [
    {
      icon: Phone,
      title: "Телефоны",
      details: [
        "+7 705 915 7328",
        "+7 707 505 6985", 
        "+7 707 376 4556"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "asd.royal@bk.ru",
        "mukhannuras@mail.ru"
      ]
    },
    {
      icon: MapPin,
      title: "Адрес",
      details: [
        "г. Алматы, Кабдолова 2, офис 12",
        "Республика Казахстан"
      ]
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground">
            SNQ — ваш надёжный партнёр в мире дистрибуции
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index} className="text-center gradient-card border-0 shadow-secondary hover:shadow-primary transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center shadow-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {contact.title}
                  </h3>
                  <div className="space-y-2">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="gradient-card border-0 shadow-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Сотрудничество
              </h3>
              <p className="text-muted-foreground mb-6">
                Заинтересованы в сотрудничестве? Мы предлагаем индивидуальный подход 
                к каждому партнёру и полный комплекс услуг по дистрибуции.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero"
                  size="lg"
                  className="shadow-glow hover:shadow-primary"
                  onClick={() => window.open('https://wa.link/huk821', '_blank')}
                >
                  Стать партнёром
                </Button>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="shadow-secondary"
                  asChild
                >
                  <a href="/presentation.snq.pdf" download>
                    Скачать презентацию
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                  onClick={() => window.open('https://wa.link/huk821', '_blank')}
                >
                  Связаться с нами
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="text-sm text-muted-foreground space-y-1">
            <p><strong>Импортер:</strong> ТОО «ASD ROYAL»</p>
            <p>Республика Казахстан, г. Алматы, 1-й микрорайон, д. 6/1</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;