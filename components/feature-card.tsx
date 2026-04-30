import Image from "next/image";
import type { StaticImageData } from "next/image";
import { blurFor } from "@/lib/blur-data";

type Props = {
  title: string;
  body: string;
  image: StaticImageData;
  imageFile: string;
  alt: string;
};

export function FeatureCard({ title, body, image, imageFile, alt }: Props) {
  return (
    <article className="reveal flex flex-col bg-[var(--card)] border border-[var(--line)] overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={blurFor(imageFile)}
          className="object-cover"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col gap-3">
        <h3>{title}</h3>
        <p className="text-[var(--muted)]">{body}</p>
      </div>
    </article>
  );
}
