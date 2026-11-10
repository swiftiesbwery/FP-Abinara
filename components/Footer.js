import { contact } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted">
        <p>© 2026 Abinara-1 ITS. Institut Teknologi Sepuluh Nopember, Surabaya.</p>
        <div className="flex gap-5">
          <a href={contact.instagram} className="hover:text-ink">Instagram</a>
          <a href={contact.linkedin} className="hover:text-ink">LinkedIn</a>
          <a href={`mailto:${contact.email}`} className="hover:text-ink">Email</a>
        </div>
      </div>
    </footer>
  );
}
