import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="font-bold text-xl md:text-2xl">ТехСтройМонтаж</div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#benefits" className="hover:text-accent transition-colors">Преимущества</a>
            <a href="#process" className="hover:text-accent transition-colors">Как работаем</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Инженерные и монтажные работы под ключ
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Проектирование, документация по пожарной безопасности, электроснабжение и строительно-монтажные работы — с лицензиями, по нормативам и в согласованные сроки.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
              Рассчитать стоимость работ
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="benefits" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Краткое описание преимуществ</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Мы — специализированная компания, оказывающая услуги в области инженерных систем, пожарной безопасности и электроснабжения. Работаем с юридическими и частными лицами, берем на себя весь цикл работ — от проектирования до выполнения и сдачи.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "Shield",
                title: "Работа по нормативам",
                description: "Строго по требованиям контролирующих органов"
              },
              {
                icon: "Award",
                title: "Лицензии и аттестации",
                description: "На проектные и монтажные работы"
              },
              {
                icon: "Briefcase",
                title: "Практический опыт",
                description: "В системах пожарной безопасности и электроснабжения"
              },
              {
                icon: "FileText",
                title: "Понятный объем работ",
                description: "Без скрытых доплат"
              },
              {
                icon: "CheckCircle",
                title: "Официальный договор",
                description: "И гарантия на выполненные работы"
              },
              {
                icon: "Users",
                title: "Говорим на одном языке",
                description: "Без лишней маркетинговой воды, только по сути"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Услуги</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Cpu",
                title: "Проектирование инженерных и слаботочных систем",
                items: [
                  "Пожарная сигнализация, пожаротушение, СОУЭ",
                  "Системы охраны, видеонаблюдения, СКУД",
                  "Электроснабжение и слаботочные сети"
                ],
                link: "/projecting"
              },
              {
                icon: "FileCheck",
                title: "Документация по пожарной безопасности",
                items: [
                  "Разработка деклараций",
                  "Консультации и сопровождение"
                ]
              },
              {
                icon: "Zap",
                title: "Электроснабжение",
                items: [
                  "Электромонтажные работы внутридомовых распределительных сетей"
                ]
              },
              {
                icon: "Hammer",
                title: "Строительно-монтажные работы",
                items: [
                  "Металлоконструкции, сварочные работы",
                  "Ограждения, ворота, навесы",
                  "Каркасные конструкции, лестницы, потолки",
                  "Гарантия на работы — 1 год"
                ]
              }
            ].map((service, index) => {
              const CardWrapper = service.link ? Link : 'div';
              const cardProps = service.link ? { to: service.link } : {};
              
              return (
                <CardWrapper key={index} {...cardProps} className={service.link ? "block" : ""}>
                  <Card className="border-2 border-border hover:border-accent transition-colors h-full">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                        <Icon name={service.icon} size={28} className="text-accent-foreground" />
                      </div>
                      <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                      <ul className="space-y-2 mb-4">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {service.link && (
                        <div className="flex items-center gap-2 text-accent font-medium mt-4">
                          <span>Подробнее</span>
                          <Icon name="ArrowRight" size={18} />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Как мы работаем</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {[
                "Вы оставляете заявку",
                "Мы уточняем задачу и объем работ",
                "Формируем предложение и стоимость",
                "Заключаем договор",
                "Выполняем работы и сдаем объект"
              ].map((step, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    {index < 4 && (
                      <div className="w-0.5 h-full bg-accent/30 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-lg font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-lg text-muted-foreground mt-12 font-medium">
              Прозрачно, поэтапно и без неожиданностей.
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Алексей",
                role: "коммерческий объект",
                text: "Заказывали проектирование и монтаж инженерных систем. Все работы выполнены в срок, документы приняли без вопросов."
              },
              {
                name: "Ирина",
                role: "частный заказчик",
                text: "Понравился подход — все объяснили, рассчитали, сделали без переделок. Рекомендую."
              },
              {
                name: "Сергей",
                role: "подрядчик",
                text: "Работали как с субподрядчиком. Четко, по нормативам, без срывов сроков."
              }
            ].map((review, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Нужно рассчитать стоимость или понять, с чего начать?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Оставьте заявку — мы свяжемся с вами, уточним задачу и предложим оптимальное решение.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
            Оставить заявку
            <Icon name="Send" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Получить консультацию</h2>
              <p className="text-muted-foreground mb-8">
                Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения вашего проекта.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий (описание задачи)</label>
                  <Textarea 
                    placeholder="Опишите вашу задачу..."
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@tehstroymontazh.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123, офис 456</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-64 bg-muted rounded-lg overflow-hidden">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A64e5c77d3d0c3e3e8b5e5e5e5e5e5e5e&amp;source=constructor"
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  className="grayscale"
                  title="Карта офиса"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">ТехСтройМонтаж</h4>
              <p className="text-sm text-primary-foreground/80">
                Профессиональные инженерные и монтажные работы под ключ
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#services" className="hover:text-accent transition-colors">Проектирование</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Документация</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Электроснабжение</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Монтажные работы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#benefits" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#process" className="hover:text-accent transition-colors">Как работаем</a></li>
                <li><a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@tehstroymontazh.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>© 2024 ТехСтройМонтаж. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;