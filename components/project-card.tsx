import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";
import { blurFor } from "@/lib/blur-data";
import { cn } from "@/lib/utils";

type Props = {
  index: number;
  title: string;
  year?: string;
  image: StaticImageData;
  imageFile: string;
  alt: string;
  photoCredit?: string;
  body: React.ReactNode;
  link?: { label: string; href: string };
};

export function ProjectCard({
  index,
  title,
  year,
  image,
  imageFile,
  alt,
  photoCredit,
  body,
  link,
}: Props) {
  const reverse = index % 2 === 1;
  return (
    <article className="reveal grid gap-10 md:gap-14 md:grid-cols-12 items-start">
      <div className={cn("md:col-span-6", reverse && "md:order-2")}>
        <figure>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={blurFor(imageFile)}
              className="object-cover"
            />
          </div>
          {photoCredit ? (
            <figcaption className="text-xs text-[var(--muted)] mt-2">
              Foto: {photoCredit}
            </figcaption>
          ) : null}
        </figure>
      </div>
      <div className="md:col-span-6">
        {year ? (
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-medium mb-3">
            {year}
          </p>
        ) : null}
        <h2 className="mb-5">{title}</h2>
        <div className="prose-content space-y-4 text-[var(--fg)]">{body}</div>
        {link ? (
          <p className="mt-6">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 link-underline text-[var(--accent)]"
            >
              {link.label} <ExternalLink size={14} aria-hidden />
            </a>
          </p>
        ) : null}
      </div>
    </article>
  );
}
