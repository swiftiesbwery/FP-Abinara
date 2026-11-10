export default function PageHead({ title, text }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-20 pb-12">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
      {text && <p className="mt-5 max-w-xl text-muted leading-relaxed">{text}</p>}
    </section>
  );
}
