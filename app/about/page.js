import PageHead from "../../components/PageHead";
import { robot, specs, team } from "../../components/data";

export const metadata = { title: "About — Abinara-1 ITS" };

export default function About() {
  return (
    <>
      <PageHead
        title="About Abinara-1"
        text="Abinara-1 is a team under UKM Robotika ITS. The name stands for “Amerika Bisa, Indonesia Juara 1”."
      />

      <section className="mx-auto max-w-6xl px-5 pb-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">About the robot</h2>
          <p className="mt-4 font-medium">{robot.purpose}</p>
          <p className="mt-3 text-muted leading-relaxed">{robot.how}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-2xl font-bold tracking-tight">Specifications</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {specs.map((s) => (
            <div key={s.division} className="border border-line rounded-2xl p-6">
              <h3 className="font-semibold">{s.division}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {s.items.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-muted">{k}</dt>
                    <dd className="font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-bold tracking-tight">Team</h2>
        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <li key={i} className="border border-line rounded-2xl p-5">
              <div className="h-12 w-12 rounded-full bg-soft" />
              <p className="mt-4 font-semibold">{m.name}</p>
              <p className="text-sm text-muted">{m.role}</p>
              <p className="text-sm text-muted">{m.division}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
