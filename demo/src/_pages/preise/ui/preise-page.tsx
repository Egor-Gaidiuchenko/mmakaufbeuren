import { routes } from "@/shared/config";
import { Container, SignalLink } from "@/shared/ui";

const plans = [
  {
    eyebrow: "Dein erster Schritt",
    title: "Probetraining",
    text: "Lerne Gym und Training kennen.",
    price: "0 €",
    action: "Probetraining anfragen",
  },
  {
    eyebrow: "Regelmäßig trainieren",
    title: "Mitgliedschaft",
    text: "Regelmäßig trainieren und gemeinsam wachsen.",
    price: "69 €",
    action: "Mitgliedschaft anfragen",
  },
] as const;

export function PreisePage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <Container>
          <div className="px-4 pt-10 pb-12 sm:px-6 sm:pt-14 md:px-10 md:pt-16 md:pb-16 lg:min-h-[371px] lg:px-[72px] lg:pt-[72px]">
            <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
              Preise / Transparent starten
            </p>
            <h1 className="mt-4 text-[32px] leading-none font-semibold tracking-tight uppercase sm:text-[40px] md:mt-6 md:text-[48px] lg:text-[64px] lg:leading-[72px]">
              Dein Training.
              <br />
              Dein nächster Schritt.
            </h1>
            <p className="mt-6 text-sm text-muted md:text-base lg:text-xl lg:leading-8">
              Alle Konditionen an einem Ort.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container>
          <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-[72px] lg:pt-[72px] lg:pb-[72px]">
            <p className="font-mono text-xs tracking-[0.08em] text-signal uppercase">Mitgliedschaft</p>
            <h2 className="mt-4 text-[28px] leading-tight font-semibold tracking-tight sm:text-[32px] md:mt-6 md:text-[40px] lg:text-[48px]">
              Finde deinen Einstieg.
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
              {plans.map((plan) => (
                <li key={plan.title} className="border-t-[3px] border-signal bg-sand px-5 py-6 md:px-7 md:py-7">
                  <p className="font-mono text-xs tracking-[0.08em] text-signal uppercase">{plan.eyebrow}</p>
                  <h3 className="mt-5 text-2xl leading-none font-semibold">{plan.title}</h3>
                  <p className="mt-4 text-base leading-6">{plan.text}</p>
                  <p className="mt-6 text-[40px] leading-none font-semibold tracking-tight text-signal">
                    {plan.price}
                  </p>
                  <p className="mt-4 text-sm leading-5 text-ink/60">
                    Leistungen und Laufzeiten
                    <br />
                    werden noch ergänzt.
                  </p>
                  <div className="mt-6 [&_a]:flex [&_a]:w-full">
                    <SignalLink href={routes.trial}>{plan.action}</SignalLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-sand text-ink">
        <Container>
          <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-[72px] lg:pt-[72px] lg:pb-[72px]">
            <p className="font-mono text-xs tracking-[0.08em] text-signal uppercase">Vor der Anmeldung</p>
            <h2 className="mt-4 text-[28px] leading-tight font-semibold tracking-tight sm:text-[32px] md:mt-6 md:text-[40px] lg:text-[48px]">
              Alles Wichtige klar geregelt.
            </h2>
            <p className="mt-6 max-w-[1100px] text-base leading-7 md:text-xl md:leading-8">
              Beitrag, Laufzeit, Kündigungsfrist und mögliche Zusatzkosten werden vor einer Anmeldung
              transparent ausgewiesen.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
