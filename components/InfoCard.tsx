import Link from "next/link";

type Props = {
  title: string;
  body: string;
  href?: string;
  cta?: string;
};

export default function InfoCard({ title, body, href, cta }: Props) {
  return (
    <div className="card flex flex-col">
      <h3 className="text-xl text-brand-deep">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-stone/75">{body}</p>
      {href && cta && (
        <Link href={href} className="mt-5 text-sm font-medium text-brand-sea hover:text-brand-deep">
          {cta} →
        </Link>
      )}
    </div>
  );
}
