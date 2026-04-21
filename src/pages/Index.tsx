import { useEffect, useState } from "react";
import { TrendingUp, Brain, Zap, Shield, BarChart2, RefreshCw, ArrowRight, ChevronRight } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "pricing", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );

      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="text-accent" />
            </div>
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              AI Auto Trading
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Возможности
            </a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">
              Как это работает
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">
              Тарифы
            </a>
          </nav>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 text-sm font-medium border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all">
              Войти
            </button>
            <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-semibold">
              Попробовать
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img src="/images/black-hole-gif.gif" alt="Trading animation" className="w-auto h-3/4 object-contain" />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-8 inline-block">
                <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs font-medium tracking-widest text-accent uppercase">
                  ● LIVE · Торгует 24/7 в автоматическом режиме
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Торгуй умнее.
                </span>
                <br />
                <span className="text-accent">Зарабатывай больше.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                AI-бот автономно торгует на рынке 24/7, анализирует паттерны и самообучается — 
                без вашего участия. Просто подключите и наблюдайте за ростом.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center">
                  Запустить бота
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white">
                  Смотреть демо
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">$1,418</div>
                  <p className="text-sm text-white/60">Средний P&L</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">3 382+</div>
                  <p className="text-sm text-white/60">Сделок закрыто</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">33%</div>
                  <p className="text-sm text-white/60">Win Rate модели</p>
                </div>
              </div>
            </div>

            {/* Mock Trading Dashboard */}
            <div
              className={`relative transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 bg-card/80 border border-accent/30 rounded-2xl p-5 backdrop-blur-sm">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
                      <Icon name="Zap" size={12} className="text-accent" />
                    </div>
                    <span className="font-bold text-sm">AUTO TRADING BOT</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent border border-accent/40 rounded font-mono">M5</span>
                </div>
                <div className="text-xs text-white/50 mb-4">● LIVE · 20 пар · экспайр 15 min · след. батч через 32s</div>
                
                {/* Stop button */}
                <div className="w-full py-3 mb-4 border border-red-500/60 rounded-lg flex items-center justify-center gap-2 text-red-400 text-sm font-semibold bg-red-500/10">
                  <div className="w-3 h-3 border border-red-400 rounded-sm" />
                  STOP AUTO TRADING
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-5 gap-2 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">-$419</div>
                    <div className="text-xs text-white/40">BALANCE</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">3382</div>
                    <div className="text-xs text-white/40">TRADES</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-400">33%</div>
                    <div className="text-xs text-white/40">WIN %</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">$1418</div>
                    <div className="text-xs text-white/40">P&L</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">20</div>
                    <div className="text-xs text-white/40">OPEN</div>
                  </div>
                </div>

                {/* AI Engine block */}
                <div className="border border-accent/20 rounded-xl p-4 bg-black/40">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Icon name="Cpu" size={14} className="text-accent" />
                      <span className="text-sm font-bold">AI Self-Learning Engine</span>
                    </div>
                    <span className="text-accent text-sm font-bold">33%</span>
                  </div>
                  <div className="text-xs text-white/40 mb-3">2681 analyzed · 2681 closed · max 10,000</div>
                  
                  {/* Progress bars */}
                  <div className="h-1.5 rounded-full bg-white/10 mb-1 overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-accent to-accent/60 rounded-full" />
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 mb-3 overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <div className="text-sm font-bold text-white">33%</div>
                      <div className="text-xs text-white/40">Model Win%</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">—</div>
                      <div className="text-xs text-white/40">vs Base Δ</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">BUY</div>
                      <div className="text-xs text-white/40">Preferred</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">ON</div>
                      <div className="text-xs text-white/40">Override AI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Возможности</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Торгует вместо вас
              </span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Продвинутый AI анализирует рынок, открывает и закрывает сделки — вы просто наблюдаете за прибылью.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Brain",
                title: "Self-Learning Engine",
                desc: "ИИ обучается на каждой сделке, улучшает win rate и адаптируется к изменениям рынка автоматически.",
              },
              {
                icon: "Zap",
                title: "Торговля 24/7",
                desc: "Бот работает без остановок — ловит возможности на всех таймфреймах пока вы спите или работаете.",
              },
              {
                icon: "BarChart2",
                title: "20+ торговых пар",
                desc: "Одновременная торговля по нескольким инструментам с автоматической балансировкой риска.",
              },
              {
                icon: "Shield",
                title: "Контроль рисков",
                desc: "Встроенный риск-менеджмент: стоп-лоссы, максимальный дневной убыток, управление позицией.",
              },
              {
                icon: "RefreshCw",
                title: "AI Override",
                desc: "Умная система может переопределять базовый сигнал, если AI видит более сильный паттерн.",
              },
              {
                icon: "TrendingUp",
                title: "Реальная аналитика",
                desc: "Детальная статистика: P&L, win%, количество сделок, предпочтительное направление — всё в реальном времени.",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-500 cursor-pointer backdrop-blur-sm ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <Icon name={item.icon} size={40} className="mb-6 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Как это работает</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Запуск за 4 шага
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Подключите", desc: "Привяжите API вашего брокера — безопасно, только торговые права без вывода средств" },
              { num: "02", title: "Настройте", desc: "Выберите пары, таймфрейм, размер ставки и допустимый уровень риска" },
              { num: "03", title: "Запустите", desc: "Нажмите Start — бот начнёт анализировать рынок и открывать позиции" },
              { num: "04", title: "Наблюдайте", desc: "Следите за статистикой в реальном времени, AI самообучается с каждой сделкой" },
            ].map((step, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col justify-between transition-all backdrop-blur-sm cursor-pointer">
                    <div>
                      <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Тарифы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Начни торговать сегодня
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29/мес",
                features: ["До 5 торговых пар", "Базовый AI-движок", "Таймфреймы M5–H1", "Email уведомления", "Поддержка сообщества"],
                highlight: false,
              },
              {
                name: "Expert",
                price: "$99/мес",
                features: ["До 20 торговых пар", "Self-Learning Engine", "Все таймфреймы", "AI Override mode", "Приоритетная поддержка 24/7"],
                highlight: true,
              },
              {
                name: "Institutional",
                price: "По запросу",
                features: ["Безлимитные пары", "Кастомные стратегии", "Выделенный сервер", "Персональный менеджер", "White-label решение"],
                highlight: false,
              },
            ].map((plan, i) => {
              const isVisible = visibleSections["pricing"];
              return (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  } ${plan.highlight ? "md:scale-105" : ""}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {plan.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition" />
                  )}
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-black text-xs font-bold rounded-full">
                      ПОПУЛЯРНЫЙ
                    </div>
                  )}
                  <div
                    className={`relative p-10 border rounded-2xl h-full flex flex-col justify-between backdrop-blur-sm transition-all ${
                      plan.highlight ? "border-accent/40 bg-accent/10" : "border-accent/10 bg-card/50 hover:bg-card/80"
                    }`}
                  >
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                      <p className="text-4xl font-black text-accent mb-8">{plan.price}</p>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex gap-3 text-sm items-start">
                            <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className={`w-full px-6 py-4 rounded-xl font-semibold transition-all ${
                        plan.highlight
                          ? "bg-gradient-to-r from-accent to-accent/80 text-black hover:shadow-xl hover:shadow-accent/40"
                          : "border border-accent/20 hover:border-accent/40 hover:bg-accent/5"
                      }`}
                    >
                      {plan.name === "Institutional" ? "Связаться с нами" : "Начать торговать"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Рынок не спит.
            </span>
            <br />
            <span className="text-accent">Ваш бот тоже.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Подключите AI Auto Trading Bot сегодня и позвольте искусственному интеллекту 
            работать на вас 24 часа в сутки, 7 дней в неделю.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 mx-auto">
            Запустить бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2025 AI Auto Trading — Торгует пока вы живёте</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Конфиденциальность
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
