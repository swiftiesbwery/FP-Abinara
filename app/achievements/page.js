import PageHead from "../../components/PageHead";
import { achievements } from "../../components/data";

export const metadata = { title: "Achievements — Abinara-1 ITS" };

export default function Achievements() {
  return (
    <>
      <PageHead title="Achievements" text="Our results at the Indonesian Robot Contest (KRI)." />
      <section className="mx-auto max-w-6xl px-5">
        <ol className="border-l border-line ml-1">
          {achievements.map((a) => (
            <li key={a.year} className="relative pl-8 pb-12">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-brand" />
              <p className="text-sm text-muted">{a.year}</p>
              <h2 className="mt-1 text-xl font-semibold">{a.title}</h2>
              <p className="mt-2 text-muted max-w-lg">{a.note}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
