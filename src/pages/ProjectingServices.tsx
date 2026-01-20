import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectingServices = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl md:text-2xl hover:text-accent transition-colors">
            ТехСтройМонтаж
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/#services" className="hover:text-accent transition-colors">Услуги</Link>
            <Link to="/#benefits" className="hover:text-accent transition-colors">Преимущества</Link>
            <Link to="/#process" className="hover:text-accent transition-colors">Как работаем</Link>
            <Link to="/#reviews" className="hover:text-accent transition-colors">Отзывы</Link>
            <Link to="/#contact" className="hover:text-accent transition-colors">Контакты</Link>
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
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <Icon name="FileText" size={20} />
              <span className="text-sm font-medium">Проектирование</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Проектирование систем безопасности и электроснабжения
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Разрабатываем проектную документацию для объектов любого назначения. Проекты принимаются надзорными органами и подходят для реализации без доработок.
            </p>
            
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
              Получить консультацию по проекту
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Краткое описание и ключевая выгода</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Проектирование — ключевой этап, от которого зависит безопасность объекта, сроки строительства и отсутствие проблем при проверках. Мы разрабатываем проектную документацию инженерных и слаботочных систем строго в соответствии с действующими требованиями, нормативами и техническими регламентами.
              </p>
              
              <p className="font-medium text-foreground">
                Вы получаете не просто комплект чертежей, а готовое решение, которое можно реализовывать сразу, без переделок и рисков отказа в согласовании.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наши преимущества</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "GraduationCap",
                title: "Аттестованные специалисты",
                description: "На право проектирования средств обеспечения пожарной безопасности"
              },
              {
                icon: "Layers",
                title: "Полный спектр работ",
                description: "Все проектные работы в одной компании"
              },
              {
                icon: "ShieldCheck",
                title: "Соответствие требованиям",
                description: "Пожарной, антитеррористической и технической безопасности"
              },
              {
                icon: "Target",
                title: "Практичный подход",
                description: "Ориентированы на реальную эксплуатацию, а не формальное соответствие"
              },
              {
                icon: "Clock",
                title: "Понятные сроки",
                description: "И фиксированный объем работ"
              }
            ].map((advantage, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Какие системы мы проектируем</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "Flame", text: "Системы пожарной сигнализации (ПС)" },
                { icon: "Droplets", text: "Системы пожаротушения" },
                { icon: "Bell", text: "Системы оповещения и управления эвакуацией при пожаре (СОУЭ)" },
                { icon: "AlertTriangle", text: "Системы оповещения антитеррор" },
                { icon: "Shield", text: "Огнезащиту металлических конструкций" },
                { icon: "Lock", text: "Системы охранной сигнализации (ОС)" },
                { icon: "Video", text: "Системы охранного телевидения (СОТ)" },
                { icon: "KeyRound", text: "Системы контроля и управления доступом (СКУД)" },
                { icon: "Wifi", text: "Сети связи (СС)" },
                { icon: "Network", text: "Структурированные кабельные системы (СКС)" },
                { icon: "Zap", text: "Электроснабжение внутридомовых распределительных сетей (ЭС)" }
              ].map((system, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/30 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={system.icon} size={20} className="text-accent" />
                  </div>
                  <p className="text-foreground font-medium pt-2">{system.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-lg mb-4">
                <Icon name="Award" size={32} className="text-accent-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Аттестации и допуски</h2>
            </div>
            
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Все проектные работы выполняются специалистами, имеющими действующую аттестацию физических лиц на право проектирования средств обеспечения пожарной безопасности зданий и сооружений:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg">
                    <Icon name="BadgeCheck" size={24} className="text-accent flex-shrink-0" />
                    <span className="font-mono font-semibold">№ 26-17-2023-001753</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg">
                    <Icon name="BadgeCheck" size={24} className="text-accent flex-shrink-0" />
                    <span className="font-mono font-semibold">№ 26-17-2023-001356</span>
                  </div>
                </div>
                
                <p className="text-center font-medium text-foreground">
                  Это гарантирует легитимность проектной документации и ее принятие контролирующими органами.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Дмитрий",
                role: "застройщик",
                text: "Проектная документация была выполнена грамотно, без замечаний при проверке. Реализация прошла без доработок."
              },
              {
                name: "Елена",
                role: "коммерческий объект",
                text: "Обратились за проектированием систем безопасности. Все объяснили, учли специфику объекта, сроки соблюдены."
              },
              {
                name: "Андрей",
                role: "подрядная организация",
                text: "Удобно работать — проекты понятные, без лишних вопросов на этапе монтажа."
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

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Нужно корректное проектирование для вашего объекта?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Оставьте заявку — мы оценим задачу, подскажем оптимальное решение и сроки выполнения.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
            Заказать проектирование
            <Icon name="Send" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Получить расчет и консультацию</h2>
            <p className="text-muted-foreground mb-8 text-center">
              Заполните форму, и мы свяжемся с вами для обсуждения деталей проекта
            </p>
            
            <Card className="border-2 border-border shadow-xl">
              <CardContent className="p-8">
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
                    <label className="block text-sm font-medium mb-2">Краткое описание объекта или задачи</label>
                    <Textarea 
                      placeholder="Расскажите о вашем объекте и задачах проектирования..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                <li><Link to="/projecting" className="hover:text-accent transition-colors">Проектирование</Link></li>
                <li><Link to="/#services" className="hover:text-accent transition-colors">Документация</Link></li>
                <li><Link to="/#services" className="hover:text-accent transition-colors">Электроснабжение</Link></li>
                <li><Link to="/#services" className="hover:text-accent transition-colors">Монтажные работы</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><Link to="/#benefits" className="hover:text-accent transition-colors">О нас</Link></li>
                <li><Link to="/#process" className="hover:text-accent transition-colors">Как работаем</Link></li>
                <li><Link to="/#reviews" className="hover:text-accent transition-colors">Отзывы</Link></li>
                <li><Link to="/#contact" className="hover:text-accent transition-colors">Контакты</Link></li>
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

export default ProjectingServices;
