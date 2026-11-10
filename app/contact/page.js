import PageHead from "../../components/PageHead";
import { contact } from "../../components/data";
import ContactForm from "../../components/ContactForm";

export const metadata = { title: "Contact — Abinara-1 ITS" };

const rows = [
  ["Email", contact.email, `mailto:${contact.email}`],
  ["Instagram", "@abinara.1", contact.instagram],
  ["LinkedIn", "Abinara-1 ITS", contact.linkedin],
  ["Website", "abinara-1.pages.dev", contact.site],
];

export default function Contact() {
  return (
    <>
      <PageHead title="Contact" text="Questions about recruitment, sponsorship, or the shop? Reach us here." />
      <section className="mx-auto max-w-6xl px-5">
        <dl className="divide-y divide-line border-y border-line max-w-xl">
          {rows.map(([k, v, href]) => (
            <div key={k} className="py-5 flex justify-between gap-6">
              <dt className="text-muted">{k}</dt>
              <dd><a href={href} className="font-medium hover:text-brand">{v}</a></dd>
            </div>
          ))}
        </dl>
        <h2 className="mt-16 mb-6 text-2xl font-bold tracking-tight">Contact us</h2>
        <ContactForm />
        <p className="mt-12 text-sm text-muted">Abinara-1, Sukolilo Campus, Institut Teknologi Sepuluh Nopember, Surabaya.</p>
      </section>
    </>
  );
}
