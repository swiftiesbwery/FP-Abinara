import PageHead from "../../components/PageHead";
import { products, contact } from "../../components/data";

export const metadata = { title: "Shop — Abinara-1 ITS" };

export default function Shop() {
  return (
    <>
      <PageHead title="Shop" text="Team merchandise. Orders go through email for now." />
      <section className="mx-auto max-w-6xl px-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article key={p.name} className="border border-line rounded-2xl overflow-hidden">
            <div className="aspect-square bg-soft" />
            <div className="p-5">
              <h2 className="font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted">{p.price}</p>
              <a
                href={`mailto:${contact.email}?subject=Order: ${encodeURIComponent(p.name)}`}
                className="inline-block mt-4 text-sm font-medium text-brand hover:text-ink"
              >
                Order by email
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
