import { Suspense } from "react";
import Link from "next/link";

import { articlePath, routes } from "@/shared/config";
import { Container, SignalLink } from "@/shared/ui";

import { HomePhotos } from "./home-photos";
import { HomeTrainers } from "./home-trainers";

const disciplines = [
  { index: "01", title: "MMA", text: "Stand und Boden verbinden." },
  { index: "02", title: "BJJ", text: "Technik und Kontrolle am Boden." },
  { index: "03", title: "Judo Nogi", text: "Würfe und Übergänge ohne Gi." },
  { index: "04", title: "Striking", text: "Schläge, Kicks und Distanz." },
  { index: "05", title: "Kraft und Ausdauer", text: "Stärker werden. Länger durchhalten." },
] as const;

const steps = [
  { index: "01", title: "Anfragen", text: "Erzähl uns von dir und deinem Interesse." },
  { index: "02", title: "Ankommen", text: "Lerne das Team und das Gym kennen." },
  { index: "03", title: "Loslegen", text: "Erlebe dein erstes Training auf der Matte." },
] as const;

const articles = [
  {
    id: 1,
    eyebrow: "Einstieg / Leseprobe",
    title: "Dein erstes MMA-Training",
    text: "Was dich erwartet und was du mitbringen solltest.",
  },
  {
    id: 2,
    eyebrow: "Training / Entwurf",
    title: "Technik vor Tempo",
    text: "Warum saubere Grundlagen den Unterschied machen.",
  },
] as const;

function Eyebrow({ children }: { children: string }) {
  return <p className="font-mono text-xs tracking-[0.08em] text-signal uppercase">{children}</p>;
}

export function HomePage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <Container>
          <div className="flex flex-col lg:grid lg:min-h-[560px] lg:grid-cols-2">
            <div className="w-full px-4 pt-10 pb-8 lg:px-[72px] lg:pt-[72px] lg:pb-16">
              <h1 className="text-[32px] leading-none font-semibold tracking-tight uppercase sm:text-[40px] lg:text-[64px] lg:leading-[72px]">
                MMA
                <br />
                Kaufbeuren
              </h1>
              <p className="mt-6 w-full text-sm leading-6 text-muted lg:max-w-[520px] lg:text-base">
                MMA und Brazilian Jiu-Jitsu in Kaufbeuren. Lerne, im Stand und am Boden zu kämpfen,
                verbessere deine Fitness und entwickle dich im Team weiter. Ob du zum ersten Mal auf
                der Matte stehst oder bereits Erfahrung mitbringst: Bei uns trainierst du mit Menschen,
                die sich gegenseitig fordern und unterstützen. Respekt, Disziplin und die Freude am
                Sport stehen dabei im Mittelpunkt.
              </p>
              <div className="mt-8 hidden md:block">
                <SignalLink href={routes.trial}>Probetraining anfragen</SignalLink>
              </div>
            </div>
            <div className="flex w-full flex-col px-4 pb-6 min-[526px]:px-0 md:pb-8 lg:h-full lg:pb-16">
              <Suspense fallback={<div className="h-[240px] w-full lg:h-auto lg:min-h-0 lg:flex-1" />}>
                <HomePhotos />
              </Suspense>
            </div>
            <div className="px-4 pb-10 sm:px-6 md:hidden">
              <SignalLink href={routes.trial}>Probetraining anfragen</SignalLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-signal text-white">
        <Container>
          <p className="flex min-h-14 flex-wrap items-center px-4 py-3 text-[10px] leading-4 font-medium tracking-[0.04em] uppercase sm:px-6 sm:text-[11px] md:h-20 md:px-10 md:py-0 md:text-xl md:tracking-[0.04em]">
            Technik / Gemeinschaft / Disziplin / Respekt
          </p>
        </Container>
      </section>

      <section className="bg-paper">
        <Container>
          <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-[72px] lg:pt-[76px] lg:pb-[72px]">
            <Eyebrow>01 / Training</Eyebrow>
            <h2 className="mt-6 text-[28px] leading-tight font-semibold tracking-tight sm:text-[32px] md:text-[40px] lg:mt-8 lg:text-[48px]">
              Mehr als nur ein Workout.
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {disciplines.map((item) => (
                <li key={item.title} className="bg-sand px-6 py-7">
                  <Eyebrow>{item.index}</Eyebrow>
                  <h3 className="mt-6 text-xl leading-none font-semibold">{item.title}</h3>
                  <p className="mt-5 text-sm leading-5">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-sand">
        <Container>
          <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-[72px] lg:pt-[76px] lg:pb-[72px]">
            <Eyebrow>02 / Team</Eyebrow>
            <h2 className="mt-6 text-[28px] leading-tight font-semibold tracking-tight sm:text-[32px] md:text-[40px] lg:mt-8 lg:text-[48px]">
              Deine Trainer.
            </h2>
            <p className="mt-6 text-base">Gemeinsam besser werden.</p>
            <Suspense fallback={<p className="mt-8 text-base">Trainer werden geladen.</p>}>
              <HomeTrainers />
            </Suspense>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container>
          <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-[72px] lg:pt-[76px] lg:pb-[72px]">
            <Eyebrow>03 / Einstieg</Eyebrow>
            <h2 className="mt-6 text-[28px] leading-tight font-semibold tracking-tight sm:text-[32px] md:text-[40px] lg:mt-8 lg:text-[48px]">
              Du musst noch nichts können.
            </h2>
            <p className="mt-6 max-w-[640px] text-base text-muted">
              Nur den ersten Schritt machen. Wir finden gemeinsam einen passenden Einstieg.
            </p>
            <ol className="mt-8 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <li key={step.index}>
                  <Eyebrow>{step.index}</Eyebrow>
                  <h3 className="mt-5 text-2xl leading-none font-semibold">{step.title}</h3>
                  <p className="mt-4 text-base leading-6 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container>
          <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-[72px] lg:pt-[76px] lg:pb-[72px]">
            <Eyebrow>04 / Journal</Eyebrow>
            <h2 className="mt-6 text-[28px] leading-tight font-semibold tracking-tight sm:text-[32px] md:text-[40px] lg:mt-8 lg:text-[48px]">
              Auf und neben der Matte.
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <li key={article.title}>
                  <Link href={articlePath(article.id)} className="block bg-sand px-4 py-7 sm:px-6 md:px-8 md:py-8">
                    <Eyebrow>{article.eyebrow}</Eyebrow>
                    <h3 className="mt-6 text-xl leading-tight font-semibold sm:text-2xl">{article.title}</h3>
                    <p className="mt-5 text-base leading-6">{article.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <SignalLink href={routes.journal}>Zum Journal</SignalLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
