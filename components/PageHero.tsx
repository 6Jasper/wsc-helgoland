import Image from "next/image";

type Props = {
  title: string;
  lead?: string;
  image: string;
  alt: string;
};

export default function PageHero({ title, lead, image, alt }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[42vh] min-h-[320px] w-full">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/60 via-brand-deep/40 to-brand-sand" />
      </div>
      <div className="container-x -mt-28 relative pb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl text-brand-sand">{title}</h1>
          {lead && (
            <p className="mt-5 max-w-prose text-lg text-brand-sand/90">{lead}</p>
          )}
        </div>
      </div>
    </section>
  );
}
