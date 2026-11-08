import { loadHomeTrainers } from "../api/home-content";

export async function HomeTrainers() {
  const trainers = await loadHomeTrainers().catch((error: unknown) => {
    console.error(error);
    return null;
  });

  if (!trainers) {
    return <p className="mt-8 text-base">Die Trainer konnten nicht geladen werden.</p>;
  }

  if (trainers.length === 0) {
    return <p className="mt-8 text-base">Noch keine Trainer.</p>;
  }

  return (
    <ul className="mt-8 grid gap-6 md:grid-cols-2">
      {trainers.map((trainer) => (
        <li key={trainer.id} className="min-w-0">
          <article>
            <div className="bg-paper">
              {trainer.photoUrl ? (
                <img src={trainer.photoUrl} alt="" className="block h-auto w-full" />
              ) : (
                <div className="relative aspect-[9/16]">
                  <TrainerMark />
                </div>
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold">
              {trainer.firstName} {trainer.lastName}
            </h3>
          </article>
        </li>
      ))}
    </ul>
  );
}

function TrainerMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="absolute inset-0 m-auto size-16 text-muted">
      <circle cx="32" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 54c2.5-10 10-14 18-14s15.5 4 18 14" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
