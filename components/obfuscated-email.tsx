"use client";
import { useEffect, useState } from "react";

type Props = {
  user: string;
  domain: string;
  className?: string;
  children?: React.ReactNode;
};

export function ObfuscatedEmail({ user, domain, className, children }: Props) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(true);
  }, []);

  if (!revealed) {
    return (
      <span className={className} aria-label="E-Mail-Adresse">
        {children ?? `${user} [at] ${domain}`}
      </span>
    );
  }

  const address = `${user}@${domain}`;
  return (
    <a href={`mailto:${address}`} className={className}>
      {children ?? address}
    </a>
  );
}
