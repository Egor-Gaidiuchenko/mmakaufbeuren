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
    type: "select",
    required: false,
    autoComplete: undefined,
  },
  {
    id: "experience",
    label: "Erfahrung",
    placeholder: "Ich starte neu",
    type: "select",
    required: false,
    autoComplete: undefined,
  },
  {
    id: "message",
    label: "Nachricht",
    placeholder: "Wann passt es dir?",
    type: "textarea",
    required: false,
    autoComplete: undefined,
  },
] as const;

export function ProbetrainingPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <Container>
          <div className="px-4 pt-8 pb-10 sm:px-6 sm:pt-10 md:px-10 md:pt-12 md:pb-14 lg:px-[72px] lg:pt-[72px] lg:pb-16">
            <p className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
              Probetraining / Dein erster Schritt
            </p>
            <h1 className="mt-5 text-[54px] leading-[54px] font-semibold tracking-tight uppercase sm:text-[60px] sm:leading-[61px] md:mt-6">
              Komm auf
              <br />
              die Matte.
            </h1>
            <p className="mt-4 max-w-[640px] text-lg leading-7 text-muted sm:text-[21px] sm:leading-8">
              Wir stimmen deinen Einstieg persönlich mit dir ab.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container>
          <div className="px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-[72px] lg:py-[72px]">
            <p className="font-mono text-[10px] tracking-[0.08em] text-signal uppercase">
              Deine Anfrage
            </p>
            <h2 className="mt-5 text-[54px] leading-[54px] font-semibold tracking-tight sm:mt-6 sm:text-[57px] sm:leading-none">
              Lass uns starten.
            </h2>
            <p className="mt-5 text-[13px] leading-4 font-medium text-signal">
              DESIGNENTWURF / Noch kein Formularversand verbunden.
            </p>

            <form className="mt-8 max-w-[1000px]">
              {fields.map((field, index) => (
                <div key={field.id} className={index === 0 ? undefined : "mt-7"}>
                  <label htmlFor={field.id} className="text-sm font-semibold">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={4}
                      className="mt-4 w-full resize-y bg-sand px-4 py-3 text-base text-ink outline-none placeholder:text-ink sm:mt-6 sm:px-5 sm:py-4"
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      defaultValue=""
                      className="mt-4 h-14 w-full bg-sand px-4 text-base text-ink outline-none sm:mt-6 sm:h-[66px] sm:px-5"
                    >
                      <option value="" disabled>
                        {field.placeholder}
                      </option>
                      <option value={field.placeholder}>{field.placeholder}</option>
                    </select>
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      className="mt-4 h-14 w-full bg-sand px-4 text-base text-ink outline-none placeholder:text-ink sm:mt-6 sm:h-[66px] sm:px-5"
                    />
                  )}
                </div>
              ))}

              <label className="mt-8 flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="size-4 shrink-0 appearance-none border border-ink bg-paper checked:bg-ink"
                />
                Datenschutzhinweise gelesen *
              </label>

              <button
                type="button"
                className="mt-6 inline-flex h-12 items-center gap-2 bg-signal px-4 text-sm font-medium text-white sm:h-10 sm:px-3"
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
