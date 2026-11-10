import Link from "next/link";
import { achievements, robot, sponsors } from "../components/data";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-muted">Abinara-1 ITS</p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">{robot.name}</h1>
          <p className="mt-6 max-w-md text-lg text-muted leading-relaxed">{robot.tagline}</p>
          <div className="mt-9 flex gap-3">
            <Link href="/about" className="bg-brand text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-ink transition-colors">About the robot</Link>
            <Link href="/achievements" className="border border-line px-6 py-3 rounded-full text-sm font-medium hover:border-ink transition-colors">Achievements</Link>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={robot.image} alt={`${robot.name} robot`} className="w-full rounded-3xl bg-soft" />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="text-2xl font-bold tracking-tight">Recent results</h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {achievements.slice(0, 3).map((a) => (
            <li key={a.year} className="py-5 flex gap-8">
              <span className="w-14 text-muted">{a.year}</span>
              <span className="font-medium">{a.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-soft">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-2xl font-bold tracking-tight">Sponsors</h2>
          <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
            {sponsors.map((s) => (
              <li key={s.name} className="h-24 bg-white border border-line rounded-2xl flex items-center justify-center p-4 text-sm text-muted">
                {s.logo ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={s.logo} alt={s.name} className="max-h-full max-w-full object-contain" /> : s.name}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="inline-block mt-8 text-sm font-medium text-brand hover:text-ink">Become a sponsor</Link>
        </div>
      </section>
    </>
  );
}
