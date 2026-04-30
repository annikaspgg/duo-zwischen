import Image from "next/image";
import type { StaticImageData } from "next/image";
import { blurFor } from "@/lib/blur-data";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  image: StaticImageData;
  imageFile: string;
  alt: string;
  reverse?: boolean;
  imagePosition?: string;
  children: React.ReactNode;
};

export function BioBlock({ eyebrow, title, image, imageFile, alt, reverse, imagePosition, children }: Props) {
  return (
    <article className={cn("reveal grid gap-10 md:gap-14 md:grid-cols-12 items-center")}>
      <div className={cn("md:col-span-5", reverse && "md:order-2")}>
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            placeholder="blur"
            blurDataURL={blurFor(imageFile)}
            className="object-cover"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
        </div>
      </div>
      <div className={cn("md:col-span-7")}>
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)] font-medium mb-3">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mb-6">{title}</h2>
        <div className="prose-content text-[var(--fg)] space-y-5">{children}</div>
      </div>
    </article>
  );
}
