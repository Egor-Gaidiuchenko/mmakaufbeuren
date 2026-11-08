import { routes } from "@/shared/config";
import { Container, SignalLink } from "@/shared/ui";

const sessions = [
  { day: "Montag", time: "18:00–20:00", course: "MMA" },
  { day: "Dienstag", time: "18:30–20:30", course: "BJJ" },
  { day: "Mittwoch", time: "19:00–21:00", course: "Judo Nogi" },
  { day: "Donnerstag", time: "18:30–20:30", course: "Striking" },
  { day: "Freitag", time: "18:00–20:00", course: "Kraft und Ausdauer" },
] as const;

export function TrainingsplanPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <Container>
          <div className="px-4 pt-10 pb-12 sm:px-6 sm:pt-14 md:px-10 md:pt-16 md:pb-16 lg:min-h-[371px] lg:px-[72px] lg:pt-[76px]">
            <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Trainingsplan</p>
            <h1 className="mt-4 text-[32px] leading-none font-semibold tracking-tight uppercase sm:text-[40px] md:mt-6 md:text-[48px] lg:text-[64px] lg:leading-[72px]">
              Zeit für
              <br />
              dein Training.
            </h1>
            <p className="mt-6 text-sm text-muted md:text-base">Deine Woche auf einen Blick.</p>
          </div>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container>
          <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-[72px] lg:pt-[76px] lg:pb-[72px]">
            <p className="font-mono text-xs tracking-[0.08em] text-signal uppercase">Wochenübersicht</p>
            <h2 className="mt-4 text-[28px] leading-tight font-semibold tracking-tight sm:text-[32px] md:mt-6 md:text-[40px] lg:text-[48px]">
              Deine Woche auf der Matte.
            </h2>
            <div className="mt-8 hidden border-b border-ink/10 pb-3 font-mono text-[10px] tracking-[0.08em] text-signal uppercase md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr_1.2fr]">
              <span>Tag</span>
              <span>Uhrzeit</span>
              <span className="hidden lg:block">Kurs</span>
            </div>
            <ul className="mt-6 flex flex-col gap-3 md:mt-0 md:gap-0">
              {sessions.map((session) => (
                <li
                  key={session.day}
                  className="grid grid-cols-2 items-baseline border-l-[3px] border-signal bg-sand px-4 py-4 md:items-center md:border-0 md:border-b md:border-ink/10 md:bg-transparent md:px-0 md:py-5 lg:grid-cols-[1.2fr_1fr_1.2fr]"
                >
                  <span className="font-semibold">{session.day}</span>
                  <span>
                    <span className="font-semibold text-signal">{session.time}</span>
                    <span className="mt-1 hidden text-sm text-ink/60 md:block lg:hidden">{session.course}</span>
                  </span>
                  <span className="col-span-2 mt-1 text-sm text-ink/60 md:hidden">{session.course}</span>
                  <span className="hidden text-sm text-ink/60 lg:block">{session.course}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 max-md:[&_a]:flex max-md:[&_a]:w-full max-md:[&_a]:justify-center">
              <SignalLink href={routes.trial}>Passende Einheit anfragen</SignalLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
