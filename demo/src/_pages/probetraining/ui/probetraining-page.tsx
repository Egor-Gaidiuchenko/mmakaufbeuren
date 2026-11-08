import { ArrowUpRight, Container } from "@/shared/ui";

const fields = [
  {
    id: "name",
    label: "Dein Name *",
    placeholder: "Vor- und Nachname",
    type: "text",
    required: true,
    autoComplete: "name",
  },
  {
    id: "email",
    label: "E-Mail *",
    placeholder: "name@beispiel.de",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    id: "interest",
    label: "Interesse",
    placeholder: "MMA / Striking / Grappling",
    type: "text",
    required: false,
    autoComplete: "off",
  },
  {
    id: "experience",
    label: "Erfahrung",
    placeholder: "Ich starte neu",
    type: "text",
    required: false,
    autoComplete: "off",
  },
  {
    id: "message",
    label: "Nachricht",
    placeholder: "Wann passt es dir?",
    type: "text",
    required: false,
    autoComplete: "off",
  },
] as const;

export function ProbetrainingPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <Container>
          <div className="h-[371px] px-[72px] pt-[72px]">
            <p className="font-mono text-[10px] tracking-[0.04em] text-muted uppercase">
              Probetraining / Dein erster Schritt
            </p>
            <h1 className="mt-[47px] text-[60px] leading-[61px] font-semibold tracking-tight uppercase">
              Komm auf
              <br />
              die Matte.
            </h1>
            <p className="mt-4 text-[21px] leading-8 text-muted">
              Wir stimmen deinen Einstieg persönlich mit dir ab.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container>
          <div className="px-[72px] pt-[72px] pb-[72px]">
            <p className="font-mono text-[10px] tracking-[0.08em] text-signal uppercase">
              Deine Anfrage
            </p>
            <h2 className="mt-10 text-[57px] leading-none font-semibold tracking-tight">
              Lass uns starten.
            </h2>
            <p className="mt-6 text-[13px] leading-none font-medium text-signal">
              DESIGNENTWURF / Noch kein Formularversand verbunden.
            </p>

            <form className="mt-8 max-w-[1000px]">
              {fields.map((field, index) => (
                <div key={field.id} className={index === 0 ? undefined : "mt-7"}>
                  <label htmlFor={field.id} className="text-sm font-semibold">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    className="mt-6 h-[66px] w-full bg-sand px-5 text-base text-ink outline-none placeholder:text-ink"
                  />
                </div>
              ))}

              <label className="mt-8 flex items-center gap-3 text-sm font-semibold">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="size-2.5 shrink-0 appearance-none border border-ink bg-paper checked:bg-ink"
                />
                Datenschutzhinweise gelesen *
              </label>

              <button
                type="button"
                className="mt-6 inline-flex h-10 items-center gap-2 bg-signal px-3 text-sm font-medium text-white"
              >
                Anfrage senden
                <ArrowUpRight />
              </button>
            </form>

            <p className="mt-8 max-w-[1000px] text-sm">
              Die Anfrage ist keine Mitgliedschaft. Wir bestätigen deinen Termin persönlich.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
