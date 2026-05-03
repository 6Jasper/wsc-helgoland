export function PhotoCredit() {
  return (
    <section className="bg-bg-surface border-t border-border-subtle px-6 md:px-14 py-8 md:py-10">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[12px] md:text-[13px] text-text-dim leading-relaxed">
          Drohnenaufnahmen auf dieser Seite mit freundlicher Unterstützung von{" "}
          <a
            href="https://falmstudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors underline-offset-4 hover:underline"
          >
            falmstudios.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
