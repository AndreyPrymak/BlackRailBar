import { useState } from "react";
export default function BlackRailBarSite() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const galleryPhotos = [
      "/images/bar1.jpg",
      "/images/bar2.jpg",
      "/images/bar3.jpg",
      "/images/bar4.jpg"

      ];
  const menuCocktails = [
    {
      name: "Gin and Tolik",
      price: "220 грн",
      desc: "Джин, Tonik, cлайси лимону. Класика з характером Толіка.",
    },
    {
      name: "Old Fashioned",
      price: "240 грн",
      desc: "Бурбон, ангостура, тростинний цукор. Глибокий, теплий, вечірній.",
    },
    {
      name: "Espresso Martini",
      price: "260 грн",
      desc: "Горілка, кавовий лікер, еспресо. Для тих, хто любить нічний ритм.",
    },
    {
      name: "Midnight Smoke",
      price: "300 грн",
      desc: "Авторський коктейль з димною подачею, пряним ароматом і довгим післясмаком.",
    },
  ];

  const menuSnacks = [
    {
      name: "Неперевершені ребра",
      price: "210 грн",
      desc: "Неперевершені ребра мариновані в соєво-медовому соусі з додаванням міцної гірчички.",
    },
    {
      name: "Шашлик всьому голова",
      price: "320 грн",
      desc: "Шашлик зі свинини на вогні, що може бути краще.",
    },
    {
      name: "Курячі джерки",
      price: "190 грн",
      desc: "Джерки приготовані власними руцями.",
    },
    {
      name: "Медовик Фастів-2",
      price: "140 грн",
      desc: "Ти повинен бути клієнтом Віталія щоб мати можливість скуштувати цей неперевершений шедевр.",
    },
  ];

  const contacts = {
    address: "Київ, вул. Новопольова, 2, гараж який ні з чим не зплутаєш",
    phone: "+380 (67) 232-70-27",
    email: "hello@blackrailbar.ua",
    hours: [
      "Пн–Чт: 17:00 – 00:00",
      "Пт: 15:45 – 00:00",
      "Сб: 15:00 – 02:00",
      "Нд: 15:00 – 00:00",
    ],
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white selection:bg-amber-300 selection:text-black">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background: #090909;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .gold-glow {
          box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.18), 0 10px 30px rgba(0, 0, 0, 0.35);
        }
        .hero-overlay {
          background:
            radial-gradient(circle at top, rgba(245, 158, 11, 0.18), transparent 30%),
            linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 45%, rgba(9,9,9,1) 100%);
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-400/40 bg-amber-400/10 text-lg font-bold text-amber-300">
              B
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-amber-300">Black Rail</div>
              <div className="text-xs text-white/60">Cocktail & Lounge Bar</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#home" className="transition hover:text-amber-300">Головна</a>
            <a href="#menu" className="transition hover:text-amber-300">Меню</a>
            <a href="#contacts" className="transition hover:text-amber-300">Контакти</a>
          </nav>

          <a
            href="#contacts"
            className="rounded-2xl border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-400/20"
          >
            Забронювати
          </a>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: "url('/images/background.jpg')",
              backgroundPosition: "50% 22%"
            }}
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-amber-300/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-200/90">
                Атмосфера справжнього гаражу
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                Бар, куди приходять
                <span className="block text-amber-300">за смаком і вайбом</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Авторські коктейлі, преміальна атмосфера, стильна музика та простір,
                де кожен вечір стає подією. Ідеальне місце для зустрічей, побачень і ночей,
                які хочеться повторити.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="rounded-2xl bg-amber-300 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                >
                  Дивитися меню
                </a>
                <a
                  href="#contacts"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Контакти та бронювання
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="gold-glow rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.28em] text-amber-300">Signature</div>
                <div className="mt-3 text-2xl font-semibold">Midnight Smoke</div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Димна подача, бурштиновий колір, пряний аромат і виразний смак — коктейль,
                  який запам’ятовується з першого ковтка.
                </p>
                <div className="mt-5 text-lg font-medium text-amber-200">300 грн</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="gold-glow rounded-[24px] border border-white/10 bg-black/40 p-5">
                  <div className="text-3xl font-semibold text-amber-300">4.9</div>
                  <div className="mt-2 text-sm text-white/65">Середня оцінка гостей</div>
                </div>
                <div className="gold-glow rounded-[24px] border border-white/10 bg-black/40 p-5">
                  <div className="text-3xl font-semibold text-amber-300">17:00</div>
                  <div className="mt-2 text-sm text-white/65">Відкриваємось щодня</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Авторські коктейлі",
                text: "Баланс класики та сучасних смаків. Від Negroni до фірмових міксів.",
              },
              {
                title: "Преміальна атмосфера",
                text: "Темний інтер’єр, тепле світло, комфортні місця і правильний вайб.",
              },
              {
                title: "Події та музика",
                text: "DJ-сети, тематичні вечори та живий ритм на вихідних.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 gold-glow"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-amber-300">Меню</div>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Коктейлі та закуски</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Лаконічне меню для тих, хто цінує смак, стиль подачі та якісний вечір.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 gold-glow sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Коктейлі</h3>
                <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
                  Bar list
                </span>
              </div>

              <div className="space-y-6">
                {menuCocktails.map((item) => (
                  <div key={item.name} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-medium">{item.name}</h4>
                        <p className="mt-2 text-sm leading-7 text-white/70">{item.desc}</p>
                      </div>
                      <div className="shrink-0 text-sm font-semibold text-amber-200">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 gold-glow sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Закуски</h3>
                <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
                  Kitchen
                </span>
              </div>

              <div className="space-y-6">
                {menuSnacks.map((item) => (
                  <div key={item.name} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-medium">{item.name}</h4>
                        <p className="mt-2 text-sm leading-7 text-white/70">{item.desc}</p>
                      </div>
                      <div className="shrink-0 text-sm font-semibold text-amber-200">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 gold-glow sm:p-10">
              <div className="text-xs uppercase tracking-[0.3em] text-amber-300">Контакти</div>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Завітай сьогодні</h2>
              <div className="mt-8 space-y-6 text-sm leading-8 text-white/75 sm:text-base">
                <div>
                  <div className="text-white">Адреса</div>
                  <div>{contacts.address}</div>
                </div>
                <div>
                  <div className="text-white">Телефон</div>
                  <a
                    href={`tel:${contacts.phone.replace(/[^+\d]/g, "")}`}
                    className="transition hover:text-amber-300"
                  >
                    {contacts.phone}
                  </a>
                </div>
                <div>
                  <div className="text-white">Email</div>
                  <a
                    href={`mailto:${contacts.email}`}
                    className="transition hover:text-amber-300"
                  >
                    {contacts.email}
                  </a>
                </div>
                <div>
                  <div className="mb-2 text-white">Години роботи</div>
                  {contacts.hours.map((hour) => (
                    <div key={hour}>{hour}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-amber-400/10 via-white/[0.04] to-white/[0.02] p-6 gold-glow sm:p-8">
                        <div
                          key={`${photo}-${index}`}
                          className="flex h-[320px] shrink-0 items-center justify-center bg-black sm:h-[420px] lg:h-[500px]"
                          style={{ width: `${100 / galleryPhotos.length}%` }}
                        >
                          <img
                            src={photo}
                            alt={`Фото ${index + 1}`}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    {galleryPhotos.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            setCurrentSlide((prev) =>
                              prev === 0 ? galleryPhotos.length - 1 : prev - 1
                            )
                          }
                          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/55 px-3 py-2 text-white transition hover:bg-black/75 sm:left-4"
                          aria-label="Попереднє фото"
                        >
                          ←
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setCurrentSlide((prev) =>
                              prev === galleryPhotos.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/55 px-3 py-2 text-white transition hover:bg-black/75 sm:right-4"
                          aria-label="Наступне фото"
                        >
                          →
                        </button>
                      </>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-4 sm:p-6">
                      <div>
                        <div className="text-sm font-medium text-white">Вечірня атмосфера</div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-amber-200/90 sm:text-xs">
                          Lounge • Cocktails • Mood
                        </div>
                      </div>

                      {galleryPhotos.length > 1 && (
                        <div className="flex gap-2">
                          {galleryPhotos.map((_, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setCurrentSlide(index)}
                              aria-label={`Перейти до фото ${index + 1}`}
                              className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/20 transition ${
                                index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/70"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </main>

        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between lg:px-10">
            <div>© 2026 Black Rail Bar by 50Prim. Усі права захищені.</div>
            <div className="flex gap-6">
              <a href="#home" className="transition hover:text-amber-300">Головна</a>
              <a href="#menu" className="transition hover:text-amber-300">Меню</a>
              <a href="#contacts" className="transition hover:text-amber-300">Контакти</a>
            </div>
          </div>
        </footer>
        </div>
 );
}